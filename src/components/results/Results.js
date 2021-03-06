
import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';
import { useState } from "react";



function Results(props) {
  // const [Data, setData] = useState(
  //   JSON.parse(localStorage.getItem("storage")) || []
  // );
  return (
    <div data-testid="result">
      {props.data &&
        <>
          "Headers" :
          <JSONPretty data={props.data.headers} />

          "Count" :
          <JSONPretty data={props.data.count} />

          "Results" :
          <JSONPretty data={props.data.results} />
        </>
      }
    </div>
  )
}

export default Results;
