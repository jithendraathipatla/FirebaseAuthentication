import React from 'react';
import '../src/app.sass';
import Header from "./components'/header";
import {firebase} from "./firebase"


function App() {
  
  return (
   <div>
   <Header userinfo={"userdetails"}/>
    </div>
  );
}

export default App;


firebase.auth().onAuthStateChanged((user)=>{
  const userdetails = [];
  if(user){
    console.log(userdetails);
    userdetails.push(user.displayName, user.email);
  }
  else{
    console.log("logout")
  }

})