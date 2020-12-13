const { ApolloServer } = require('apollo-server');

const fs = require('fs');
const path = require('path');

const characters = fs.readFileSync(
    path.join(__dirname, 'charactersMock.json'),
    'utf8'
);

const resolvers = {
    Query: {
      info: () => `This is StarWars Characters API`,
      feed: () => JSON.parse(characters),
    },
    Characters: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        image: (parent) => parent.image,
        episodes: (parent) => parent.episodes,
    },
  };

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ),
    resolvers,
  });

server
  .listen()
  .then(({ url }) =>
    console.info(`Server is running on ${url}`)
  );
