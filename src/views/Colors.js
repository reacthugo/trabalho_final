import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setColor } from '../actions';
import { Cars } from "../api/Cars";
import { ColorCar } from "../Components/ColorCar";
import { Link } from "react-router-dom";

function ColorsView (props) {

  const [version] = useState(props.version);
  const [colors, setColors] = useState([]);

  useEffect(() => {
        
    const LoadColors = async () => {
      setColors([]);
      
      Cars.getColorsByVersion(version.id).then(
          result => {
            setColors(result);
              console.log("As cores disponíveis da versão do carro selecionado (id = " + version.id.toString() + ") foram carregadas com sucesso!");
          }
      )
    }
    
    if(version !== null && version.id !== null)
    LoadColors();
  }, [version]);

  function handleBtnSelectColor(e, colorSel){
    
    if(props.color === null || props.color.id !== colorSel.id){
      props.setColor(colorSel);
    }
    else
        console.log("Cor de carro selecionada já está store");
  }

  return(
    <div>
      {version ? 
        <div>
        <h1>Escolha uma cor para o carro</h1>
        {props.color ? 
          <div>
              <h5>Cor Selecionada: {props.color.name}</h5>
              <Link to='/optionals'>
                  <h5>Avançar para selecionar os opcionais</h5>
              </Link>
          </div>
          : null}
        {colors.map(color =>
            <div>
                <ColorCar 
                    {...color} 
                    onSelectColor = {handleBtnSelectColor} />
            </div>
        )}
          </div>
          : <h1>É necessário escolher primeiramente uma versão de carro</h1>
      }
    </div>
  )
}

const mapStateToProps = store => ({
  version: store.carState.version,
  color: store.carState.color,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setColor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ColorsView);
