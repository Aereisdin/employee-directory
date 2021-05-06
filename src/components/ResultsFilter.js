import React from "react";
import ResultList from "./ResultsList";
import FilteredList from "./FilteredList";


function ResultsFilter({results, filtered, isfiltered, canada, us, germany}) {
  const filters = isfiltered;
  if (filters === false){
    return <ResultList results={results} canada={canada} us={us} germany={germany}/>;
  }
  else if (filters === true) return <FilteredList filtered={filtered} canada={canada} us={us} germany={germany}/>;
}


export default ResultsFilter;
