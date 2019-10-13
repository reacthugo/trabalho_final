import React from 'react';

const Header = () => (
    <header id="main-header">
        <img className="logoBMW" src={require("../assets/images/bmw-logo.png")} alt="N/A" />
        <h1>Monte o seu BMW</h1>

        <style jsx>{`
            #main-header{
                width: 100%;
                height: 100px;    
                background: #428bca;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;  
            }
            .logoBMW {
                height: 100px;
                width: 100px;
                float: left;
                margin: 5px;
            }              
            `}</style>
    </header>
);

export default Header;
