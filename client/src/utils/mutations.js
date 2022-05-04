import { gql } from '@apollo/client';

// addUser
// email:String!, username:String!, password:String!): Auth
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

// login
// email:String!, password:String!): Auth
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


// UpdateUser
// username: String, email: String, password: String, address: String, shipping: String, orders: [OrderInputs]): User

// removeUser
// (_id: ID!): User

// addOrder
// box: ID!): Order
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

// updateOrder
// price: Float, box: BoxInputs, frequency: Int): Order
