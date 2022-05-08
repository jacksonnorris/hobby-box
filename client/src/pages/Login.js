import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    const { target } = event;

    if (value.length === 0) {
      target.classList.add('missing');
      const required = target.nextElementSibling
      required.removeAttribute('hidden');
    } else {
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

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
      <div className='my-12
      form-control
      block
      w-4/12
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
        <h2 className='loginTitle'>Login</h2>
        <form class='form-login' onSubmit={handleFormSubmit}>
          <div className='loginFormInputs'>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <div className="form-warning" hidden='hidden'>
              <p className='warning mt-2' hidden>Required</p>
            </div>
          </div>
          <div className='loginFormInputs'>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <div className="form-warning" hidden='hidden'>
              <p className='warning mt-2' hidden>Required</p>
            </div>
          </div>
          <div className='loginSubmitButton'>
            <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400   to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <main className='SandLBackground'>
      <div className='container mx-auto px-4'>
        <div className='loginForm'>
          {renderForm()}
        </div>
        {error && <div className='loginFormErr'>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
