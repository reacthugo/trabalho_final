import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setModel, setVersion, setColor } from '../actions';
import { Cars } from "../api/Cars";
import { ModelCar } from "../Components/ModelCar";
import { Link } from "react-router-dom";

function ModelsView(props) {

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

    function handleBtnSelectModel(e, modelSel) {
        if (props.model === null || props.model.id !== modelSel.id) {
            props.setModel(modelSel);
            props.setVersion(null);
        }
        else
            console.log("Modelo de carro selecionado já está store");
    }

    return (
        <div>
            <h2>Escolha um modelo de carro</h2>
            {props.model ?
                <div>
                    <Link to='/versions'>
                        <span className="goSelVersion">Próximo passo ></span>
                    </Link>
                </div>
                : null}
            {models.map((model, i) =>
                <div key={i}>
                    <ModelCar
                        {...model}
                        onSelectModel={handleBtnSelectModel}
                        selected={props.model === null ? false : (props.model.id === model.id ? true : false)} />
                </div>
            )}

            <style jsx>{`
                .goSelVersion {
                    margin-left: 15px;
                    text-decoration: none;
                    white-space: nowrap;
                    display: inline-block;
                    border-radius: 5px;
                    padding: 10px 15px;
                    font-size: 20px;
                    color: #fff;
                    background-image: linear-gradient(#4f93ce,#285f8f);
                    border: 1px solid #285f8f;
                }
            `}</style>
        </div>
    )
}

const mapStateToProps = store => ({
    model: store.carState.model
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setModel, setVersion, setColor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModelsView);