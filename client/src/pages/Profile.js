// Node Modules
import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });
  console.log('userdata', data);
  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!user?.username) {
    return (
      <main>
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      </main>
    );
  }

  const renderCurrentUserInfo = () => {
    if (id && data.me) return null;
    return (
      <ul className='order-details'>
        <li className='detail'>Username: {user.username}</li>
        <li className='detail'>Email: {user.email}</li>
        <li className='detail'>Billing Address: {data.me.billingAddress}</li>
        <li className='detail'>Shipping Address: {data.me.shippingAddress}</li>
      </ul>
    );
  }

  return (
    <main>
      <div className='heroImage-profile'></div>
      <section className='container mx-auto px-4 profile'>
        <div>
          <h4 className='product-header'>Your Personal Information</h4>
          {renderCurrentUserInfo()}
        </div>
        <Link to="/">
          <p><button className={'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'}><span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 '>Back to Home</span></button></p>
        </Link>
      </section>
    </main>
  );
};

export default Profile;
