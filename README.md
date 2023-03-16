## Getting Started

This boilerplate runs in conjunction with the [`Rocketlab GraphQL Boilerplate`](git clone git@github.com:TheRocketLab/gql-aggregator-boilerplate).

Clone and run the GQL backend repo follow the instructions in the README.

Then run this repo in development mode locally:

```cp .env.example .env
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Browse to [http://localhost:3000/users](http://localhost:3000/users) to see a list of users queried from the graphql service. 

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Adding pages and routes

Next.js automatically treats every React component in the Pages directory as a route. If you place a React component named hello.js in the Pages directory then you'll be be able to route to that component via http://localhost:3000/hello.

The boilerplate includes a number of route and dynamic route examples. See [here](https://nextjs.org/docs/routing/introduction) for more about routing and dynamic routes.

### Testing

- All tests are currently contained within the '__test__' folder
- Tests run using Jest and React Testing Library (with snapshots).
- Tests can be run with:

```
yarn test
```

### UAT 

For UAT use the `staging` branch. The Vercel feature url is 

```
yarn test
```

This will run the test watcher.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
