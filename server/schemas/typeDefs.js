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
  }

  type Box {
    _id: ID
    name: String!
    price: [Float!]
    description: String!
    images: [String!]
    pastBox: [PastBox]
    frequency: [Number]
  }

  type PastBox {
    _id: ID
    price: Float!
    description: String!
  }


  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    orders: [Order]
    boxes: [Box]
    box(_id: ID!): Box
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
