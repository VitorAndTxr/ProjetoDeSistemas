import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';



const InfoPage = (): JSX.Element => {
    return(
        <div>
            <Header>
              <header>
              </header>
            </Header>
            <Main>
                <main>
                    <section className="informacoes-do-veiculo">
                        NOME DO VEICULO
                            <section>
                                <p>
                                Ano: 
                                </p>
                                <p>
                                resposta   
                                </p>
                            </section>
                            <section>
                                <p>
                                    Portas: 
                                </p>
                                <p>
                                resposta  
                                </p>
                            </section>
                            <section>
                                <p>
                                    Combustível: 
                                </p>
                                <p>
                                resposta  
                                </p>
                            </section>
                            <section>
                                <p>
                                    Cor: 
                                </p>
                                <p>
                                resposta  
                                </p>
                            </section>
                            <section>
                                <p>
                                Unidades disponíveis: 
                                </p>
                                <p>
                                resposta  
                                </p>
                            </section>
                </section>
                <section className="informacoes-de-pagamento">
                            <section>
                                <p>
                                Quantidade de dias:
                                </p>
                                <p>
                                R$ 100,00/Dia  
                                </p>
                                <input className="dias" type="text"/>
                            </section>
                            <section>
                                <p>
                                Seguro para o carro:
                                </p>
                                <p>
                                R$ 40,00 
                                </p>
                            </section>
                            <section>
                                <p>
                                Carro completo:
                                </p>
                                <p>
                                R$ 40,00   
                                </p>
                            </section>
                            <section>
                                <p>
                                Carro semi completo:
                                </p>
                                <p>
                                R$ 20,00  
                                </p>
                            </section>
                            <section>
                                <p>
                                Carro simples:
                                </p>
                                <p>
                                R$ 00,00  
                                </p>
                            </section>
                            <section className="processos-para-aluguel">
                                <label>
                                Data para alugar:
                                </label>
                                <input type="date"/>
                                <label>
                                Total:
                                </label>
                                <input type="text"/>
                            </section>
                            <button>Pagamento</button>
                    </section>
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

export default InfoPage;

const Header = styled(Container)`

    header{
        background-color: #FCDC34;
    }

`
const Main = styled(Container)`

   main{
    background-color:#484848;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   }
   .informacoes-do-veiculo{
    background-color: #FCDC34;
    width: 300px;
    heigth: 100vh;
   }
   
   .informacoes-do-veiculo section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   }
   .informacoes-de-pagamento .dias{
    width: 50px;
    height: 22px;
    background-color: black;
    color: white;
   }
   .informacoes-de-pagamento{
    background-color: #C4C4C4;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 49px;
    padding-bottom: 149px;
    padding-left: 19px;
    padding-right: 19px;
    width: 450px;
   }
   .informacoes-de-pagamento section{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   }
   .informacoes-de-pagamento section p: first-child, label{
    background-color: #FFFFFF;
    color: black;
    margin: 5px;
    width: 200px;
    text-align: left;
    height: 25px;
    padding-left: 7px;
   }
   .informacoes-de-pagamento section p: nth-of-type(2){
    background-color: #FFFFFF;
    color: black;
    margin: 5px;
    width: 100px;
    text-align: left;
    height: 25px;
   }
   .processos-para-aluguel{
       margin-top: 30px;
   }
   .processos-para-aluguel input{
    width: 120px;
   }
   button{
       background-color: black;
       color: white;
       width: 100px;
        height: 45px;
        margin-top: 20px;
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