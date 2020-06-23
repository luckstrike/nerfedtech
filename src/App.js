import React from 'react';
import MainNav from './components/MainNav'
import { Jumbotron } from 'react-bootstrap'

import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Jumbotron fluid>
        <h1>A personal website!</h1>
        <img src="meandrev-cropped.jpg" height="25%" width="25%"/>
        <hr></hr>
        <p>I wasn't angry in this photo, forgive me.</p>
      </Jumbotron>
    </div>
  );
}
export default App;
