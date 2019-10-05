import React from 'react';

export const OptionalCar = (optional) => {
    
    return (
        <button className="optionalCar" onClick={ event => optional.onSelectOptional(event, optional)}>
            <img className="optionalImg" src={require(`../assets/images/${optional.image}`)} alt="N/A" />
            <h5>{optional.name} ({optional.category})</h5>
            <h6>Preço R$ {(optional.price).toFixed(2)}</h6>
            <style jsx>{`
                .optionalCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 250px;
                    height: 200px;
                    background: white
                }
                .optionalCar:hover {
                    border: 3px solid black;
                    background: lightgoldenrodyellow;
                    margin: 10px;
                }
                .optionalImg {
                    height: 100px;
                    width: 200px;
                }
            `}</style>
        </button>
    )
}