// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_BOXES } from '../utils/queries';
// Components
//  import UserList from '../components/UserList';
import Products from '../components/Products';
import Cart from "../components/Cart";

const Home = () => {
  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  const { loading: boxesLoading, data: boxesData } = useQuery(QUERY_BOXES);
  const boxes = boxesData?.boxes || [];
  console.log(boxes);

  const renderProducts = () => {
    if (boxesLoading) {
      return <h2>Loading...</h2>
    } else {
      return <Products products={boxes} title="List of Products" />
    }
  }

  return (
    <main>
      <div class='heroImage'><img src='https://res.cloudinary.com/dfamiaufc/image/upload/v1651960530/Hobby%20Box/heroImage_x00w0v.webp' alt='banner' /></div>
      <div className="flex-row justify-center">
        {renderUsername()}
        <Cart />
      </div>
      <h2>Check out our amazing products!</h2>
      <div className='cardWrapper'>
        {renderProducts()}
      </div>
    </main>
  );
};

export default Home;
