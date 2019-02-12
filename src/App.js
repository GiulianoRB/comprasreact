import React, { Component } from 'react';
import './App.css';
// import Button from './components/Button/Button';
import Sidebar from './components/sidebar/Sidebar';

class App extends Component(){
  render(){
    return(
      <div id = "App">
        <Sidebar />
        <div id = "page-wrap">
          <h1>App dividend</h1>
          <h2>anywhere</h2>
        </div>
      </div>
    )
  }
  
}
export default App;