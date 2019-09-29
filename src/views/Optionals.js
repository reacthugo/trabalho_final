import React from 'react';
import { Cars } from "../api/Cars";

function OptionalsView () {

    function testOptionals(e, idVersion){
        Cars.getOptionalsByVersion(idVersion).then(
          result => {
            alert(JSON.stringify(result));
          }
        )
      }

    return(
        <div>
            <h1>Opcionais</h1>
            <button  onClick={ event => testOptionals(event, 1)}>Test Optionals Version 1 JSON</button>
        </div>
    )
}

export default (OptionalsView);