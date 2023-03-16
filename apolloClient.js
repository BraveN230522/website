import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx, middlewareAuthLink, middlewareErrorLink) {
  const gqlEndpoint = `${process.env.GQL_SERVER_URL}:${process.env.GQL_PORT}/${process.env.GQL_APIPREFIX}`;

  const httpLink = new HttpLink({
    uri: gqlEndpoint,
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch,
  });

  const link = ApolloLink.from([middlewareAuthLink(ctx), middlewareErrorLink, httpLink]);

  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
