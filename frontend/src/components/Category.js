import React from "react";
import PropTypes from "prop-types";

const Category = ({ name }) => {
  return (
    <div className="content">
      <h4>{name}</h4>
    </div>
  );
};
Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
