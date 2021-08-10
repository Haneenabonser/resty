import React from 'react';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';




function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);

  function callApi(formData, reqBody) {
    setRequestParams(formData);
    setData(reqBody);
  }

  
  function handleLoader(load) {
    setLoad(load);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleLoader={handleLoader} handleApiCall={callApi} />
      {load ? <Loader load/> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  )
}

export default App


