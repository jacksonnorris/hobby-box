// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';

// Utilities
import Auth from '../utils/auth';
import { QUERY_BOXES } from '../utils/queries';

// Components
import Products from '../components/Products';
import Cart from "../components/Cart";

const Home = () => {
  const renderUsername = () => {
    if (!Auth.loggedIn()) return `Welcome to HobbyBox!`;
    return `Welcome to HobbyBox, ${Auth.getProfile().data.username}`;
  }

  const { loading: boxesLoading, data: boxesData } = useQuery(QUERY_BOXES);
  const boxes = boxesData?.boxes || [];

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
        <h2 className='welcome'>{renderUsername()}</h2>
        <Cart />
      </div>
      <h3 className='home-header'>Check out this month's box selection</h3>
      <div className='cardWrapper'>
        {renderProducts()}
      </div>
    </main>
  );
};

export default Home;
