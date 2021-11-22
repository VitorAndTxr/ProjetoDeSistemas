import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const InclusaoPage = (): JSX.Element => {
    return(
        <div>
            <Header>
              <header>
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
                            <li><a>Gol 2020</a></li>
                            <a><li>Strada</li></a>
                            <a><li>Onix</li></a>
                            <a><li>Peugeot 308</li></a>
                            <a><li>Recebimento de veículos</li></a>
                            <a><li>Inclusão de veículos</li></a>
                            <a><li>Recebimento de veículos</li></a>
                        </ul>
                    </div>
                    <div className="inclusao">
                        <section>
                            imagem
                            <input  type="text" placeholder="Senha:" />
                            <button>Adicionar</button>
                        </section>
                        <section>
                        <input  type="text" placeholder="Modelo:" />
                        <input  type="text" placeholder="Marca:" />
                        <input  type="text" placeholder="Ano:" />
                        <input  type="text" placeholder="Combustível" />
                        <input  type="text" placeholder="Placa" />
                        <input  type="text" placeholder="Cor:" />
                        <input  type="text" placeholder="Valor da locação:" />
                        </section>
                    </div>
                </main>
            </Main>
            <Footer>
                <footer>
                    <p>
                        &copy; Todos os direitos reservados.
                    </p>
                </footer>
            </Footer>
        </div>
    )
}

export default InclusaoPage;

const Header = styled(Container)`

    header{
        background-color: yellow;
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
section{
    display:flex;
    flex-direction: column;
}
.button{
    background-color: black;
    color:white;
    font-size: 24px;
    height: 34px;
    width: 121px;
    margin-bottom: 41px;
}
.inclusao{
    display: flex;
    flex-direction: row;
    height: 702px;
    width:694px;
    background-color: #C4C4C4;
}
`
const Footer = styled(Container)`

    footer{
        background-color: yellow;
        font-size: 16px;
    }
    

`  