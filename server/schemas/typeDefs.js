const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Order {
    _id: ID
    user: User
    name: String
    price: Float
    boxes: [Box]
  }

  type Interest {
    _id: ID
    user: User
    name: String
    price: Float
    boxes: [Box]
  }

  type Box {
    _id: ID
    user: User
    name: String
    price: Float
    description: String!
    images: String!
    tier: String
    pastBox: [PastBox]
  }

  type PastBox {
    _id: ID
    price: Float
    description: String
    images: String!
    tier: String
  }


  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    orders: Order
    interests: Interest
    boxes: Box
    interest(_id: ID!): Interest
    box(_id: ID!): Box
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
