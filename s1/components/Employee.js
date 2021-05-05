import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";

function EmployeeInfo() {
  const { first_name, last_name, location, email, image } = useContext(EmployeeContext);

  return (
    <div className="card">
      <div>
        <img src={image} alt={first_name} />
      </div>
      <div>
        Name: {first_name} {last_name}
      </div>
      <div>
        Location: {location}
      </div>
      <div>
        Email: {email}
      </div>
    </div>
  );
}

export default EmployeeInfo;
