import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addOptional, removeOptional } from '../actions';
import { Cars } from "../api/Cars";
import { OptionalCar } from "../Components/OptionalCar";
import { Link } from "react-router-dom";

function OptionalsView (props) {

  const [version] = useState(props.version);
  const [optionals, setOptionals] = useState([]);

  useEffect(() => {
        
    const LoadOptionals = async () => {
      setOptionals([]);
      
      Cars.getOptionalsByVersion(version.id).then(
          result => {
            setOptionals(result);
              console.log("Os opcionais disponíveis da versão do carro selecionado (id = " + version.id.toString() + ") foram carregadas com sucesso!");
          }
      )
    }
    
    if(version !== null && version.id !== null)
      LoadOptionals();
  }, [version]);

  function handleBtnSelectOptional(e, optionalSel){
    if(props.optionals.find(opt => opt.id === optionalSel.id) === undefined)
      props.addOptional(optionalSel);
    else
      props.removeOptional(optionalSel);
  }

  return(
    <div>
      {version ? 
        <div>
        <h1>Escolha os opcionais para o carro</h1>
        <Link to='/resume'>
            <h5>Finalizar seleção</h5>
        </Link>
        {optionals.map(optional =>
            <div>
                <OptionalCar 
                    {...optional} 
                    onSelectOptional = {handleBtnSelectOptional} />
            </div>
        )}
          </div>
          : <h1>É necessário escolher primeiramente uma versão de carro</h1>
      }
    </div>
  )
}

const mapStateToProps = store => ({
  version: store.carState.version,
  optionals: store.carState.optionals,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addOptional, removeOptional }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OptionalsView);