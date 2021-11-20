import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const LoginPage = (): JSX.Element => {
    return(
        <div>
            <Header>
              <header>
                
              </header>
            </Header>
            <Main>
                <main>
                    <p>
                        Tenha acesso a grandes ofertas!! Faça login ou cadastre-se para receber nossas ofertas e promoções!!
                    </p>
                       <div>
                            <button>
                                Cadastre-se
                            </button>
                            <button>
                                Login
                            </button>
                        </div>
                        <div>
                        <div></div>
                        <div></div>
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

export default LoginPage;

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
        flex-wrap: wrap;
    }
    p{
        color: white;
        font-size: 64px;
        font-family: Sans Serif;
    }
    div{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        text-aling: center;
    }
    button{
        background-color:#C4C4C4;
        width: 343px;
        height: 69px;
        font-family: Droid Sans;
        font-size: 36px;
        text-aling: center;
        margin: 10px;
        margin-left: 500px;
    }

`
const Footer = styled(Container)`

    footer{
        background-color: yellow;
        font-size: 16px;
    }
    
`





