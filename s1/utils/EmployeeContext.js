import React from "react";

const EmployeeContext = React.createContext({
  first_name: "",
  last_name: "",
  image: "",
  location: "",
  email: ""
});

export default EmployeeContext;
