import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom'
import Navbar from './components/header'
import NavbarL from './components/headerloggedin';
import HomePage from './components/HomePage';
import Footer from './components/footer'

function App() {
  return (
    <div>
            {localStorage.getItem('token') ?  <NavbarL /> : <Navbar /> }
            <div style={{marginBottom: 500}}> 
            <HomePage />
            </div>
            <Footer /> 
      </div>

  );
}

export default App;
