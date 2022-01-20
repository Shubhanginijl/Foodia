import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Login } from "../Redux/Action";
import "./home.css";
const Signin = () => {
  let dispatch = useDispatch();
  let Navigate = useNavigate();

  let [state, setstate] = useState({
    email: "",
    password: "",
    phonenumber: "",
    age: "",
    gender: "",
  });
  let { email, password } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(Login(email, password));
      toast.success("Successfully logged in");
      Navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <section className="loginForm">
        <article className="sign">
          <div className="division mt-4">
            <h1 >Login here </h1>
            <div className=" container mt-4">
              <form id="form" onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                    style={{ color: "black",fontWeight:"bold" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{ color: "black" }}
                  >
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ color: "black",fontWeight:"bold" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleCheck1"
                    style={{ color: "black" }}
                  >
                    Check me out
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/forgotpassword"> Forgot Password?</Link>
                  </label>
                </div>
                <button type="submit" className="btn" style={{background:"crimson",color:"white",marginLeft:"100px",marginTop:"10px"}}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Signin;
