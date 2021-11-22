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


`
const Main = styled(Container)`

   

`
const Footer = styled(Container)`

   
    

`