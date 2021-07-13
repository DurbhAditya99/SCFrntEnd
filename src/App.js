import Particles from 'react-particles-js';
import './App.css';
import Navbar from './components/header'
import NavbarL from './components/headerloggedin';
import HomePage from './components/HomePage';
import Footer from './components/footer'
import { Provider } from 'react-redux';
import { ConfigureStore } from './components/redux/store';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const store = ConfigureStore();
function App() {
  return (
            <Provider store={store}> 
            <div style={{marginTop: 80}}>
            <Navbar /> 
            </div>
            <div style={{marginBottom: 200}}>
            <div style={{position: 'fixed', overflow: 'auto', zIndex: -5, maxWidth: 1000}}>
            <Particles  height="100vh" width="100vw" params={{
                particles: {
                    number: {
                        value: 50,
                    },
                    color: {
                        value: '#ff8800'
                    },
                    size: {
                        value: 20,
                        random: true,
                    },
                    line_linked: {
                        enable: false
                    },
                  
                 }    
            }}></Particles>
            </div>
            <HomePage />
           </div>
            
            <Footer /> 
            
            </Provider>

  );
}

export default App;
