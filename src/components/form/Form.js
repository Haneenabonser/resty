import React from 'react';
import { useState } from 'react';
import './form.scss';
import History from '../history/History';


function Form(props) {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('get');
  const [showTextArea, setShowTextArea] = useState(false);
  const [body, setBody] = useState();

  // const [storage, setStorage] = useState(
  //   JSON.parse(localStorage.getItem("storage")) || []
  // );
  // const saveStorageData = async (data) => {
  //   setStorage([...storage, data]);
  //   await localStorage.setItem("storage", JSON.stringify(storage));
  // };



  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // const row = await fetch(`${url}`);
      // const data = await row.json();
      // console.log(data);
      const formData = {
        method: method,
        url: url,
      };
      props.handleApiCall(formData, body);
    } catch (e) {

    }
  }


  function handleMethod(e) {
    setMethod(e.target.id);
  }

  function handleURL(e) {
    setUrl(e.target.value);
  }

  function handlePostAndPut(e) {
    setShowTextArea(true);
    setMethod(e.target.id);
  }

  function handleBody(e) {
    setBody(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleURL} />
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethod}>GET</span>
          <span id="post" onClick={handlePostAndPut}>POST</span>
          <span id="put" onClick={handlePostAndPut}>PUT</span>
          <span id="delete" onClick={handleMethod}>DELETE</span>
        </label>
        {showTextArea &&
          <textarea rows='10' cols='35' onChange={handleBody}></textarea>
        }
        <button className="go-btn" type="submit" data-testid="GO-btn">GO!</button>
      </form>
    </>
  )
}

export default Form;
