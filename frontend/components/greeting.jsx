import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

  const sessionLinks = () => (
    <div className="login-links">
        <Link className="head-link" to="/login">Log In</Link>
        <Link className="head-link" to ="/signup">Join Us</Link>
    </div>
  );

  const personalGreeting = () => (
     <div className="logout-links">
       <h2> Hello, {currentUser.username}</h2>
         <button className="header-button" onClick={logout}>Log Out</button>
     </div>
  );

   return currentUser ? personalGreeting() : sessionLinks();
 };

export default Greeting;
