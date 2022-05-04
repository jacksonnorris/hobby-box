// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_BOXES } from '../utils/queries';
// Components
// import UserList from '../components/UserList';
import Products from '../components/Products';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  const { loading, data } = useQuery(QUERY_BOXES);
  console.log(data);
  const renderProducts = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <Products products={data} title="List of Products" />
    }
  }

  return (
    <main>
      <div className="flex-row justify-center">
        {renderUsername()}
      </div>
      <h2>Check out our amazing products!</h2>
      <div>
        {renderProducts()}
      </div>
    </main>
  );
};

export default Home;
