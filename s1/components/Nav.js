import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";

function Nav() {
  const { first_name, last_name } = useContext(EmployeeContext);

  return ( 
    <div className="navbar navbar-light bg-light mb-5">
      <span className="navbar-brand mb-0 h1">Welcome to {first_name} {last_name}'s Employee Profile</span>
      <span className="navbar-brand mb-0 h1">You get to decide your fate for the rest of class.</span>
    </div>
  );
}

export default Nav;