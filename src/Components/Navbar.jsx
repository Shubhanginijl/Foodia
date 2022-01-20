import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./navBar.css";

const Navbar = () => {
  let BagVal = useSelector(state=>state.AuthReducer. cartadd)
  let [state, setState] = useState(false);
  // let dropdown = () => {
  //   setState(!state);
  // };
    return (
      <section className="HeaderBlock">
        <article>
          <div className="leftBlock">
            <Link to="/">
              <img src="logo-foodia-removebg.png" alt="logo" />
            </Link>
          </div>
          <div className="rightBlock">
            <ul>
              {/* <li>
                <a href="/">Home</a>
              </li> */}
              <li>
                <a href="/signup">SignUp</a>
              </li>
              <li>
                <a href="/signin">Login</a>
              </li>
              <li style={{ fontSize: "18px" ,color:"crimson",marginTop:"17px" }}>
              <i className="fal fa-shopping-bag">
                <sup>
                  <span
                    className="badge badge-secondary"
                    style={{ fontSize: "15px" ,color:"crimson" }}
                  >{BagVal}</span>
                </sup>
              </i>
            </li>
              {/* <li>
                <a href="/">orders</a>
              </li> */}
            </ul>
          </div>
        </article>
      </section>
    );
}

export default Navbar
