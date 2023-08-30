import React from "react";

const formStyle = {
  paddingTop: "15px",
  fontWeight: "500",
  fontSize: "1.5em"
}

function SearchForm(props) {
  return (
    <div className="container" style={formStyle}>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee Database"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" style={{fontSize: "1em"}}>
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
