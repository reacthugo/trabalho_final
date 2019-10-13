import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeOptional } from '../actions';
import ResumeOptionalItem from '../Components/ResumeOptionalItem';

function ResumeView(props) {

    function handleBtnRemoveOptional(e, optionalSel) {
        props.removeOptional(optionalSel);
    }

    return (
        <div>
            {console.log("Model: " + JSON.stringify(props.model))}
            {console.log("Versão: " + JSON.stringify(props.version))}
            {console.log("Color: " + JSON.stringify(props.color))}
            {console.log("optionals: " + JSON.stringify(props.optionals))}

            {props.model ?
                <div>
                    <h2>Resumo</h2>
                    <img
                        width="200"
                        src={require(`../assets/images/${props.model.image}`)}
                        alt=""
                    />
                    <h3>Modelo: {props.model.name} ({props.model.fuelType})</h3>
                    <h3>Versão: {props.version.name}</h3>
                    <img
                        width="200"
                        src={require(`../assets/images/${props.color.image}`)}
                        alt=""
                    />
                    <h3>Cor: {props.color.name}</h3>
                    <h3>Lista de Opcionais ({props.optionals.length})</h3>

                    <ul>
                        {props.optionals.map(optional => (
                            <ResumeOptionalItem key={optional.id} optional={optional} onRemove={handleBtnRemoveOptional} />
                        ))}

                    </ul>

                </div>
                : <h2>É necessário escolher primeiramente um modelo de carro</h2>
            }
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
    bindActionCreators({ removeOptional }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResumeView);