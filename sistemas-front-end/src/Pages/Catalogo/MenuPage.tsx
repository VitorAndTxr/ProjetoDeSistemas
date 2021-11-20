import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const MenuPage = (): JSX.Element => {
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
                    <button>
                        Cadastre-se
                    </button>
                    <button>
                        Login
                    </button>
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

export default MenuPage;

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
        background-color: yellow;
        font-size: 16px;
    }
    

`