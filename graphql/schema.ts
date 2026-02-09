import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Location {
    zip: String!
    city: String!
    state: String!
    tempC: Float!
    tempF: Float!
    condition: String!
    friends: [Location!]!
    notes: String  # Nullable field for demonstration
  }

  type Query {
    weather(zip: String!): Location
    allWeather: [Location!]!
  }

  type Mutation {
    updateWeather(zip: String!, condition: String!): Location
  }
`
