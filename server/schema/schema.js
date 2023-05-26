const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQlID,
  GraphQLSchema,
  GraphQLInt,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQlID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQlID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQlID } },
      resolve(parent, args) {},
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQlID } },
      resolve(parent, args) {},
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
