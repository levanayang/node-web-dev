import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// import * as serviceWorker from './serviceWorker';

// import css into javascript because react uses WebPack
// any resources are imported like so
import 'bootstrap/dist/css/bootstrap.min.css';

// css imports
import './index.css';

// page components
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();