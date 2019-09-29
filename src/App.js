import React from 'react';
import './App.css';

import { Cars } from "./api/Cars";

function App() {

  function testModels(e){
    Cars.getModels().then(
      result => {
        alert(JSON.stringify(result));
      }
    )
  }

  function testVersionModel(e, idModel){
    Cars.getVersionsByModel(idModel).then(
      result => {
        alert(JSON.stringify(result));
      }
    )
  }

  function testColorsVersion(e, idVersion){
    Cars.getColorsByVersion(idVersion).then(
      result => {
        alert(JSON.stringify(result));
      }
    )
  }

  function testOptionals(e, idVersion){
    Cars.getOptionalsByVersion(idVersion).then(
      result => {
        alert(JSON.stringify(result));
      }
    )
  }

  return (
    <div className="App">
      <button  onClick={ event => testModels(event)}>Test Models JSON</button>
      <button  onClick={ event => testVersionModel(event, 1)}>Test Version model 1 JSON</button>
      <button  onClick={ event => testColorsVersion(event, 1)}>Test Colors Version 1 JSON</button>
      <button  onClick={ event => testOptionals(event, 1)}>Test Optionals Version 1 JSON</button>
    </div>
  );
}

export default App;
