import React, { useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    Link 
  } from "@material-ui/core";
  import { useHistory } from 'react-router-dom';
  import Grid from '@material-ui/core/Grid';
  import IconButton from '@material-ui/core/IconButton';
  import AccountCircle from '@material-ui/icons/AccountCircle';

const tokenglobal = localStorage.getItem('token')

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#F26627",
    height: 80
  },
  logo: {
    fontFamily: "Raleway",
    fontSize: 40,
    color: "#ffffff",
    textAlign: "left",
    verticalAlign: 'center'
    
  },
  menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 800,
      fontSize: 15,
      marginTop: 24,
      color: '#ffffff',
      width: 120
      
   },
}));

const logout =()=>{
  localStorage.clear()
  window.location.href= '/'
}





function NavbarL(){
      
    const { header, logo, menuButton } = useStyles();
    const history = useHistory();
    
  const logout =() =>{
    localStorage.clear()
    window.location.href = '/';
  }

    const displayDesktop = () => {
        return (
          <Toolbar>
          <Grid
            justify="space-between" 
            container 
            spacing={20}
            >
            <Grid item> <img src = 'gotlogo.jpeg' style={{height: 50, width: 50}}></img></Grid>
        <Grid item xs={6}>
          <Typography type="title" color="inherit">
          {GOTLogo}
          </Typography>
          </Grid>
          
          <Grid item xs={0.5}>
          <Button className={menuButton} href='/create'>Post an Activity</Button>
          </Grid>
          <Grid item xs={0.5}>
          <Button className={menuButton} href='/dashboard'>Dashboard</Button>
          </Grid>
       
          <Grid item xs={0.5}>
          <Button className={menuButton} href='/' onClick={logout} >Logout </Button>
          </Grid>
          </Grid>
          </Toolbar> ); 
      };

      
  const GOTLogo = (
    <Typography variant="h6" component="h1" className={logo} >
             Gift of Time  
    </Typography>
  );


    return(
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
    )

}



export default NavbarL