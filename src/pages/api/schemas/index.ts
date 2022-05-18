import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: Int
  }

  input UserInput {
    firstName: String!
    lastName: String!
    phoneNumber: Int
  }

  type Query {
    getUsers: [User]!
  }

  type Mutation {
    newUser(input: UserInput): User!
  }
`;

export default typeDefs;
