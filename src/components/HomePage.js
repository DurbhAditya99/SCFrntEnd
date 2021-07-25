import React from 'react'
import {BrowserRouter as Router,Route,Switch, Link, Redirect} from 'react-router-dom'
import LoginPage from './login'
import SignUp from './registration'
import LandingPage from './landingpage'
import ProfilePage from './profile'
import Dashboard from './dashboard'
import CreatePost from './create'
import ProfileUpdatePage from './profileupdate'
import ActDetail from './actdetail'
import ActEdit from './actedit'
import DonatePage from './donate'
import TNCPage from './tncs'
import AccountInfo from './info'
import DonateSignPage from './donatesignup'
import Message from './message_temp'
import ActivitySignUp from './actsignup'
import ProfileViewPage from './profileview'
import Email from './email'
import Programs from './programs'
import THNKPage from '../thankyou'
function HomePage(){

    return(
    
       
        <Router>
    
        <Switch>
        
            <Route exact path = '/' component={LandingPage} />

            <div style={{
            marginTop: 80
        }}>
            <Route exact path = '/profile' component={ProfilePage} />
            <Route exact path = '/profile/:id' render={(props) => <ProfileViewPage {...props} />   } />
            <Route path = '/profile/edit' component={ProfileUpdatePage} />
            <Route path = '/programs' component={Programs} />
            <Route path = '/thankyou' component={THNKPage} />
            <Route exact path = '/create' component={CreatePost} />
            <Route path = '/login' component={LoginPage} />
            <Route path = '/signup' component={SignUp} />
            <Route path = '/email' component={Email} />
            <Route path= '/tncs' component={TNCPage} />
            <Route path = '/actdetail/:id' render={(props) => <ActDetail {...props} /> } />
            <Route path = '/actedit/:id' render={(props) => <ActEdit {...props} /> } />
            <Route path = '/activate/:uidb64/:token/' render={(props)=><Message {...props} /> } />
            <Route path = '/dashboard' component={Dashboard} />
            <Route path = '/actsignup' component={ActivitySignUp} />
            <Route path = '/donate' component={DonatePage}></Route>
            <Route path = '/signup/donate' component={DonateSignPage}></Route>
            <Route path = '/info' component = {AccountInfo}></Route>
            </div>
            </Switch>
           
         </Router>
         
    )

}


export default HomePage