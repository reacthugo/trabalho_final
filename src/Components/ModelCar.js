import React from 'react';
import { ConvertToMoneyNumber } from "../Utils";

export const ModelCar = (model) => {
    
    return (
        <button className={model.selected ? " modelCar modelCarSelected" : " modelCar modelCarNoSelected" } onClick={ event => model.onSelectModel(event, model)}>
            <img className="modelImg" src={require(`../assets/images/${model.image}`)} alt="N/A" />
            <h5>{model.name} ({model.fuelType})</h5>
            <p>{model.description}</p>
            <h6>Preço a partir de R$ {ConvertToMoneyNumber(model.price)}</h6>
            {model.selected ?
                <img className="imgSelected" src={require("../assets/images/selectedItem.png")} alt="N/A" />
                : null
            }
            <style jsx>{`
                .modelCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 280px;
                    height: 340px;
                    text-align: justify;
                    text-justify: inter-word;
                }
                .modelCar:hover {
                    border: 3px solid black;
                    padding: 8px;
                }
                .modelCarNoSelected {
                    background: white;
                }
                .modelCarNoSelected:hover {
                    background: lightgoldenrodyellow;
                }
                .modelCarSelected {
                    background: lightskyblue;
                }
                .modelCarSelected:hover {
                    background: lightskyblue;
                }
                .modelImg {
                    height: 125px;
                    width: 250px;
                }
                .imgSelected {
                    height: 30px;
                    width: 30px;
                }
            `}</style>
        </button>
    )
}