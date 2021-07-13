import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button  } from "@material-ui/core";
  import Grid from '@material-ui/core/Grid';
  import IconButton from '@material-ui/core/IconButton';
  import MenuIcon from '@material-ui/icons/Menu'; 
  import { Drawer } from '@material-ui/core';

const tokenglobal = localStorage.getItem('token')

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
    header: {
      backgroundColor: "#F26627",
      height: 80
    },
    logo: {
      fontFamily: "Cinzel",
      fontSize: '2.5rem',
      textAlign: "left",
      verticalAlign: 'center'
    },
    logo1: {
      fontFamily: "Cinzel",
      fontSize: '2rem',
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
     menuButtonM: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 800,
      fontSize: 5,
      marginTop: 24,
      width: 50,
      color: '#ffffff'
      
   },
  }));


  const logout =() =>{
    localStorage.clear()
    window.location.href = '/';
  }


function Navbar(){
      
    const { header, logo,logo1, menuButton,root, menuButtonM} = useStyles();
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false
    });
    const { mobileView,drawerOpen  } = state;

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };

      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      }
    }, []);
    


    const displayDesktop = () => {
        return (      
             localStorage.getItem('token') ? 
             
        
            <Toolbar> 
            <Grid
              justify="space-between" 
              container 
              style={{marginRight: 80}}
              >
            <Grid item xs={1} style={{marginTop:14}}> <img src = 'gotlogo.jpeg' style={{height: 52, width: 52, marginLeft: 80, borderRadius: 50}}></img></Grid>
          
            <Grid item  xs={1} md={6} >
            <Typography type="title" color="inherit" style={{marginTop: 10}}>
            {GOTLogo}
            </Typography>
            </Grid> 
  
           <Grid item xs={1}>
            <Button className={menuButton} style={{borderRadius: 20}}  href='/create' ><Typography style={{fontFamily: 'Raleway'}}>Create </Typography> </Button> 
            </Grid>
            
             <Grid item xs={1}>
            <Button className={menuButton} style={{borderRadius: 20}}  href='/dashboard' ><Typography style={{fontFamily: 'Raleway'}}> Dashboard </Typography> </Button>
            </Grid>
            <Grid item xs={1}>
           <div class='dropdown'>
            <Button style={{width: 120,  marginTop: 18}}>
              <Typography style={{color: '#ffffff',fontFamily: 'Raleway'}}>My Profile</Typography> 
              <img src='life.jpg' style={{height: 40, width:40, borderRadius: 100 }}></img>
              </Button>
               <div class="dropdown-content">
               <a href='/profile'>View Profile</a>
               <a onClick={logout} href="/">Logout</a>
               </div> 
            </div>
            </Grid>
            <Grid item xs={1}>
            <Button className={menuButton} style={{borderRadius: 20, backgroundColor:'#F9A26C', width:120, height:40}} href='/tncs' ><Typography style={{fontFamily: 'Raleway'}}>Donate</Typography> </Button>
            </Grid>
            </Grid>
            </Toolbar>
            
             : 
             <Toolbar> 
         
               <Grid
               justify="space-between" 
               container 
               style={{marginRight: 80}}
               >
             <Grid item md={1} style={{marginTop:14,verticalAlign: 'center'}}> <img src = 'gotlogo.jpeg' style={{height: 52, width: 52, marginLeft: 60, borderRadius: 50}}></img></Grid>
          
          <Grid item md={7}>
          <Typography type="title" color="inherit" style={{marginTop: 10}}>
          {GOTLogo}
          </Typography>
          </Grid> 
          
       
           <Grid item md={1}>
             <Button className={menuButtonM} style={{borderRadius: 20}}  href='/' ><Typography style={{fontFamily: 'Raleway'}}>Home </Typography> </Button> 
             </Grid> 
             
              <Grid item md={1}>
             <Button className={menuButtonM} style={{borderRadius: 20}}  href='/' ><Typography style={{fontFamily: 'Raleway'}}> About </Typography> </Button>
             </Grid>
             <Grid item md={1}>
             <Button className={menuButtonM} style={{borderRadius: 20}}  href='/login' ><Typography style={{fontFamily: 'Raleway'}}> Login </Typography> </Button>
             </Grid>
             <Grid item md={1}>
             <Button className={menuButtonM} style={{borderRadius: 20, backgroundColor:'#F9A26C', width:120, height:40}} href='/tncs' ><Typography style={{fontFamily: 'Raleway'}}>Donate</Typography> </Button>
             </Grid>
          
             </Grid>
             </Toolbar>

            ); 
      };

      const displayMobile=() =>{

      const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (      
          localStorage.getItem('token') ? 
             
        
          <Toolbar> 
       <IconButton   {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}>
          <MenuIcon />
        </IconButton>

       <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            
          }}
        >
        <Grid container style={{textAlign:'center'}}>
        <Grid item xs={8}>
        <Typography style={{height:80,textAlign:'right',fontSize:40, color: '#ffffff', backgroundColor:'#ff8800' ,fontFamily: 'Raleway'}}>MENU </Typography>
        </Grid>
        <Grid item xs={3} style={{backgroundColor: '#ff8800'}}>

        </Grid>
        <Grid item xs={1}>
        <Button onClick={handleDrawerClose} style={{backgroundColor:'#ff8800',height:80,float:'right',color: '#ffffff',fontSize:40}}><i class='material-icons'>cancel</i></Button>
        </Grid>
        <Grid item xs={12}>
        <img src='logo.png' style={{height: 219 , width: 190, marginTop: 39}}></img>
        </Grid>
        <Grid item xs={12}>
        <Button href='/create' ><Typography style={{fontFamily: 'Raleway'}}>Create</Typography> </Button> 
        </Grid>
        <Grid item xs={12}>
        <Button href='/dashboard' ><Typography style={{fontFamily: 'Raleway'}}> Dashboard </Typography> </Button> 
        </Grid>
        <Grid item xs={12}>
        <Button href='/profile' ><Typography style={{fontFamily: 'Raleway'}}>View Profile </Typography> </Button>
        </Grid> 
        <Grid item xs={12}>
        <Button href='/' onClick={logout} ><Typography style={{fontFamily: 'Raleway'}}>Logout </Typography> </Button> 
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
        <Button href='/tncs' style={{backgroundColor:'#ff8800',fontFamily:'Raleway', color:'#ffffff'}}><Typography style={{fontFamily: 'Raleway'}}>Donate </Typography> </Button> 
        </Grid>

        </Grid>
       
        </Drawer>
        <Grid container style={{marginTop: 20}}>
        <Grid item xs={3}>
        <img src = 'gotlogo.jpeg' style={{height: 52, width: 52, borderRadius: 50}}></img>
        </Grid>
        {GOTLogo1}
        </Grid>
           </Toolbar>
          
           : 

           <Toolbar> 
       <IconButton   {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}>
          <MenuIcon />
        </IconButton>

       <Drawer
          fullWidth
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
        <Grid container style={{textAlign:'center'}}>
        <Grid item xs={11}>
        <Typography style={{height:80,textAlign:'center',fontSize:40, color: '#ffffff', backgroundColor:'#ff8800' ,fontFamily: 'Raleway'}}>MENU </Typography>
        </Grid>
        <Grid item xs={1}>
        <Button onClick={handleDrawerClose} style={{backgroundColor:'#ff8800',height:80,float:'right',color: '#ffffff',fontSize:40}}><i class='material-icons'>cancel</i></Button>
        </Grid>
        <Grid item xs={12}>
        <img src='logo.png' style={{height: 219 , width: 190, marginTop: 39}}></img>
        </Grid>
        <Grid item xs={12}>
        <Button href='/' ><Typography style={{fontFamily: 'Raleway'}}>Home </Typography> </Button> 
        </Grid>
        <Grid item xs={12}>
        <Button href='/' ><Typography style={{fontFamily: 'Raleway'}}>About </Typography> </Button> 
        </Grid>
        <Grid item xs={12}>
        <Button href='/login' ><Typography style={{fontFamily: 'Raleway'}}>Login </Typography> </Button>
        </Grid> 
        <Grid item xs={12}>
        <Button href='/signup' ><Typography style={{fontFamily: 'Raleway'}}>Sign Up </Typography> </Button> 
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
        <Button href='/tncs' ><Typography style={{fontFamily: 'Raleway'}}>Donate </Typography> </Button> 
        </Grid>
        </Grid>
        </Drawer>
        <Grid container style={{marginTop: 20}}>
        <Grid item xs={3}>
        <img src = 'gotlogo.jpeg' style={{height: 52, width: 52, borderRadius: 50}}></img>
        </Grid>
        {GOTLogo1}
        </Grid>
           </Toolbar>
         ); 

      }

      
  const GOTLogo = (
    <Typography variant="h6" component="h1" className={logo} >
       
             Gift of Time
    
    </Typography>
  );
  
  const GOTLogo1 = (
    <Typography variant="h6" component="h1" className={logo1} >
       
             Gift of Time
    
    </Typography>
  );


    return(
      <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
    )

}



export default Navbar