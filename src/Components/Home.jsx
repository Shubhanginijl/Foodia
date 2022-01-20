import React from 'react'
import Deliveryandrestaurent from './Deliveryandrestaurent'
import './home.css'
import Footer from './Footer/Footer';
const Home = () => {
    return (
      <>
        <section>
          <div className="image1">
            <img src="pizza.jpg" alt="slde1" />
            <div>
              <h1 className="toptext">
                YOU CAN'T BUY HAPPINESS <br />
                BUT YOU CAN BUY GOOD FOOD.
                <div>
                  {/* <img
                    src="food_love-01-removebg-preview.png"
                    alt="foodlove"
                    className="foodlove"
                  /> */}
                  <form className='block'>
              <span className="icon1">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <input
                type="text"
                placeholder="Enter Delivery Addres"
                className="tableBlock1"
              />
              <span className="icon2">
                <i className="fas fa-biking"></i>
              </span>
              <input
                type="text"
                placeholder="Deliver now"
                className="tableBlock2"
              />
              <button className="btn1">
                <a href="/orderedlist">Find Food</a>
              </button>
              <div className="altSignIn1">
                <a href="/signin" >Sign In</a> for your recent addresses
              </div>
            </form>
                </div>
              </h1>
            </div>
          </div>
          <div></div>
        </section>
        {/* about starts here */}
        {/* <section className="about" id="about">
          <div className="row">
            <div className="image">
              <img
                src=""
                alt=""
                style={{ width: "100%", height: "80vh", marginTop: "30px" }}
              />
            </div>
            <div className="content">
              <h3 style={{color:"black",fontFamily:"cursive",fontSize:"50px"}}>We are here to serve you</h3>
            </div>
          </div>
        </section> */}
        {/* about ends here */}

        {/* menu starts here */}
        <section>
          <article>
            <Deliveryandrestaurent />
          </article>
        </section>
        <section className='HeaderBlock1'>
          <article>
            <div className=' LeftBlock1'>
            <h1>Restaurants in your pocket</h1>
            <p>Order from your favorite restaurants & track on the go, with the all-new foodia app.</p>
            </div>
            <div className="RightBlock1">
             <img src="mobile1.png" alt="mobile" />
             <img src="mobile2.png" alt="mobile2" />
             
            </div>
          </article>
        </section>
        <section>
          <article>
            <Footer/>
          </article>
        </section>
      </>
    );
}

export default Home
