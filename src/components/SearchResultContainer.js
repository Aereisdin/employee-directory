import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsFilter from "./ResultsFilter";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
    isfiltered: false
  };

  // 
  componentDidMount() {
    this.searchEmployees("100");
    console.log(`Mounting and sending the number -----~~~~~!!!`)
  }

  searchEmployees = query => {
    API.search(query)
      // .then(query => console.log(query))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFilterCanada = (results) => {
    results = this.state.results;
    console.log(results[0].location.country)
    let filteredResults = results.filter(function (result) {return result.location.country === "Canada"      
    }).map(function (result) {return result});
    console.log(filteredResults);
    this.setState({
      filtered: filteredResults,
      isfiltered: true
    })
  };
  
  handleFilterUs = (results) => {
    results = this.state.results;
    console.log(results[0].location.country)
    let filteredResults = results.filter(function (result) {return result.location.country === "United States"      
    }).map(function (result) {return result});
    console.log(filteredResults);
    this.setState({
      filtered: filteredResults,
      isfiltered: true
    })
  };  

  handleFilterGermany = (results) => {
    results = this.state.results;
    console.log(results[0].location.country)
    let filteredResults = results.filter(function (result) {return result.location.country === "Germany"      
    }).map(function (result) {return result});
    console.log(filteredResults);
    this.setState({
      filtered: filteredResults,
      isfiltered: true
    })
  }; 

  // When the form is submitted, search the Random API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    console.log(this.state.search)

  };

  render() {
    return (
      <div className="container-fluid" style={{background: "#8CDFC6"}}>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultsFilter 
          results={this.state.results}
          filtered={this.state.filtered}
          isfiltered={this.state.isfiltered}
          canada={this.handleFilterCanada}
          us={this.handleFilterUs}
          germany={this.handleFilterGermany}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
