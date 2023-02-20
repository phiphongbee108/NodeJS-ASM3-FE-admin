import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";
import UserAPI from "../API/UserAPI";

import "./Auth.css";

function SignIn(props) {
  //listCart được lấy từ redux

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const fetchData = async () => {
      const params = {
        email: email,
        password: password,
      };
      const response = await UserAPI.postSignIng(params);

      response !== "false" ? setRedirect(true) : setRedirect(false);
      response !== "false"
        ? sessionStorage.setItem("currentuser", JSON.stringify(response))
        : sessionStorage.removeItem("currentuser");
    };

    fetchData();
  };
  //Hàm này dùng để đưa hết tất cả carts vào API của user

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <span className="login100-form-title p-b-33">Sign In</span>

          <div className="d-flex justify-content-center pb-5"></div>

          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="container-login100-form-btn m-t-20">
            {redirect && <Redirect to={`/history`} />}
            <button className="login100-form-btn" onClick={onSubmit}>
              Sign in
            </button>
          </div>

          <div className="text-center p-t-45 p-b-4">
            <span className="txt1">Create an account?</span>
            &nbsp;
            <Link to="/signup" className="txt2 hov1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
