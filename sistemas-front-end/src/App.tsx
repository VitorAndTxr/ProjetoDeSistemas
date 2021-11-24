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
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
