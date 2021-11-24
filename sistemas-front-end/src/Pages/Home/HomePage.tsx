import { listenerCount } from 'process';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const HomePage = (): JSX.Element => {
    return(
        <div>
            <Header>
              <header>
                <div className="cabecalho-home">
                    <section>
                            <input className="caixa-home" type="text" placeholder="&#128269;Qual veículo você está procurando?" />
                    </section>
                    <section>
                            <div className="caixa-home">Login</div>
                            <div className="caixa-home">Cadastre-se</div>
                    </section>
                </div>
              </header>
            </Header>
            <Main>
                <main>
                    <div className="menu">
                        <ul>
                            <li><p>Marcas populares:</p></li>
                            <a><li>Volksvagem</li></a>
                            <a><li>Fiat</li></a>
                            <a><li>Chefrolet</li></a>
                            <a><li>Peugeot</li></a>
                            <li><p>Veículos populares:</p></li>
                            <a>
                                <li>
                                    Gol 2020
                                </li>
                            </a>
                            <a><li>Strada</li></a>
                            <a><li>Onix</li></a>
                            <a><li>Peugeot 308</li></a>
                        </ul>
                    </div>
                    <div className="amostra">
                    <p>
                      Ofertas a partir de 99,99!!
                    </p>
                    <section>
                        <ul className="opcoes">
                            <a><ul>
                                <li></li>
                                <li><p>Onix</p></li>
                            </ul></a>
                            <a><ul>
                                <li></li>
                                <li><p>Fusion</p></li>
                            </ul></a>
                            <a><ul>
                                <li></li>
                                <li><p>Gol 2020</p></li>
                            </ul></a>
                            <a><ul>
                                <li><img src={"img/carros/gol-img.svg"}/></li>
                                <li><p>Gol 2019</p></li>
                            </ul></a>
                            <a><ul>
                                <li></li>
                                <li><p>Saveiro Cross</p></li>
                            </ul></a>
                            <a><ul>
                                <li></li>
                                <li><p>Saveiro</p></li>
                            </ul></a>
                        </ul>
                    </section>
                    <p>
                      Dos simples aos mais completos
                    </p>
                    </div>
                </main>
            </Main>
            <Footer>
                <footer>
                    <p>
                       Desenvolvido por NoraNa &copy; Todos os direitos reservados.
                    </p>
                </footer>
            </Footer>
        </div>
    )
}

export default HomePage;

const Header = styled(Container)`

    header{
        background-color: #FCDC34;
    }
    .cabecalho-home{
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    .caixa-home{
        background-color: #C4C4C4;
        width:311px;
        height: 25px;
        font-size:black;
        margin: 23px;

    }
    input{
        background-color: #C4C4C4;
        width:311px;
        height: 35px;
        font-size:black;
    }
`
const Main = styled(Container)`

    main{
        background-color:#484848;
        display: flex;
        flex-direction: row;
    }
    .menu{
        background-color:#FCDC34;
        font-color: #FFFFFF;
        font-family: Droid Sans;
        font-size:24px;
        height: 644px;
        margin: 40px;
        text-align: justify;
    }
    .menu li{
        list-style-type: none;
        font-color: black;
        margin-left: 40px;
        margin-right: 40px;
    }
    .menu p{
        font-family: Droid Sans;
        font-size:24px;
    }
    .opcoes{
        font-size:24px;
        font-family: Droid Sans;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .amostra li{
        list-style-type: none;
    }
    .amostra p{
        color: white;
        font-size: 64px;
        font-family: DM Serif Text;
    }
    .opcoes a p{
        color: white;
        font-size:24px;
    }
`
const Footer = styled(Container)`

    footer{
        background-color: #C4C4C4;
        color: black;
        font-size: 16px;
        padding: 10px;
    }
    

`