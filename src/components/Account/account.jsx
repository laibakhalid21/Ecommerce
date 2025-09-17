import React from "react";
import Sign from "./signup";
import Login from "./login";
import { useState } from "react";


function Account(){
    const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => setShowSignUp(prev => !prev);

  return (
    <div>
      {showSignUp ? (
        <Sign onSwitch={toggleForm} />
      ) : (
        <Login onSwitch={toggleForm} />
      )}
    </div>
  );
}
export default Account;