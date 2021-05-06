import React from "react";

const myStyle = {
  padding: "5px",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#444",
  fontWeight: 700,
  margin: "5px",
  fontSize: "1.25em",
  color: "#333",
  background: "rgb(255, 165, 51)",
}



function FilteredList(props) {
    return (
      <>
      <div className="row">
        <div className="col-md-8">
          <button onClick={props.canada} className="btn btn-primary mt-3" style={{fontSize: "1em", margin: "5px"}}>
            Canadian Employees
          </button>
          <button onClick={props.us} className="btn btn-primary mt-3" style={{fontSize: "1em", margin: "5px"}}>
            United States Employees
          </button>
          <button onClick={props.germany} className="btn btn-primary mt-3" style={{fontSize: "1em", margin: "5px"}}>
            German Employees
          </button>
        </div>
      </div>
      <div className="row text-center" style={{fontWeight: 900, fontSize: "1.5em", color: "#555"}}>
        <div className="col-md-2">
  
        </div>
        <div className="col-md-2">
        Name:
        </div>
        <div className="col-md-3">
        Location:
        </div>
        <div className="col-md-3">
        Contact Information:
        </div>
      </div>
      <ul className="list-group">
        {props.filtered.map(result => (
          <li className="row text-center" style={myStyle} key={result.phone}>
            <div className="col-md-2  align-self-center">
              <img alt={result.name.first} className="img-fluid" src={result.picture.large}/>
            </div>
            <div className="col-md-2 align-self-center">
              <span>{result.name.first} {result.name.last}</span>
            </div>
            <div className="col-md-3 align-self-center">
              <span>{result.location.city}, {result.location.state}</span>
            </div>
            <div className="col-md-3 align-self-center">
              <span>{result.phone}</span><br/>
              <span>{result.email}</span>
            </div>
          </li>
        ))}
      </ul>
      </>
    );
  }

  export default FilteredList;