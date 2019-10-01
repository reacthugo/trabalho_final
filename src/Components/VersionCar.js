import React from 'react';

export const VersionCar = (version) => {
    
    return (
        <div>
            <h4>{version.name}</h4>
            <p>{version.description}</p>
            <h6>Preço a partir de R$ {(version.price).toFixed(2)}</h6>
        </div>
    )
}