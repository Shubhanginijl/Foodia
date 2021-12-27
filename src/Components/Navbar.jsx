import React from 'react'
import { Link } from 'react-router-dom';
import "./navBar.css";

const Navbar = () => {
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
