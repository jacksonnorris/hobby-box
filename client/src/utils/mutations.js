import { gql } from '@apollo/client';

// Add User
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $billingAddress: String!, $shippingAddress: String! ) {
    addUser(
      username: $username, 
      email: $email, 
      password: $password, 
      billingAddress: $billingAddress, 
      shippingAddress: $shippingAddress) 
      {
        token
        user {
          _id
          username
      }
    }
  }
`;

// Login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Update User
export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $billingAddress: String, $shippingAddress: String, $orders: [OrderInputs]) {
    updateUser(_id: $id) {
      user {
        _id
        username
        billingAddress
        shippingAddress
        orders
      }
    }
  }
`;

// Remove User
export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    removeUser(_id: $id) {
      user {
        _id
        username
      }
    }
  }
`;

// Add Order
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      order { 
        _id
        purchaseDate
        orderConfirmation
      }
      products {
        _id
        name
        price
        description
      }
    }
  }
`;

// Update Order
export const UPDATE_ORDER = gql`
  mutation updateOrder($price: Float, $box: BoxInputs, $frequency: Int) {
    updateOrder(_id: $id) {
      order {
        _id
        price
        box
        frequency
      }
    }
  }
`;
