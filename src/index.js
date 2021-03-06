import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
// import Sidebar from './components/Sidebar';
// import MetisMenu from 'react-metismenu';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MetisMenu />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
