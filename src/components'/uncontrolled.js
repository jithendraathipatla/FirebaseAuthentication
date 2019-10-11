import React from 'react';

const  Uncontrolled = () => {
    return (
        <div>
        <div className="container">
        <h1 style={{textAlign:"center", fontSize:"24px"}}>Uncontrolled Form:</h1>
        <form >
        <label>Name</label><br/>
        <input type="text" placeholder="Your name" ></input><br/><br/>
        <label>Email</label><br/>
        <input type="email" placeholder="Your email id"></input><br/><br/>
        <label>Password</label><br/>
        <input type="password" placeholder="Your password"></input>
        </form>
        </div>
        </div>
    );
};

export default Uncontrolled;