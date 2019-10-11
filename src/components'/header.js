import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Uncontrolled from "./uncontrolled";
import Controlled from "./controlled";
import user from "./user";
import home from "./home";
import "./header.css";

const header = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
            <div className={'how'}>
            <Link to="/">Home</Link>
            <Link to="/user">user</Link>
            <Link to="/controlled">controlled</Link>
            <Link to="/uncontrolled">Uncontrolled</Link>
            </div>
            <hr/>
            </div>
            <Route path="/" exact component={home} />
            <Route path="/uncontrolled" component={Uncontrolled}/>
            <Route path="/controlled" component={Controlled}/>
            <Route path="/user" component={user}/>
            </BrowserRouter>
        </div>
    );
};

export default header;