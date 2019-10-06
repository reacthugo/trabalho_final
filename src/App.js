import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { ConvertToMoneyNumber } from "./Utils";
import { connect } from 'react-redux';

function App(props) {

  const [totalPrice, setTotalPrice] = useState(0.00);

  useEffect(() => {
    
    let sumPrice = 0.00;

    if(props.version == null){
      if(props.model != null)
        sumPrice = props.model.price;
    }
    else{
      sumPrice = props.version.price;
    }

    if(props.color != null)
      sumPrice += props.color.price;

    if(props.optionals.length > 0)
      props.optionals.map(opt => sumPrice += opt.price);
      
    setTotalPrice(sumPrice);
  }, [props]);

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
            <Link className="itemMenuLink" to="/resume">Resumo <span>(Valor Total: R$ {ConvertToMoneyNumber(totalPrice)})</span></Link>
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

const mapStateToProps = store => ({
  model: store.carState.model,
  version: store.carState.version,
  color: store.carState.color,
  optionals: store.carState.optionals
});

export default connect(mapStateToProps)(App);
