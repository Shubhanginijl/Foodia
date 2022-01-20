import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { FetchData } from '../Redux/Action';
import './restaurant.css'
import { CartIncrement } from './../Redux/Action/index';
const Restaurant = () => {
    let data = useSelector((state) => state.AuthReducer.fetch);
          console.log(data)
          let dispatch = useDispatch();
          let select=[...data]
          useEffect(() => {
            dispatch(FetchData());
          }, [dispatch]);
    let Dispatch=useDispatch();
        //   let {food} = JSON;
          let Add=(a)=>{
            Dispatch(CartIncrement(a,1));   
          }
          let remove=(a)=>{
            Dispatch(CartIncrement(a,1));   
          }
    return (
            <section>
              <article>
              <div className="home pt-4 flex-container">
                {select.map((a, i) => (
                //   <div key={i}>
                //     <img src={a.Poster} alt="poster" />
                //     <h3>{a.title}</h3>
                //     <h2>{a.foodcost}</h2>
                //     <p>{a.foodcategory}</p>

                //   </div>
                <div key={i}>
                <div className="card" style={{width: '18rem'}}>
           <img className="card-img-top" src={a.Poster} alt={a.title} style={{width: '18rem',height:"200px"}} />
           <div className="card-body">
             <h5 className="card-title">{a.title}</h5>
             <p className="card-text" style={{marginLeft:"0px"}}>{a.foodcost}</p>
             <p className="card-text" style={{marginLeft:"0px"}}>{a.foodcategory}</p>
             <button  className="btn btn-danger" onClick={_=>(remove(-1))}>-</button>
             <button  className="btn btn-outline-dark"onClick={_=>(Add(1))}>Place Order</button>
             <button  className="btn btn-danger"onClick={_=>(Add(1))}>+</button>
           </div>
         </div>
         </div>
                ))}
                </div>
              </article>
            </section>
          );
        };

export default Restaurant
