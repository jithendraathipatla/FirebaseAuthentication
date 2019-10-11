import React,{useState} from 'react';
import "./header.css";
import {firebaseDB} from "../firebase";

const Controlled = () => {
    const [value, setvalue] = useState("");
    const [emailk, setemailk] = useState("");
    const [passwordk, setpasswordk] = useState("");
    const [submitted, setsubmitted] = useState({});

    const changeinput = (event) => {
      setvalue(event.target.value);
    } 

    const changeemail = (e) => {
        setemailk(e.target.value)
    }

    const changepassword = (e) =>{
        setpasswordk(e.target.value);
    }

    const submitvalues = (e) => {
        e.preventDefault();
        setsubmitted ( {
            name:value,
            email:emailk,
            password:passwordk
        })

    }
    const showing = document.querySelector("h2");
    if(submitted.name || submitted.email || submitted.password === " "){
        showing.style.display="block";
        firebaseDB.ref().push(submitted)
        .then(()=>{
            console.log("user added to the db");
        })
        .catch((e)=>{
            console.log(e);
        })
    }
   

    return (
        <div>
         
           <div className="container">
           <h1 style={{textAlign:"center", fontSize:"24px"}}>controlled Form:</h1>
           <form>
           <label>Name</label><br/>
           <input type="text"value={value} placeholder="Your name" onChange={changeinput}></input><br/><br/>
           {submitted.name === "" ? <h6 style={{color:"red",marginTop:"-21px", fontSize:"10px"}}>* Value is must</h6>: null}

           <label>Email</label><br/>
           <input type="email" placeholder="Your email id" value={emailk} onChange={changeemail}></input><br/><br/>
           {submitted.email === "" ? <h6 style={{color:"red",marginTop:"-21px", fontSize:"10px"}}>* Value is must</h6>: null}

           <label>Password</label><br/>
           <input type="password" placeholder="Your password" value={passwordk} onChange={changepassword}></input> <br/><br/>
           {submitted.password === "" ? <h6 style={{color:"red",marginTop:"-21px", fontSize:"10px"}}>* Value is must</h6>: null}
           <button  type="submit" onClick={submitvalues}>SignUp</button>
           </form>
           <br/>
           <h2 style={{display:"none"}}> The submitted values are name=<span style={{color:"crimson"}}>{submitted.name}</span> <br/>
           email=<span style={{color:"crimson"}}>{submitted.email}</span><br/>
           password=<span style={{color:"crimson"}}>{submitted.password}</span>
           </h2>
           </div>
        </div>
    );
};

export default Controlled;