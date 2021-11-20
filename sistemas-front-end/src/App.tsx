import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import CadastroPage from './Pages/Cadastro/CadastroPage';
import PayPage from './Pages/Pagamento/PayPage';
import MenuPage from './Pages/Catalogo/MenuPage';
import HomePage from './Pages/Home/HomePage';
import InclusaoPage from './Pages/inclusao/InclusaoPage';
import InfoPage from './Pages/Info/InfoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <LoginPage/>
      <CadastroPage/>
      <PayPage/>
      <MenuPage/>
      <HomePage/>
      <InclusaoPage/>
      <InfoPage/>

    </div>
  );
}

export default App;
