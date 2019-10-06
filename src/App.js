import React from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

function App() {

  return (
    <div>
      <img className="logoBMW" src={require("./assets/images/bmw-logo.png")} alt="N/A" />
      <h1>Monte o seu BMW</h1>

      <ul>
          <li className="itemMenu">
            <Link className="itemMenuLink" to="/">Modelo</Link>
          </li>
          <li className="itemMenu"> 
            <Link className="itemMenuLink" to="/versions">Versão</Link>
          </li>
          <li className="itemMenu"> 
            <Link className="itemMenuLink" to="/colors">Cor</Link>
          </li>
          <li className="itemMenu"> 
            <Link className="itemMenuLink" to="/optionals">Opcionais</Link>
          </li>
          <li className="itemMenu"> 
            <Link className="itemMenuLink" to="/resume">Resumo</Link>
          </li>
        </ul>

        <ApplicationRoutes />

      <style jsx>{`
          .itemMenu {
            list-style-type: none;
            display: inline;
            font-size: 18px;
            padding: 10px;
          }
          .itemMenuLink {
            text-decoration: none;
          } 
          .logoBMW {
            height: 100px;
            width: 100px;
            float: left;
            margin: 5px;
        }
      `}</style>
    </div>
  );
}

export default App;
