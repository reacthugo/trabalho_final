import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVersion, setColor, removeOptional } from '../actions';
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
    if(props.version === null || props.version.id !== versionSel.id){
      props.setVersion(versionSel);
      
      // se já existir uma cor selecionada, só a mantemos se a cor existir para a versão corrente do carro
      if(props.color !== null){
        if(props.color.idsVersions.find(id => id === versionSel.id) === undefined){
          props.setColor(null);
        }
      }

      // se já existir opcionais, só mantemos os opcionais que existem para a versão corrente do carro
      if(props.optionals.length > 0){
        props.optionals.map(optStore => {
          if(optStore.idsVersions.find(id => id === versionSel.id) === undefined)
            props.removeOptional(optStore);
            
          return true;
        });
      }
    }
    else
        console.log("Versão de carro selecionada já está store");
  }

  return(
    <div>
      {model ? 
        <div>
        <h2>Escolha uma versão do carro</h2>
        {props.version ? 
          <div>
              <Link to='/colors'>
                  <span className="goSelColor">Próximo passo >></span>
              </Link>
          </div>
          : null}
        {versions.map((version, i) =>
            <div key={i}>
                <VersionCar 
                    {...version} 
                    onSelectVersion = {handleBtnSelectVersion} 
                    selected = {props.version === null ? false : (props.version.id === version.id ? true : false)}  />
            </div>
        )}
         </div>
         : <h2>É necessário escolher primeiramente um modelo de carro</h2>
      }

      <style jsx>{`
          .goSelColor {
              margin-left: 15px;
              padding: 5px;
              font-size: 20x;
              text-decoration: none;
          }
      `}</style>
    </div>
  )
}

const mapStateToProps = store => ({
  model: store.carState.model,
  version: store.carState.version,
  color: store.carState.color,
  optionals: store.carState.optionals
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVersion, setColor, removeOptional }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VersionsView);