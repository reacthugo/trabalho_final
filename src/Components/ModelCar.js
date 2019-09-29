import React from 'react';

export const ModelCar = (model) => {
    
    return (
        <button className="modelCar" onClick={ event => model.onSelectModel(event, model)}>
            <img className="productImg" src={require(`../assets/images/${model.image}`)} alt="N/A" />
            <h5>{model.name} ({model.fuelType})</h5>
            <p>{model.description}</p>
            <h6>Preço a partir de R$ {(model.price).toFixed(2)}</h6>
            <style jsx>{`
                .modelCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 350px;
                    height: 400px;
                    background: white
                }
                .modelCar:hover {
                    border: 3px solid black;
                    background: lightgoldenrodyellow;
                    margin: 10px;
                }
                .productImg {
                    height: 150px;
                    width: 300px;
                }
            `}</style>
        </button>
    )
}