import Particles from 'react-particles-js';
import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/header'
import { Grid } from '@material-ui/core';
import HomePage from './components/HomePage';
import Footer from './components/footer'
import { Provider } from 'react-redux';
import { ConfigureStore } from './components/redux/store';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Backdrop, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

toast.configure()

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'black',
      
        
    
    },
}))


const store = ConfigureStore();
function App() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
  return (
            <Provider store={store}> 
            <div style={{marginTop: 80}}>
            <Navbar /> 
            </div>
            <div style={{marginBottom: 200}}>
            <div style={{position:'absolute',bottom:25, right:15, zIndex:50}}>
                <Button href='https://drive.google.com/file/d/1k6k1u3XK_Db5xzIO6gwkJ96NcTlWebi3/view?usp=sharing' target='_blank' rel='noopener noreferrer' size='20px ' style={{backgroundColor:'orange',textTransform:'none' ,borderRadius:250,marginLeft:2, color:'white'}}>FAQs &nbsp; 
                <i class="material-icons">quiz</i> &nbsp; </Button>
            </div>
            <div style={{position: 'fixed', overflow: 'auto', zIndex: -1}}>
            <Particles  height="100vh" width="100vw" params={{
                particles: {
                    number: {
                        value: 2,
                    },
                    color: {
                        value: '#ff8800'
                    },
                    size: {
                        value: 60,
                        
                    },
                    line_linked: {
                        enable: false
                    },
                  
                 }    
            }}></Particles>
            </div>
            <HomePage />
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
           <div container style={{height:600,borderRadius:20, overflow:'auto',backgroundColor:'white'}}>
            <div container style={{marginLeft:10,marginRight:10, fontFamily:'Raleway'}}>
            <p><strong><u>Frequently Asked Questions (FAQs)</u></strong></p>
<p><strong>&nbsp;</strong></p>
<p><strong>How do I register/sign in to my account?</strong></p>
<ol>
<li>For email verification - Check your spam and junk folders, you can search for 'socialcreds.got@gmail.com&rsquo; or 'netlify'.</li>
<li>Double-check you've added the right email address - your email will be displayed on screen. If it is wrong, you can simply fill out the form again.</li>
<li>Make sure you are signing in with the right email or username; your welcome email will confirm both of these.</li>
<li>Use the &lsquo;forgot password&rsquo; form to change your password.</li>
</ol>
<p>&nbsp;</p>
<p><strong>How do I update my email address/phone number?</strong></p>
<p>You can update any of your personal details from your profile page. Please follow the below steps to do so:</p>
<ol>
<li>Sign in to your account</li>
<li>Click on &ldquo;My Profile&rdquo;</li>
<li>Click on the <EditIcon /> icon and proceed to edit your details.</li>
</ol>
<p>&nbsp;</p>
<p><strong>How do I add more details such as &ldquo;About me&rdquo; or Profile picture?</strong></p>
<p>You can follow the steps under &ldquo;How do I update my email address/phone number?&rdquo; in order to add new details or change any existing details.</p>
<p><strong>&nbsp;</strong></p>
<p><strong>How do I create a program?</strong></p>
<p>Once you have signed in to your account, please use the &ldquo;Create&rdquo; option on the top right corner. Fill in the form and click on &ldquo;Create Program&rdquo; and your program will be live.</p>
<p>You can view all&nbsp; your programs (both you&rsquo;ve created and the ones you are a part of) under &ldquo;My Programs&rdquo; on your dashboard.</p>
<p>&nbsp;</p>
<p><strong>How does the Timebanking/credit system work?</strong></p>
<p>Timebanking is a way of spending one hour of time helping someone out, or sharing skills and experience. For every hour spent, you earn an hour in return. This can be spent on receiving an hour of someone else&rsquo;s time.&nbsp;No money is exchanged.&nbsp;Everyone&rsquo;s time is valued equally; one hour of sharing skills or helping others is recognised by giving that person one hour as a time credit.</p>
<p>&nbsp;</p>
<p><strong>Important Definitions</strong></p>
<ol>
<li><strong>Credit: </strong>The number of hours you&rsquo;ve earned by teaching.</li>
<li><strong>Debit:</strong> The number of hours that will be deducted from your account when you have spent time in learning.</li>
<li><strong>Request</strong>: Choose 'Request' if your program involves requesting volunteers to help you achieve this task.</li>
<li><strong>Offer</strong>: Choose 'Offer' if your program involves you providing a service to others.</li>
</ol>
</div>
</div>
            </Backdrop>
             
           </div>
           
           
            <Footer /> 
            
            </Provider>
          

           
  );
}

export default App;
