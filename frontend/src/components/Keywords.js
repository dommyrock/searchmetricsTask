import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/AppProvider";
import { ADD_KEYWORD, REMOVE_KEYWORD } from "../reducers/reducerFunction";

const Keywords = ({ keywords, id }) => {
  const { dispatch, appState } = useContext(Context);

  //local state
  const [inputValue, setInput] = useState("");

  return (
    <>
      <div className="keywords">
        {keywords.map((kw) => (
          <h6>{`${kw} , `}</h6>
        ))}
        <input
          placeholder="add keyword"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={() => dispatch({ type: ADD_KEYWORD, payload: inputValue, id })}>Add</button>

      <button
        onClick={() =>
          dispatch({ type: REMOVE_KEYWORD, payload: keywords[keywords.length - 1], id })
        }
      >
        Delete
      </button>
    </>
  );
};
Keywords.propTypes = {
  keywords: PropTypes.array,
};

export default Keywords;
