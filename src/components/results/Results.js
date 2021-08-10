
import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (
    <div data-testid="result">
      {props.data &&
      <>
      "Headers" :
      <JSONPretty data ={props.data.headers} />

      "Count" : 
      <JSONPretty data ={props.data.count} />

      "Results" : 
      <JSONPretty data ={props.data.results} />
      </>
      }
    </div>
  )
}

export default Results;
