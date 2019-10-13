import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { removeOptional } from '../actions';
import ResumeOptionalItem from '../Components/ResumeOptionalItem';

function ResumeView(props) {

    function handleBtnRemoveOptional(e, optionalSel) {
        props.removeOptional(optionalSel);
    }

    return (
        <div className="center">
            {console.log("Model: " + JSON.stringify(props.model))}
            {console.log("Versão: " + JSON.stringify(props.version))}
            {console.log("Color: " + JSON.stringify(props.color))}
            {console.log("optionals: " + JSON.stringify(props.optionals))}

            <h2 className="titulo">Resumo</h2>
            {props.model ?
                <div className="carro">
                    <img
                        width="200"
                        src={require(`../assets/images/${props.model.image}`)}
                        alt=""
                    />
                    <p><b>Modelo:</b> {props.model.name} ({props.model.fuelType}) <b>Versão:</b> {props.version != null ? props.version.name : " :-( Falta selecionado a versão"}</p>

                    <img
                        width="200"
                        src={require(`../assets/images/${props.color.image}`)}
                        alt=""
                    />
                    <p><b>Cor:</b> {props.color.name}</p>
                    <p><b>Lista de Opcionais ({props.optionals.length}):</b></p>

                    <ul>
                        {props.optionals.map(optional => (
                            <ResumeOptionalItem key={optional.id} optional={optional} onRemove={handleBtnRemoveOptional} />
                        ))}

                    </ul>

                </div>
                : <div id="box"><Link className="validacao" to="/">É necessário escolher primeiramente um modelo de carro</Link></div>
            }

            <style jsx>{`
                .center{
                    width: 90%;
                    margin: 0 auto;                    
                }

                .titulo{
                    text-align: center;
                    color: #428bca;
                    font-size: 22px;
                }

                #box {
                   width: 600px;
                   margin: 0 auto;
                   text-align:center;
                }

                .validacao{
                    text-decoration: none;
                    text-align: center;
                    color: #dc3545;
                    font-size: 24px;                    
                }

                .center a:link{
                    color: #dc3545;
                }

                .center a:visited{
                    color: #dc3545;
                }      

                .center a:hover {
                    color: green;
                }       


                .carro img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                }

                .carro li {
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                font-size: 18px;
                border-radius: 10px;
                margin-bottom: 10px;
                }

                .carro p{
                    font-size: 16px;
                    text-align: center;
                }

                .carro button {
                min-width: 150px;
                max-width: 150px;
                padding: 5px;
                border-radius: 5px;
                border: 0;
                background: #f51717;
                color: #fff;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                margin: 0 auto;
                display: block;
                }
                .carro button:hover {
                opacity: 0.7;
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
    bindActionCreators({ removeOptional }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResumeView);