import React from 'react';

export const OptionalCar = (optional) => {
    
    return (
        <button className={optional.selected ? " optionalCar optionalCarSelected" : " optionalCar optionalCarNoSelected"} onClick={ event => optional.onSelectOptional(event, optional)}>
            <img className="optionalImg" src={require(`../assets/images/${optional.image}`)} alt="N/A" />
            <h5>{optional.name} ({optional.category})</h5>
            <h6>Preço R$ {(optional.price).toFixed(2)}</h6>
            {optional.selected ?
                <img className="imgSelected" src={require("../assets/images/selectedItem.png")} alt="N/A" />
                : null
            }
            <style jsx>{`
                .optionalCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 230px;
                    height: 250px;
                }
                .optionalCar:hover {
                    border: 3px solid black;
                    margin: 10px;
                }
                .optionalCarNoSelected {
                    background: white;
                }
                .optionalCarNoSelected:hover {
                    background: lightgoldenrodyellow;
                }
                .optionalCarSelected {
                    background: lightskyblue;
                }
                .optionalCarSelected:hover {
                    background: lightskyblue;
                }
                .optionalImg {
                    height: 100px;
                    width: 200px;
                }
                .imgSelected {
                    height: 30px;
                    width: 30px;
                }
            `}</style>
        </button>
    )
}