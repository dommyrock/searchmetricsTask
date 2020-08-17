const { ApolloServer, gql } = require("apollo-server");
const fetch = require("node-fetch");

const API_URL = "https://api.datamuse.com/";
//test https://api.datamuse.com/words?ml=programming&max=10
const typeDefs = gql`
  type Keyword {
    word: String!
    score: Int
    tags: [String]
  }

  type Query {
    hello: String
    similarKeywords: [String!]
    testFetch: [Keyword]
    testFetch2(keyword: String!, max: Int!): [Keyword]
  }
`;
/**
 * Client query 
 * query{
  testFetch2(keyword:"programming",max:5){
    word
  }
}
 */

const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello from Searchmetrics!",
    similarKeywords: (root, args, context) => {
      const data = [
        "TODO...",
        "fetch api @https://www.datamuse.com/api/ and respond from this resolver with its data",
        API_URL,
      ];
      return data;
    },
    testFetch: async () => {
      const response = await fetch(`${API_URL}words?ml=test&max=5`);
      const data = await response.json();
      return data;
    },
    testFetch2: async (root, { keyword, max }) => {
      const response = await fetch(`${API_URL}words?ml=${keyword}&max=${max}`);
      const data = await response.json();
      return data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //enable playground in prod:
  // introspection: true,
  // playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
/**
 * example api fetch
 * http://developers.searchmetrics.com/examples/javascript
 * http://developers.searchmetrics.com/explore/
 * TODO
 * 
 * https://searchmetrics.recruitee.com/v/i/t/y9uw9k2l1acg/fhe2whb5ve6c
 * The user should be able to create and delete keyword categories
    The user should be able to add and remove keywords. 
    Each keyword belongs to a category
    -------------------------------------API
    When the category is created, the backend app should prefill it with keywords with a meaning similar to the category name
    To find semantically similar keywords please use this free API: https://www.datamuse.com/api/
    Please use up to 10 keywords with the highest score
 */
