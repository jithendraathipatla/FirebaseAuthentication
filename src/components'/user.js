import React from 'react';

import { firebase, googleAuth } from "../firebase"

const User = () => {
    const signin = () => {
     firebase.auth().signInWithPopup( googleAuth );
    }

    const signout = () => {
        firebase.auth().signOut();
    }
    return (
        <div>
            <div >
               <div>
              <button onClick={signin} className="same">Login</button>
              <button onClick={signout} className="diff" style={{marginLeft:"10px"}}>LogOut</button>
              </div>
              <div className="io">
              <h1 style={{display:"hidden"}}></h1>
              </div>
             
            </div>
        </div>
    );
};

export default User;

firebase.auth().onAuthStateChanged((user)=>{
    const userdetails = [];
    if(user){
      console.log(userdetails);
      userdetails.push(user.displayName, user.email);
    document.querySelector("button").style.display="none";
    const userName1 = document.querySelector(".io");
    userName1.style.display="block";
    const userName = document.querySelector("h1");
    userName.style.display="block";

    userName.innerHTML=`welcome <span>${user.displayName}</span>`;
    const displaystyle = document.querySelector("span");
    displaystyle.style.color = "red";

    }
    else{
        const dis = document.querySelector(".same");
        dis.style.display="block";
        const userName = document.querySelector(".io");
          userName.style.display="none";
        
        

    }
  
});
