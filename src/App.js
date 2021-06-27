import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom'
import Navbar from './components/header'
import NavbarL from './components/headerloggedin';
import HomePage from './components/HomePage';
import Footer from './components/footer'
import { Provider } from 'react-redux';
import { ConfigureStore } from './components/redux/store';


const store = ConfigureStore();
function App() {
  return (
   
            <Provider store={store}>
            {localStorage.getItem('token') ?  <NavbarL /> : <Navbar /> }
            <div style={{marginBottom: 500}}>
            <HomePage />
            </div>
            <Footer /> 
            </Provider>

  );
}

export default App;
