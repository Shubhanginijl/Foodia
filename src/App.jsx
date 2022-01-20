import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
import Home from "./Components/Home";
import Register from "./Components/Register";

import Signin from './Components/Signin';
import Resetpassword from "./Components/Resetpassword";
import PhoneAuth from "./Components/PhoneAuth";
import Restaurant from "./Components/Restaurant";
import OrderFoodItem from "./Components/OrderFood/OrderFoodItem";
import OrderedList from "./Components/OrderFood/OrderedList";
// import Footer from './Components/Footer/Footer';




const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />  
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<Resetpassword />} />
        <Route path="/phoneauth" element={<PhoneAuth />} />
        <Route path="/goto" element={<Restaurant />} />
        <Route path="/orderfooditem" element={<OrderFoodItem />} />
        <Route path="/orderedlist" element={<OrderedList />} />
        {/* <Route path="/fetchitem" element={<FetchItem/>} /> */}
        {/* <Route path="/footer" element={<Footer/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
