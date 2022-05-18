import { gql } from '@apollo/client';

export const NEW_USER = gql`
  mutation New_User($input: UserInput) {
    newUser(input: $input) {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;
