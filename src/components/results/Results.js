
import React from 'react';

function Results(props) {
  return (
    <div>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </div>
  )
}

export default Results;
