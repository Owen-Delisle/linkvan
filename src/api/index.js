import gql from 'graphql-tag';

export const QueryLocations = gql`
  query locations {
    locations {
      id
      title
      description
      longitude
      latitude
    }
  }
`;
