import React from 'react';

export const VersionCar = (version) => {
    
    return (
        <button className="versionCar" onClick={ event => version.onSelectVersion(event, version)}>
            <h4>{version.name}</h4>
            <p>{version.description}</p>
            <h6>Preço a partir de R$ {(version.price).toFixed(2)}</h6>

            <style jsx>{`
                .versionCar {
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    float: left;
                    margin: 10px;
                    width: 350px;
                    height: 150px;
                    background: white
                }
                .versionCar:hover {
                    border: 3px solid black;
                    background: lightgoldenrodyellow;
                    margin: 10px;
                }
            `}</style>
        </button>
    )
}