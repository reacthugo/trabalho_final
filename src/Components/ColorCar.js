import React from 'react';

export const ColorCar = (color) => {
    
    return (
        <button className={color.selected ? " colorCar colorCarSelected" : " colorCar colorCarNoSelected"} onClick={ event => color.onSelectColor(event, color)}>
            <img className="colorImg" src={require(`../assets/images/${color.image}`)} alt="N/A" />
            <h5>{color.name} ({color.category})</h5>
            <h6>Preço R$ {(color.price).toFixed(2)}</h6>
            {color.selected ?
                <img className="imgSelected" src={require("../assets/images/selectedItem.png")} alt="N/A" />
                : null
            }
            <style jsx>{`
                .colorCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 200px;
                    height: 230px;
                }
                .colorCar:hover {
                    border: 3px solid black;
                    margin: 10px;
                }
                .colorCarNoSelected {
                    background: white;
                }
                .colorCarNoSelected:hover {
                    background: lightgoldenrodyellow;
                }
                .colorCarSelected {
                    background: lightskyblue;
                }
                .colorCarSelected:hover {
                    background: lightskyblue;
                }
                .colorImg {
                    height: 75px;
                    width: 150px;
                }
                .imgSelected {
                    height: 30px;
                    width: 30px;
                }
            `}</style>
        </button>
    )
}