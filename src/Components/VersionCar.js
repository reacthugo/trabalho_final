import React from 'react';

export const VersionCar = (version) => {
    
    return (
        <button className={version.selected ? " versionCar versionCarSelected" : " versionCar versionCarNoSelected"} onClick={ event => version.onSelectVersion(event, version)}>
            <h4>{version.name}</h4>
            <p>{version.description}</p>
            <h6>Preço a partir de R$ {(version.price).toFixed(2)}</h6>
            {version.selected ?
                <img className="imgSelected" src={require("../assets/images/selectedItem.png")} alt="N/A" />
                : null
            }
            <style jsx>{`
                .versionCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 350px;
                    height: 180px;
                }
                .versionCar:hover {
                    border: 3px solid black;
                    margin: 10px;
                }
                .versionCarNoSelected {
                    background: white;
                }
                .versionCarNoSelected:hover {
                    background: lightgoldenrodyellow;
                }
                .versionCarSelected {
                    background: lightskyblue;
                }
                .versionCarSelected:hover {
                    background: lightskyblue;
                }
                .imgSelected {
                    height: 30px;
                    width: 30px;
                }
            `}</style>
        </button>
    )
}