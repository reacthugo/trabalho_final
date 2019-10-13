import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { ConvertToMoneyNumber } from "./Utils";
import { connect } from 'react-redux';
import Header from './Components/Header';

function App(props) {

  const [totalPrice, setTotalPrice] = useState(0.00);

  useEffect(() => {

    let sumPrice = 0.00;

    if (props.version == null) {
      if (props.model != null)
        sumPrice = props.model.price;
    }
    else {
      sumPrice = props.version.price;
    }

    if (props.color != null)
      sumPrice += props.color.price;

    if (props.optionals.length > 0)
      props.optionals.map(opt => sumPrice += opt.price);

    setTotalPrice(sumPrice);
  }, [props]);

  return (
    <div>
      <Header />
      
      <p className="about"><Link className="itemMenuLink" to="/about">Trabalho Final React</Link></p>

      <div className="menu-center">
        <ul>
          <li className="itemMenu">
            <Link className="itemMenuLink" activeClassName="active" to="/">Modelo</Link>
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
      </div>

      <ApplicationRoutes />

      <style jsx>{`
         .menu-center{
            display: flex;
            width: 100%;
            height: 55px;
            background: #ededed;
            font-size: 1.2rem;
            font-family: Arial, Helvetica, sans-serif;
          }

          .menu-center ul{
            display: flex;
            justify-content: center;
            width: 100%;
          }
          
          .itemMenu {
            list-style-type: none;
            display: inline;
            font-size: 18px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
            color: #428bca;
          }

          .itemMenuLink {
            text-decoration: none;
          } 

          .active, .btn:hover {
             background-color: #666;
              color: white;
          }

          .menu-center a:link {
            color: #428bca;
          }
        
          .menu-center a:visited {
            color: #428bca;
          }

          .menu-center a:hover {
            color: green;
          }

          .menu-center a:active {
              color: blue;
          }

          .about{
                font-size: 15px;
                font-weight: bold;
                background: black;
                text-align: center;
                margin:0px;
                padding: 0px;
            }       

            .about a:link{
                color: #fff;
            }      

            .about a:visited{
                color: #fff;
            }     

            .about a:hover{
                color: red;
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
