import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';


import Home from './page/HomePage';
import Account from './page/AccountPage';

function App ()
{
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/account' element={<Account/> } />
      </Routes>

    </div>
  );
}

export default App;
