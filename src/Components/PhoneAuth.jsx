import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Phone } from '../Redux/Action';
import { toast } from 'react-toastify';
// import "./home.css";
const PhoneAuth = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()

    let[state,setState]=useState({
        phonenumber:'',
    })
    
    let {phonenumber}=state

    let handleChange= e =>{
        let {name,value}=e.target
        setState({...state,[name]:value})
    }

    let handleSubmit = e=>{
        e.preventDefault()
        try {
            dispatch(Phone(phonenumber))
            toast.success("Otp has sent")
            // navigate("/")
        } catch (error) {
            
        }
    }
    return (
      <section id="authblock">
        <article>
          <div className="authContent">
            <h3 style={{ color: "black" ,marginTop:"80px"}}>Enter phone number</h3>
          </div>
          <div className="formContent">
            <div className="addForm" style={{paddingTop:"10px",paddingLeft:"70px",width:"100%"}}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={handleChange}
                  />
                </div>
                <div id="recaptcha-container" style={{marginLeft:"540px",marginTop:"20px"}}></div>

                <div className="form-group btn-group">
                  <button className="phonebutton" style={{background:"crimson",borderRadius:"20px",color:"white"}} onClick={handleSubmit}>
                    Send
                  </button>
                </div>
                <p>If you still need help,please contact our support</p>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
}

export default PhoneAuth
