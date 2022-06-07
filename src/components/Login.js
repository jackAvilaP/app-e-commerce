import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUsersThunk } from "../redux/actions";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//https://classroom.google.com/c/NDU5ODYxMTkzODYw/a/NDcyMTE4NzczNDEz/details
//https://academlo.notion.site/React-df6fc9c1853a46c184b6896ff550b51a
//https://codesandbox.io/s/app-noticias-5bi9o6?file=/src/App.js

const Login = ({ setIsLoginOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  const loginUsers = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(loginUsersThunk(credentials))
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setLoginError("");
        setIsLoginOpen(false);
      })
      .catch((error) => {
        setLoginError(error.response.data.message);
        setEmail("");
        setPassword("");
      });
  };
  const outLogin = () => {
    localStorage.setItem("token", "");
    setLoginError("");
    setIsLoginOpen(false);
  };

  return (
    <form onSubmit={loginUsers} className="login">
      {localStorage.getItem("token") ? (
        <>
          <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
          <button onClick={outLogin} className="buttonLogOut">
            log out
          </button>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
          <h3>Hello! Enter your email</h3>
          <input
            type="email"
            className="loginInput"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="loginInput"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="buttonLogOut">Submit</button>
          {loginError}
        </>
      )}
    </form>
  );
};

export default Login;
