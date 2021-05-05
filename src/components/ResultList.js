import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.phone}>
          <img alt={result.name.first} className="img-fluid" src={result.picture.large} />
          <br/>
          <span>{result.name.first} {result.name.last}</span>
          <br/>
          <span>{result.location.city}, {result.location.state}</span>
          <br/>
          <span>{result.email}</span>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
