import logo from './logo.svg';
import './App.css';
import {AppBar} from './components/organisms'
import { Home } from './pages';
import {Provider} from 'react-redux'
import store from './redux'
import React from 'react'
 
function App() {
  return (
    <Provider store = {store} >
      <Home/>
    </Provider>
  );
}

export default App;
