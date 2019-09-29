import React from 'react';
import { Cars } from "../api/Cars";

function ModelsView () {

    function testModels(e){
        Cars.getModels().then(
          result => {
            alert(JSON.stringify(result));
          }
        )
      }

    return(
        <div>
            <h1>Modelos</h1>
            <button  onClick={ event => testModels(event)}>Test Models JSON</button>
        </div>
    )
}

export default (ModelsView);