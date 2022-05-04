import { gql } from '@apollo/client';

// Add User
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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
  mutation updateUser($_id: ID!, $username: String, $email: String, $password: String, $address: String, $shipping: String, $orders: [OrderInputs]) {
    updateUser(_id: $id) {
      user {
        _id
        username
      }
    }
  }
`;

// removeUser
// (_id: ID!): User
export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    addUser(_id: $id) {
      user {
        _id
        username
      }
    }
  }
`;

// addOrder
export const ADD_ORDER = gql`
  mutation addOrder($box: [ID]!) {
    addOrder(box: $box) {
      user
      name
      price
      box
      frequency
      box {
        name
        price
        description
        images
        pastBox
        frequency
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// Update Order
export const UPDATE_ORDER = gql`
  mutation updateOrder($_id: ID!, $username: String, $email: String, $password: String, $address: String, $shipping: String, $orders: [OrderInputs]) {
    updateOrder(_id: $id) {
      user {
        _id
        username
      }
    }
  }
`;
