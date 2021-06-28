import { GraphQLClient } from 'graphql-request';
import { API_TOKEN, API_URL } from './constants';

const graphqlClient = new GraphQLClient(API_URL, {
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetcher = (query) => graphqlClient.request(query);
