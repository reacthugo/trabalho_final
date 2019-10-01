import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectModel } from '../actions';
import { Cars } from "../api/Cars";
import { VersionCar } from "../Components/VersionCar";

function VersionsView (props) {

  const [model] = useState(props.model);
  const [versions, setVersions] = useState([]);

  useEffect(() => {
        
    const LoadVersions = async () => {
      setVersions([]);
      
      Cars.getVersionsByModel(model.id).then(
          result => {
            setVersions(result);
              console.log("As versões do modelo de carro selecionado (id = " + props.model.id.toString() + ") foram carregadas com sucesso!");
          }
      )
    }
    
    if(model !== null && model.id !== null)
      LoadVersions();
}, [model]);

  return(
    <div>
        <h1>Escolha uma versão do carro</h1>
        {versions.map(version =>
            <div>
                <VersionCar 
                    {...version} 
                     />
            </div>
        )}
    </div>
  )
}

const mapStateToProps = store => ({
  model: store.modelState.model
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectModel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VersionsView);