import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";

const resolvers = {
  Query: {
    getAllUsers: () => prisma.users(),
    getAllPhotos: () => prisma.photos()
  }
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
