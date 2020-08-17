import React, { useContext, useEffect, useReducer, useState } from "react";
import { Context } from "../context/AppProvider";
import { ADD_CATEGORY } from "../reducers/reducerFunction";
import AppRow from "./AppRow";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const kewordsQuery = gql`
  query testFetch2($keyword: String!, $max: Int!) {
    data: testFetch2(keyword: $keyword, max: $max) {
      word
    }
  }
`;

const AppContainer = () => {
  const limit = 10;
  const { dispatch, appState } = useContext(Context);
  const [inputValue, setInput] = useState("");

  //createCategory cb method that triggers query
  const [createCategory, { loading, error, data }] = useLazyQuery(kewordsQuery, {
    variables: { keyword: inputValue, max: limit },
  });
  //NOTE: after 1st query apolo refetches  before btn click ...

  useEffect(() => {
    if (inputValue && data) {
      debugger;
      dispatch({
        type: ADD_CATEGORY,
        payload: { category: inputValue, keywords: data, context: appState },
      });
    }
  }, [data]);

  return (
    <div>
      <input
        style={{ border: "solid", borderWidth: "1px", marginBottom: "5px" }}
        placeholder="Category name"
        value={inputValue}
        onChangeCapture={(e) => setInput(e.target.value)}
      />
      <button onClick={() => createCategory()}>Add category</button>

      {appState &&
        appState.map((item) => <AppRow data={item} deleteDispatch={dispatch} key={item.id} />)}
    </div>
  );
};
export default AppContainer;

//persist data on refresh if i want (ooptional)
//   useEffect(() => {
//     const rawData = localStorage.getItem("data");
//     dispatch({ type: "", payload: JSON.parse(rawData) });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(appState));
//   }, [appState]);
