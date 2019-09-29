import React from 'react';
import { Cars } from "../api/Cars";

function VersionsView () {

    function testVersionModel(e, idModel){
        Cars.getVersionsByModel(idModel).then(
          result => {
            alert(JSON.stringify(result));
          }
        )
      }

    return(
        <div>
            <h1>Versões</h1>
            <button  onClick={ event => testVersionModel(event, 1)}>Test Version model 1 JSON</button>
        </div>
    )
}

export default (VersionsView);