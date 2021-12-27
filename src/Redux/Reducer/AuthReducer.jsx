let InitialState = {
  Createusers: [],
  loginuser: [],
  reset: [],
  phone: [],
  google: [],
  cartadd: [0],
  cartremove: [],
};


const AuthReducer = (state=InitialState,action) => {
   switch (action.type) {
     case "CREATE_USER":
       return {
         ...state,
         Createusers: action.payload,
       };

     case "LOGIN_USER":
       return {
         ...state,
         loginuser: action.payload,
       };
     case "RESET_PASSWORD":
       return {
         ...state,
         reset: action.payload,
       };

     case "PHONE_NUMBER":
       return {
         ...state,
         phone: action.payload,
       };

     case "GOOGLE_LOGIN":
       return {
         ...state,
         google: action.payload,
       };
     case "CARTINCREMENT":
       return {
         ...state,
         cartadd: parseInt(action.payload) + parseInt(state.cartadd),
       };
     case "CARTDECREMENT":
       return {
         ...state,
         cartremove: parseInt(action.payload) - parseInt(state.cartremove),
       };
     default:
       return state;
   }
}

export default AuthReducer;
