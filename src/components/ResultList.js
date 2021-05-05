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
  // background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,115,29,1) 51%, rgba(69,85,252,1) 100%)"
}

function ResultList(props) {
  return (
    <>
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
      {props.results.map(result => (
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

export default ResultList;
