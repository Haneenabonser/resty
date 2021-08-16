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

const initialState = {
  history: [],
};

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [load, setLoad] = useState(false);
  const [state, setHistory] = useReducer(reducer, initialState);
  const [body, setBody] = useState({});

  function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'AddToHistory':
        const history = [...state.history, payload.history];
        return { history };
      default:
        return state;
    }
  }
  function addToHistory(history) {
    return {
      type: 'AddToHistory',
      payload: { history },

    };
  }

  useEffect(async () => {
    if (requestParams.url) {
      if (body) {
        setHistory(addToHistory(requestParams));
        const data = await axios[requestParams.method](requestParams.url, JSON.parse(body));
        setData(data);
        setLoad(false);
      } else {
        setHistory(addToHistory(requestParams));
        const data = await axios[requestParams.method](requestParams.url);
        setData(data);
        setLoad(false);
      }
    }
  }, [requestParams]);

  function callApi(requestParams, body) {
    setLoad(true);
    setRequestParams(requestParams);
    setBody(body);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.history.length ? <History history={state.history} /> : null}
      {load ? <Loader load /> : <Results data={data} />}
      <Footer />
    </React.Fragment>
  )
}

export default App;


