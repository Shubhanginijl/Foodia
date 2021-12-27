import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Reset } from '../Redux/Action';
const Resetpassword = () => {
    let dispatch = useDispatch();
    let navigate=useNavigate()

     let [state, setstate] = useState({
       email: "",
     });

     let { email } = state;

     let handleChange = e => {
       let { name, value } = e.target;
       setstate({ ...state, [name]: value });
     };

     let handleSubmit = e => {
       e.preventDefault();
       try {
         dispatch(Reset(email));
         toast.success("it is successfully reseted");
         navigate("/signin");
       } catch (error) {
         toast.error(error.message);
       }
     };
    return (
        <section style={{ display: "flex", justifyContent: "center" }}>
            <form  onSubmit={handleSubmit}>
          <h3 style={{marginTop:"50px"}}>Forgot password ?</h3>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="enter your email adress"
                    style={{ width: "300px", height: "50px" }}
            onChange={handleChange}
            
          />
          <button style={{background:"crimson",height:"50px"}}>submit</button>
        </form>
      </section>
    )
}

export default Resetpassword
