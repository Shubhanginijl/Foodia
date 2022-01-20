import React from 'react'
import JSON from "../json/items.json";
import { Cartdecrement, CartIncrement } from './../../Redux/Action/index';
import { useDispatch } from 'react-redux';
import "./orderfood.css";
import { Link } from 'react-router-dom';
const OrderedList = () => {
    let Dispatch=useDispatch();
let {food} = JSON;
let Cart=(a)=>{
  Dispatch(CartIncrement(a,1));
  
}
    return (
        <>
        <div>
        <h1
          style={{
            color: "crimson",
            position: "absolute",
            marginLeft: "600px",
            top: "50px",
            marginTop:"30px"
          }}
        >
          Food items
        </h1>
        {/* add items Button */}
        <Link to="/orderfooditem">
          <button className="additem"
            btn
            btn-large
           
          >
            Add
            <p
              style={{
                fontSize: "20px",
                fontStyle: "italic",
                position: "absolute",
                color: "#202f72",
                marginLeft: "-2mm",
              }}
            >
              {/* AddItems Here */}
            </p>
          </button>
        </Link>
        <input
          type="text"
          placeholder="search food items"
          style={{
            width: "80%",
            height: "59px",
            borderRadius: "6px",
            position: "absolute",
            left: "110px",
            top: "140px",
          }}
        />
        <button
          className="btn btn-block "
          style={{
            height: "58px",
            position: "absolute",
            left: "1194px",
            top: "140px",
            background: "crimson",
            color: "white",
          }}
        >
          <i class="fas fa-search"></i> Search Here
        </button>
      </div>
        <div className="home pt-4 flex-container">
     
        {food.map((e)=>(
          <div className="card" style={{width: '18rem'}}>
           <img className="card-img-top" src={e.image} alt={e.name} style={{width: '18rem',height:"200px"}} />
           <div className="card-body">
             <h5 className="card-title">{e.name}</h5>
             <p className="card-text" style={{marginLeft:"0px"}}>{e.price}</p>
             <button  className="btn btn-danger" onClick={_=>(Cart(-1))}>-</button>
             <button  className="btn btn-outline-dark"onClick={_=>(Cart(1))}>Place Order</button>
             <button  className="btn btn-danger"onClick={_=>(Cart(1))}>+</button>
           </div>
         </div>
        ))}
        
       </div>
       </>

    )
}

export default OrderedList

