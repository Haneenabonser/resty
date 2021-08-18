import React from 'react';
import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
import Loader from 'react-loader-spinner';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';
import History from './components/history/History';

const initialState = [];

function reducer(history = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'AddToHistory':
      history = [...history, payload];
      return history;
    default:
      return history;
  }
}
function addToHistory(url, method, result) {

  return ({
    type: 'AddToHistory',
    payload: {
      url,
      method,
      result
    }
  })
}

function App() {
  const [history, setHistory] = useReducer(reducer, initialState)
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);
  const [body, setBody] = useState({});

  useEffect(async () => {
    setData(null);
    if (body) {
      const result = await axios[requestParams.method](requestParams.url, JSON.parse(body));
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      setHistory(addToHistory(requestParams.url,requestParams.method,data));
    } else {
      const result = await axios[requestParams.method](requestParams.url);
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      setHistory(addToHistory(requestParams.url,requestParams.method,data));
 
    }
  }, [requestParams]);

  function callApi(requestParams, body) {
    // setLoad(true);
    setRequestParams(requestParams);
    setBody(body);
  }

  function historyHandler(result) {
    setData(result);
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history && <History historyHandler={historyHandler} history={history} />}
      {load ? <Loader load /> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  )
}

export default App;


