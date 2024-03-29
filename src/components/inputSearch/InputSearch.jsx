import React from "react";
import "./inputSearch.scss";

const InputSearch = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
      onKeyPress={props.onKeyPress ? (e) => props.onKeyPress(e) : null}
    />
  );
};

export default InputSearch;
