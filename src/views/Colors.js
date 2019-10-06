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
        <h2>Escolha uma cor para o carro</h2>
        {props.color ? 
          <div>
              <Link to='/optionals'>
                <span className="goSelOptionals">Próximo passo >></span>
              </Link>
          </div>
          : null}
        {colors.map((color, i) =>
            <div key={i}>
                <ColorCar 
                    {...color} 
                    onSelectColor = {handleBtnSelectColor} 
                    selected = {props.color === null ? false : (props.color.id === color.id ? true : false)}  />
            </div>
        )}
          </div>
          : <h2>É necessário escolher primeiramente uma versão de carro</h2>
      }

      <style jsx>{`
          .goSelOptionals {
              margin-left: 15px;
              padding: 5px;
              font-size: 20x;
              text-decoration: none;
          }
      `}</style>
    </div>
  )
}

const mapStateToProps = store => ({
  version: store.carState.version,
  color: store.carState.color
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setColor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ColorsView);
