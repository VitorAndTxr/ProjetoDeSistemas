import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CadastroPage from "./Pages/Cadastro/CadastroPage";
import MenuPage from "./Pages/Catalogo/MenuPage";
import HomePage from "./Pages/Home/HomePage";
import InclusaoPage from "./Pages/inclusao/InclusaoPage";
import InfoPage from "./Pages/Info/InfoPage";
import LoginPage from "./Pages/Login/LoginPage";
import PayPage from "./Pages/Pagamento/PayPage";

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <HomePage/>  
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/cadastro">
                    <CadastroPage/>
                </Route>
                <Route path="/pagamento">
                    <PayPage/>
                </Route>
                <Route path="/menu">
                    <MenuPage/>                
                </Route>
                <Route path="/addNewCar">
                    <InclusaoPage/>            
                </Route>
                <Route path="/info">
                    <InfoPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router