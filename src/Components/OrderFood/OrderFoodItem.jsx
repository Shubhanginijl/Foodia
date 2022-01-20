import React, { Fragment, useState } from "react";
import firebase from "../../Firebase";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { uploadData } from "../../Redux/Action";
import "./orderfood.css";
const OrderFoodItem = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    audio_poster: "",
    price:"",
    category:"",
    audio_title:""
  });
  let {
    audio_title,
    price,
    category,
    audio_poster,   
  } = state;
  let [poster, setPoster] = useState("");
  let [AudioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
          dispatch(uploadData(poster,state))
          toast.success("sucessfully Food item is uploaded");
        }
      
    catch (error) {
      toast.error(error.message);
    }
    //   setState({ loading: false });
  };

  // let ProgressTemplate = () => {
  //   return (
  //     <progress value={progress} min={0} max={100}>
  //       {progress}
  //     </progress>
  //   );
  // };
  return (
    <section id="AudioBlock" >
      {/* <div id="progressSection">
        {barStatus === true ? (
          <>
            <span>
              <ProgressTemplate />
            </span>
            <span>{Math.round(progress) + "%"}</span>
          </>
        ) : (
          ""
        )}
      </div> */}
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="audio_title"
              placeholder="Enter Food Item"
              required
              value={audio_title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              name="price"
              placeholder="Enter Food price"
              required
              value={price}
              onChange={handleChange}
            />
          </div>
    
          <div className="form-group" style={{ color: "white" }}>
            <label htmlFor="audio_poster"> Poster</label>
            <input
              type="file"
              className="form-control"
              name="audio_poster"
              onChange={handlePoster}
            />
          </div>
         <div>
         <select name="category" id="category"  value={category} onChange={handleChange}>Food Category
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
         </div>
     
          <div style={{ position: "relative" }}>
            <button
              className="btn"
              name="progress"
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default OrderFoodItem;