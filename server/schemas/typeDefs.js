const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    address: String
    shipping: String
    orders: [Order]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Order {
    _id: ID
    user: User
    name: String!
    price: Float!
    box: Box!
    frequency: Int!
  }

  input OrderInputs {
    _id: ID
    user: UserInputs
    name: String!
    price: Float!
    box: BoxInputs!
    frequency: Int!
  }

  input UserInputs {
    _id: ID
    username: String!
    email: String!
    password: String!
    address: String
    shipping: String
    orders: [OrderInputs]
  }

  input BoxInputs {
    _id: ID
    name: String!
    price: [Float!]
    description: String!
    images: [String!]
    pastBox: [PastBoxInputs]
    frequency: [Int]
  }

  input PastBoxInputs {
    _id: ID
    price: Float!
    description: String!
  }

  type Box {
    _id: ID
    name: String!
    price: [Float]!
    description: String!
    images: [String]!
    pastBox: [PastBox]
    frequency: [Int]
  }

  type PastBox {
    _id: ID
    price: Float!
    description: String!
  }

  type Checkout {
    session: ID
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    orders: [Order]!
    boxes: [Box]!
    box(id: ID!): Box
    checkout(box: [ID]!): Checkout
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    updateUser(username: String, email: String, password: String, address: String, shipping: String, orders: [OrderInputs]): User
    removeUser(_id: ID!): User
    addOrder(box: ID!): Order
    updateOrder(price: Float, box: BoxInputs, frequency: Int): Order
  }
`;

module.exports = typeDefs;
