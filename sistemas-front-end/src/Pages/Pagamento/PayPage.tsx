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
                    <section>
                        <form>
                        <h2>Cartão</h2>
                        <input className="priemiro-input" type="text" name="CPF" placeholder="CPF do titular" />
                        <input  type="text" name="name" placeholder="Nome completo" />
                        <input  type="text" name="numero-cartao" placeholder="Número do cartão" />
                        <input  type="date"/>
                        <input  type="text" name="codigo" placeholder="CCV" />
                        </form>
                        <h1>Qual método de<br/>pagamento?</h1>
                        <form>
                        <h2>Boleto</h2>
                        <input  type="text" name="CPF" placeholder="CPF do titular" />
                        </form>
                    </section>
                    <input className="enviar" type="submit"/>
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
    background-color: #484848;
    padding: 36px;
}
div{
background-color: #C4C4C4;
}
section{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
}
form{
    display: flex;
    flex-direction: column;
}
h2{
    margin-top: 73px;
    font-family:DM Serif Text;
    font-size:36px;
}
.primeiro-input{
    margin-top: 138px;
}
input{
    margin-top: 70px;
    width:331px;
    height:47px;
    font-size:24px;
}
h1{
    margin-top: 200px;
    font-family:Droid Sans;
    font-size:64px;
}
.enviar{
    background-color: black;
    color:white;
    font-size: 24px;
    height: 34px;
    width: 121px;
    margin-bottom: 41px;
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