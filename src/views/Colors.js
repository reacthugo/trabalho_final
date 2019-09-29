import React from 'react';
import { Cars } from "../api/Cars";

function ColorsView () {

    function testColorsVersion(e, idVersion){
        Cars.getColorsByVersion(idVersion).then(
          result => {
            alert(JSON.stringify(result));
          }
        )
      }

    return(
        <div>
            <h1>Cores</h1>
            <button  onClick={ event => testColorsVersion(event, 1)}>Test Colors Version 1 JSON</button>
        </div>
    )
}

export default (ColorsView);