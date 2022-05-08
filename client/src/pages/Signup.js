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
<<<<<<< HEAD
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
=======
      <div className='my-5
      form-control
      block
      w-6/12
      px-3
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "'>
        <h2 className='signUpTitle'>Sign Up</h2>
        <form class='form' onSubmit={handleFormSubmit}>
          <div className="form-item">
            <input className='signUpInput'
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
            <div className="form-warning">
              <p className='warning mt-2' hidden>Required</p>
            </div>
          <div className="form-item">
            <input className='signUpInput'
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
            <div className="form-warning">
              <p className='warning mt-2' hidden>Required</p>
            </div>
          <div className="form-item">
            <input className='signUpInput'
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
            <div className="form-warning">
              <p className='warning mt-2' hidden>Required</p>
            </div>
          <div className="form-item">
            <input className='signUpInput'
              placeholder="Billing Address"
              name="billingAddress"
              type="text"
              value={formState.billingAddress}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
            <div className="form-warning">
              <p className='warning mt-2' hidden>Required</p>
            </div>
          <div className="form-item">
            <input className='signUpInput'
              placeholder="Shipping Address"
              name="shippingAddress"
              type="text"
              value={formState.shippingAddress}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </div>
            <div className="form-warning">
              <p className='warning mt-2' hidden>Required</p>
            </div>

          <div className='signUpButton'>
            <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400   to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
        </form >
      </div>
>>>>>>> main
    );
  };

  return (
    <main className='SandLBackground'>
      <div clasName= 'marginSetter'>
      
      <div className='signUpForm'>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
      </div>
    </main>
  );
};



export default Signup;

