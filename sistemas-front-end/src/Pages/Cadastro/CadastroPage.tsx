import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const CadastroPage = (): JSX.Element => {
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
                        <input  type="text" name="name" placeholder="Nome completo" />
                        <input  type="number" name="CPF" placeholder="CPF" />
                        <input  type="date"/>
                        <select>
                            <option value="opcao">Pagamento:</option>
                            <option value="cd">Cartão de débito</option>
                            <option value="cc">Cartão de crédito</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                        <input  type="text" placeholder="Crie sua senha" />
                        <input  type="text" placeholder="Crie sua senha" />
                    </form>
                    </div>
                    <div>
                        <form>
                        foto
                        <input  type="text" placeholder="Nome de usuário" />
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

export default CadastroPage;

const Header = styled(Container)`

    header{
        background-color:#484848;
    }

`
const Main = styled(Container)`

    main{
        background-color:#FCDC34;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        padding-top: 235px;
        padding-bottom: 235px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input, select{
        margin-top: 18px;
        margin-bottom: 18px;
        height: 69px;
        width: 343px;
        font-size: 35px;
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