import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVersion } from '../actions';
import { Cars } from "../api/Cars";
import { VersionCar } from "../Components/VersionCar";
import { Link } from "react-router-dom";

function VersionsView (props) {

  const [model] = useState(props.model);
  const [versions, setVersions] = useState([]);

  useEffect(() => {
        
    const LoadVersions = async () => {
      setVersions([]);
      
      Cars.getVersionsByModel(model.id).then(
          result => {
            setVersions(result);
              console.log("As versões do modelo de carro selecionado (id = " + model.id.toString() + ") foram carregadas com sucesso!");
          }
      )
    }
    
    if(model !== null && model.id !== null)
      LoadVersions();
  }, [model]);

  function handleBtnSelectVersion(e, versionSel){
    props.setVersion(versionSel);
  }

  return(
    <div>
      {model ? 
        <div>
        <h1>Escolha uma versão do carro</h1>
        {props.version ? 
          <div>
              <h5>Versão Selecionada: {props.version.name}</h5>
              <Link to='/colors'>
                  <h5>Avançar para selecionar a cor</h5>
              </Link>
          </div>
          : null}
        {versions.map(version =>
            <div>
                <VersionCar 
                    {...version} 
                    onSelectVersion = {handleBtnSelectVersion} />
            </div>
        )}
         </div>
         : <h1>É necessário escolher primeiramente um modelo de carro</h1>
      }
    </div>
  )
}

const mapStateToProps = store => ({
  model: store.carState.model,
  version: store.carState.version
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVersion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VersionsView);