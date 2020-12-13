import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    feed {
        id
        name
        image
        episodes
    }
  }
`;
