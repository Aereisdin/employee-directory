import React, { useState, useEffect } from "react";
import EmployeeInfo from "./components/Employee";
import Nav from "./components/Nav";
import API from "./utils/API";
import EmployeeContext from "./utils/EmployeeContext";
import "./App.css";

function App() {
  const [employeeState, setEmployeeState] = useState({
    first_name: "",
    last_name: "",
    image: "",
    location: "",
    email: ""
  });


  useEffect(() => {
    //worky worky spells are special
    let number = 25;
    API.fetchEmployees(number)
    .then(res => {
      console.log(res);
      console.log(res.results[0].location.city)
    })
    .then(res => setEmployeeState({
      first_name: res.results[0].name.first,
      last_name: res.results[0].name.last,
      image: res.results[0].picture.medium,
      location: res.results[0].location.city,
      email: res.results[0].email
    }))
}, []);

  return (
    <div className="container">
      <EmployeeContext.Provider value={employeeState}>
        <Nav />
        <EmployeeInfo />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
