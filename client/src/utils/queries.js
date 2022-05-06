import { gql } from '@apollo/client';

// ***this is what we would do in apollo sandbox:

// get All Users
export const QUERY_USERS = gql`
  query users {
    users {
    _id
    username
    email
    password
    address
    shipping
    }
  }
`;
// get Single User by ID 
export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

//  query from Anthony that was here already--might not need it:
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

// // get Orders

export const QUERY_ORDERS = gql`
  query Orders {
    orders {
      _id
      price
      frequency
      user {
        _id
        address
        shipping
      }
    }
  }
`;




// query Boxes {
//get All Boxes
export const QUERY_BOXES = gql`
  query boxes {
    boxes {
      _id
      name
      price
      description
      images
    }
  }
`;


// get single box by id
export const QUERY_BOX = gql`
  query Box($boxId: ID!) {
    box(id: $boxId) {
      _id
      name
      price
      description
      images
    }
  }
`;


//get checkout
export const QUERY_CHECKOUT = gql`
query Checkout($boxId: [ID]!) {
  checkout(box: $boxId) {
    session
  }
}
`;

