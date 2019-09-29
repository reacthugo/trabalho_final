import React, {useState, useEffect } from 'react';
import { Cars } from "../api/Cars";
import { ModelCar } from "../Components/ModelCar";

function ModelsView () {

    const [models, setModels] = useState([]);

    useEffect(() => {
        
        const LoadModels = async () => {
            setModels([]);
            
            Cars.getModels().then(
                result => {
                    setModels(result);
                    console.log("Modelos de carros carregados com sucesso!");
                }
            )
        }
        
        LoadModels();
    }, []);

    return(
        <div>
            <h1>Modelos</h1>
            {models.map(model =>
                <div>
                    <ModelCar {...model} />
                </div>
            )}
        </div>
    )
}

export default (ModelsView);