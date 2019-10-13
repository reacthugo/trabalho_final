import React from 'react';

function AboutView(props) {


    return (
        <div className="center">
            <h1 className="titulo">Trabalho Final React, desenvolvido pelo grupo abaixo:</h1>

            <ul className="">
                <li className="follow-list-item float-left border-bottom">
                    <div>
                        <img
                            width="75"
                            src={require(`../assets/autores/andre.jpg`)}
                            alt=""
                        />
                    </div>
                    <div>André Lordone</div>
                </li>
                <li >
                    <div>
                        <img
                            width="75"
                            src={require(`../assets/autores/fabio.png`)}
                            alt=""
                        />
                    </div>
                    <div className=""> Fábio Souza Teixeira</div>

                </li>
                <li>
                    <div>
                        <img
                            width="75"
                            src={require(`../assets/autores/hugo.jpg`)}
                            alt=""
                        />
                    </div>
                    <div>Hugo Vinicius</div>
                </li>
            </ul>


            <style jsx>{`
                .center{
                    width: 90%;
                    margin: 0 auto;                    
                }

                .titulo{
                    text-align: center;
                    color: #428bca;
                    font-size: 22px;
                }


                .position-relative{
                    position: relative!important;
                }

                ul{
                    list-style-type: none;  
                    text-align: center;
                    font-size: 16px;                  
                }
            `}</style>
        </div>
    )
}

export default (AboutView);