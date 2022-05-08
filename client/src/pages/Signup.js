import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    billingAddress: '',
    shippingAddress: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { target } = event;

    console.log('value length', value.length);

    if (value.length === 0) {
      target.classList.add('missing');
      target.classList.remove('form-control');
      const required = target.nextElementSibling
      required.removeAttribute('hidden');
    } else {
      target.classList.add('form-control');
      target.classList.remove('missing');
      const removed = target.nextElementSibling
      console.log(removed);
      removed.setAttribute('hidden', 'hidden');
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <form class='form' onSubmit={handleFormSubmit}>
        
        <div className="form-item">
          <input
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <p className='warning mt-2' hidden>Required</p>
        </div>
        <div className="form-item">
          <input
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <p className='warning mt-2' hidden>Required</p>
        </div>
        <div className="form-item">
          <input
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <p className='warning mt-2' hidden>Required</p>
        </div>
        <div className="form-item">
          <input
            placeholder="Billing Address"
            name="billingAddress"
            type="text"
            value={formState.billingAddress}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <p className='warning mt-2' hidden>Required</p>
        </div>
        <div className="form-item">
          <input
            placeholder="Shipping Address"
            name="shippingAddress"
            type="text"
            value={formState.shippingAddress}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <p className='warning mt-2' hidden>Required</p>
        </div>
        <button type="submit">
          Submit
        </button>
      </form >
    );
  };

  return (
    <main>
      <h4>Sign Up</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};



export default Signup;

