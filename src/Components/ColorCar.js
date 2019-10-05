import React from 'react';

export const ColorCar = (color) => {
    
    return (
        <button className="colorCar" onClick={ event => color.onSelectColor(event, color)}>
            <img className="colorImg" src={require(`../assets/images/${color.image}`)} alt="N/A" />
            <h5>{color.name} ({color.category})</h5>
            <h6>Preço R$ {(color.price).toFixed(2)}</h6>
            <style jsx>{`
                .colorCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 250px;
                    height: 200px;
                    background: white
                }
                .colorCar:hover {
                    border: 3px solid black;
                    background: lightgoldenrodyellow;
                    margin: 10px;
                }
                .colorImg {
                    height: 100px;
                    width: 200px;
                }
            `}</style>
        </button>
    )
}