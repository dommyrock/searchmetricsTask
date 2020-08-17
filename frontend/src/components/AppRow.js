import React from "react";
import Category from "./Category";
import Keywords from "./Keywords";
import PropTypes from "prop-types";
import { REMOVE_CATEGORY } from "../reducers/reducerFunction";

const AppRow = ({ data, deleteDispatch }) => {
  return (
    <div className="app-flex2col">
      <button onClick={() => deleteDispatch({ type: REMOVE_CATEGORY, payload: data.id })}>
        Delete category
      </button>
      <Category name={data.name} key={data.name} />
      <Keywords keywords={data.keywords} id={data.id} key={data.id} />
    </div>
  );
};
AppRow.propTypes = {
  data: PropTypes.array,
  // name: PropTypes.string, //.isRequired
  // keywords: PropTypes.array,
};
export default AppRow;
