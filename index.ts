import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";

const resolvers = {
  Query: {
    getAllUsers: () => prisma.users(),
    getAllPhotos: () => prisma.photos(),
    photosByUser: (_, { id }) => prisma.user({ id }).photos()
  },
  Mutation: {
    createUser: (_, { name }) => prisma.createUser({ name }),
    createPhoto: (_, { caption, userID }) =>
      prisma.createPhoto({ caption, author: { connect: { id: userID } } })
  }
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
