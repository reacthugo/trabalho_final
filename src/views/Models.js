import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModel, setVersion, setColor } from '../actions';
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
        if(props.model === null || props.model.id !== modelSel.id){
            props.setModel(modelSel);
            props.setVersion(null);
            props.setColor(null);
        }
        else
            console.log("Modelo de carro selecionado já está store");
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
            {models.map((model, i) =>
                <div key={i}>
                    <ModelCar 
                        {...model} 
                        onSelectModel = {handleBtnSelectModel}
                         />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = store => ({
    model: store.carState.model
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setModel, setVersion, setColor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModelsView);