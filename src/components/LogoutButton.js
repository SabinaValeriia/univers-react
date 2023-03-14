import React from "react";

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.isLoggedIn ? "Выйти" : "Войти"}
    </button>
  );
};

export default LogoutButton;
