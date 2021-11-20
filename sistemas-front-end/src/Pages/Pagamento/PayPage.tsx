import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const PayPage = (): JSX.Element => {
    return(
        <div>
            <Header>
              <header>
              </header>
            </Header>
            <Main>
                <main>
                    <div>
                        <form>
                        <label>Cartão</label>
                        <input  type="text" name="CPF" placeholder="CPF do titular" />
                        <input  type="text" name="name" placeholder="Nome completo" />
                        <input  type="text" name="numero-cartao" placeholder="Número do cartão" />
                        <input  type="date"/>
                        <input  type="text" name="codigo" placeholder="CCV" />
                        </form>
                    </div>
                    <div>
                        <form>
                        <label>Boleto</label>
                        <input  type="text" name="CPF" placeholder="CPF do titular" />
                        </form>
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

export default PayPage;

const Header = styled(Container)`

    header{
        background-color: yellow;
    }

`
const Main = styled(Container)`

    main{
        background-color:#484848;
        display: flex;
        flex-direction: column;
        aling-items: center;
        justify-content: space-around;
    }
    p{
        color: white;
        font-size: 64px;
        font-family: Sans Serif;
    }
    button{
        background-color:#C4C4C4;
        width: 343px;
        height: 69px;
        font-family: Droid Sans;
        font-size: 36px;
        text-aling: center;
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