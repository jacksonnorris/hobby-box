import { gql } from '@apollo/client';

// ***this is what we would do in apollo sandbox:

// get All Users
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
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
// export const QUERY_VALIDATE_USER = gql`
//   query validate {
//     validate {
//     #need to confirm properties
//       _id
//       username
//       email
//     }
//   }
//   `;
  
// get All Boxes
  // export const TBD = gql`
  // query TBD {
  //   TBD {
  //   #properties go here:
  //     _id
  //     username
  //     email
  //   }
  // }
  // `;


  // get single box by id
  // export const TBD = gql`
  // query TBD {
  //   TBD {
  //   #properties go here:
  //     _id
  //     username
  //     email
  //   }
  // }
  // `;
  

   // get checkout
  // export const TBD = gql`
  // query TBD {
  //   TBD {
  //   #properties go here:
  //     _id
  //     username
  //     email
  //   }
  // }
  // `;

