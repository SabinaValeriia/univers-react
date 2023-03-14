import React from "react";

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.isLoggedIn ? "Выйти" : "Войти"}
    </button>
  );
};

export default LoginButton;
