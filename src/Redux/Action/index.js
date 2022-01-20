import firebase from "../../Firebase"
import { toast } from "react-toastify";
export let Createuser = (email, password) => {
  return async dispatch => {
    let userData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
      userData.user.sendEmailVerification();
    dispatch({
      type: "CREATE_USER",
      payload: userData,
    });
  };
};

export let Login = (email, password) => {
  return async dispatch => {
    let logindata = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (logindata.user.emailVerified === true) {
      toast.success("success");
      dispatch({
        type: "LOGIN_USER",
        payload: logindata,
      });
    } else {
     
    }
    
  };
};

export let Reset = (email) => {
  return async dispatch => {
    let resetdata = await firebase.auth().sendPasswordResetEmail(email)
     dispatch({
       type: "RESET_PASSWORD",
       payload: resetdata,
     });
  }
  
}

export let Phone = (phonenumber) =>{
  return async dispatch =>{
    let recaptchaContainer=new firebase.auth.RecaptchaVerifier("recaptcha-container")
    
    let Phonedata= await firebase.auth().signInWithPhoneNumber(phonenumber,recaptchaContainer)
    let code=window.prompt("enter otp")
        Phonedata.confirm(code)
    dispatch({
      type:"PHONE_NUMBER",
      payload:Phonedata
    })
  }
}

export let GoogleProvider =new firebase.auth.GoogleAuthProvider()
export let GoogleLogin = provider =>{
  return async dispatch =>{
    let googlelogin=await firebase.auth().signInWithPopup(provider)
    dispatch({
      type:"GOOGLE_LOGIN",
      payload:googlelogin
    })
  }
}

export let CartIncrement = (a, b) => {
  return async dispatch => {
    let CartAdd = a;
    let add = b;

    dispatch({
      type: "CARTINCREMENT",
      payload: CartAdd,
      val: add,
    });
  };
};

export let Cartdecrement = (a, b) => {
  return async dispatch => {
    let removecart = a;
    let remove = b;

    dispatch({
      type: "CARTDECREMENT",
      payload: removecart,
      cartval: remove,
    });
  };
};
export let uploadData = (poster, state) => {
  return async dispatch => {
    let AUDIO_POSTER = poster.audio_poster.name;
    // let AUDIO_TITLE=poster.audio_title.name;
    let audio_storage = firebase
      .storage()
      .ref(`/music-poster/${AUDIO_POSTER}`)
      .put(poster.audio_poster);
      // let uploadTitle=firebase
      // .storage()
      // .ref(`title/${AUDIO_TITLE}`)
      // .put(title.audio_title);
    audio_storage.on(
      "state_changed",
      snapshot => { },
      err => {
        throw err;
      },
      async () => {
        let DownloadPoster = await firebase
          .storage()
          .ref("music-poster")
          .child(AUDIO_POSTER)
          .getDownloadURL();
         console.log(DownloadPoster);
        firebase
          .database()
          .ref("audio_library")
          .push({ DownloadPoster })
        firebase .database() .ref("audio_library") .push({...state,DownloadPoster})
      })
    dispatch({
      type: "UPLOAD",
      payload: audio_storage,
    }); 
  }
}
export let FetchData = () => {
  return (dispatch) => {
    let foodlist = firebase.database().ref("audio_library");
    //firebase event to fetch
    foodlist.on("value", (callback) => {
      let foodmenu = [];
      callback.forEach((food) => {
        let { audio_title, DownloadPoster, cost, category } = food.val();
        foodmenu.push({
          id: food.key,
          title: audio_title,
          Poster: DownloadPoster,
          foodcost: cost,
          foodcategory: category,
        });
        dispatch({
          type:"FETCHDATA",
          payload:foodmenu,
        });
      });
    });
  };
};