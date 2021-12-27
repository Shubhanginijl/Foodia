import React, { Fragment, useState } from "react";
import "./orderfood.css";
import firebase from "../../Firebase";
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux';
import { uploadData } from "../../Redux/Action";

let genre = ["Blues", "Classical", "Country", "Disco", "HipHop", "Jazz"];

const OrderFoodItem = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    loading: "false",
    audio_poster: "",
    barStatus: "false",
    progress: 0,
    audio_title:""
  });
  let {
    
    audio_title,
    loading,
    barStatus,
    progress,
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
  let handleAudioFile = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });

     
     
dispatch(uploadData(poster))

          toast.success("sucessfully audio file is uploaded");
        }
      
    catch (error) {
      toast.error(error.message);
    }
    //   setState({ loading: false });
  };

  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="AudioBlock" >
      <div id="progressSection">
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
      </div>
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
       
    
          <div className="form-group" style={{ color: "white" }}>
            <label htmlFor="audio_poster"> Poster</label>
            <input
              type="file"
              className="form-control"
              name="audio_poster"
              onChange={handlePoster}
            />
          </div>
     
          <div style={{ position: "relative" }}>
            <button
              className="btn"
              name="progress"
            //   style={{
            //     border: "1px solid white",
            //     borderRadius: "13px",
            //     width: "30mm",
            //     background: "#ff3333 ",
            //     height: "40px",
            //     position: "absolute",
            //     top: "8mm",
            //   }}
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