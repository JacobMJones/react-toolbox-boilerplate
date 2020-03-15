import React from "react";
import { useHistory } from "react-router-dom";

const LinkButton = ({ to, label }) => {
  let history = useHistory();
  function handleClick() {
    history.push(to);
  }
  return (
    <button
      onClick={() => {
        handleClick()
      }}
    >
      {label}
    </button>
  );
};

export default LinkButton;
