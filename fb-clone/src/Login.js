import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
     
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7V_C7_AFy1WeGWVB0yfzeCQsFePJEhfHHAw&usqp=CAU" />
      </div>
      <Button type="submit" onClick={signIn}>
        SIGN IN
      </Button>
    </div>
  );
};

export default Login;
