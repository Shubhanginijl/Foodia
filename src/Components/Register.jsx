import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Createuser } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./home.css";
import './auth.css'
import { GoogleProvider } from './../Redux/Action/index';
import { GoogleLogin } from '../Redux/Action';


const Register = () => {
  let dispatch = useDispatch();
  let navigate=useNavigate()
    
    let [state, setstate] = useState({
      email:"",
      password: "",
      phonenumber: "",
      age: "",
      gender:""
    });
    let { email, password } = state
    let handleChange = e => {
        let { name, value } = e.target;
        setstate({...state,[name]:value})
    }
    let handleSubmit = e => {
        e.preventDefault();
        try {
          dispatch(Createuser(email, password))
           toast.success("successfully signed up");
          navigate("/signin")
         
        } catch (error) {
            
        }
    }

    let handleClick = async provider =>{
      try {
        dispatch(GoogleLogin(provider))
      } catch (error) {
        toast.error(error.message)
      }
    }
  return (
    <section className="registerForm">
      <article className="card1 ">
        <div>
          <h3>
            SignUp Form
          </h3>
          <div className=" container col-md-4">
            <form onSubmit={handleSubmit}>
              <div>
                <Link to="/phoneauth">
                  <button type="submit" className="phonebtn">
                  <i class="fas fa-mobile-alt">&nbsp;&nbsp;&nbsp;</i>
                    CONTINUE WITH PHONE NUMBER
                  </button>
                </Link>
              </div>

              <div>
                <Link
                  to=""
                  onClick={() => {
                    handleClick(GoogleProvider);
                  }}
                >
                  <button className="googlebtn">
                    <i class="fab fa-google">&nbsp;&nbsp;&nbsp;</i>CONTINUE WITH
                    GOOGLE
                  </button>
                </Link>
              </div>

              <div className="mb-2 mt-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label mt-2"
                  style={{ color: "black" }}
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
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-2"
                  style={{ color: "black" }}
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
              <button type="submit" className="btn" style={{background:"crimson",color:"white",marginLeft:"90px"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Register
