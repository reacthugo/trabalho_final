import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectModel } from '../actions';
import { Cars } from "../api/Cars";
import { ModelCar } from "../Components/ModelCar";
import { Link } from "react-router-dom";

function ModelsView (props) {

    const [models, setModels] = useState([]);

    useEffect(() => {
        
        const LoadModels = async () => {
            setModels([]);
            
            Cars.getModels().then(
                result => {
                    setModels(result);
                    console.log("Modelos de carros carregados com sucesso!");
                }
            )
        }
        
        LoadModels();
    }, []);

    function handleBtnSelectModel(e, modelSel){
        props.selectModel(modelSel);
      }

    return(
        <div>
            <h1>Escolha um modelo de carro</h1>
            {props.model ? 
                <div>
                    <h5>Carro Selecionado: {props.model.name}</h5>
                    <Link to='/versions'>
                        <h5>Avançar para selecionar a versão</h5>
                    </Link>
                </div>
                : null}
            {models.map(model =>
                <div>
                    <ModelCar 
                        {...model} 
                        onSelectModel = {handleBtnSelectModel} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelsView);