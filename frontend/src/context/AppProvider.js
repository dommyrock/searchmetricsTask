import React, { createContext, useReducer, useState } from "react";
import { categoryReducer } from "../reducers/reducerFunction";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
const initialState = [
  // {
  //   name: "category_1",
  //   keywords: ["cat", "can", "coconut"],
  //   id: 1,
  // },
  // {
  //   name: "category_2",
  //   keywords: ["rat", "ratatat", "racoon"],
  //   id: 2,
  // },
];
export const Context = createContext(null);

export const AppProvider = (props) => {
  const [appState, dispatch] = useReducer(categoryReducer, initialState);
  debugger;

  return (
    <Context.Provider
      value={{
        dispatch,
        appState,
      }}
    >
      <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
    </Context.Provider>
  );
};
