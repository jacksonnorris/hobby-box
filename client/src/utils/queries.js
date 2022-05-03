import { gql } from '@apollo/client';

// ***this is what we would do in apollo sandbox:

// getAllUsers
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;
// getSingleUser 
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

// // validateUser
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
  
// getAllOrders
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


  // getAllInterests
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

   // getSingleInterest
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

     // getAllBoxes
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

  
     // getSingleBox
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