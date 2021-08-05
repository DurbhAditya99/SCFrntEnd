import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useState,useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const resp = {
  0: {
    items: 1
  },
  1024: {
    items:1
  }
}


const handleDragStart = (e) => e.preventDefault();
const items = [
  <img style={{marginTop:10,marginRight:100,borderRadius:60, height:450 }} src="1.6.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100,height:450, borderRadius:60}} src="1.1.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100,height:450, borderRadius:60}} src="1.2.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100,height:450, borderRadius:60}} src="1.3.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100,height:450, borderRadius:60}} src="1.5.jpeg" onDragStart={handleDragStart} />,
  
];
const items1 = [
  <img style={{marginTop:10,borderRadius:60, width:350,height:275, marginLeft:20,marginRight:20 }} src="1.6.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10, borderRadius:60, width:350,height:275, marginLeft:20,marginRight:20 }} src="1.1.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,borderRadius:60, width:350,height:275, marginLeft:20,marginRight:20 }} src="1.2.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10, borderRadius:60, width:350,height:275, marginLeft:20,marginRight:20 }} src="1.3.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,borderRadius:60, width:350,height:275, marginLeft:20,marginRight:20 }} src="1.5.jpeg" onDragStart={handleDragStart} />,
  
];

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
     borderRadius:150,
      height: 370,
      width: 300
      
    },
    media: {
      height: 170,
    },
  });
  

function LandingPage(){
    const classes = useStyles();
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false
    });
    const { mobileView } = state;

    
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
    return(
        <div style={{backgroundColor:'#ffffff'}}>
            
            <Grid container spacing={1} style={{ marginTop:104}}> 
            <Grid item xs={12} md={5} style={{height:620}}>
              <Grid container style={{fontFamily: 'Raleway'}}>
             
            <Grid item md={2}></Grid>
              <Grid item md={10} xs={12}><img src='logo.png' height='250px' style={{marginTop: 28}}></img></Grid>
              <Grid item md={1}></Grid>
              <Grid item xs={0.5} md={1}></Grid>
              <Grid item xs={10} md={8}>
                
              <h5 style={{ fontSize: 26,  fontFamily: 'Raleway', textAlign: 'left'}}>Clock in your goodwill hours today!</h5>
              <Button href='/signup' style={{height: 40, fontFamily: 'Raleway',width: 100, backgroundColor:'#F26627', borderRadius: 30, color: 'white'}}> Sign Up</Button>
                 &nbsp;&nbsp;&nbsp;
                <Button href='/donate' style={{height: 40,fontFamily: 'Raleway',width: 100, backgroundColor:'#F9A26C', borderRadius: 30, color: 'white'}}> Donate</Button>
              </Grid>
             
              <Grid item xs={1} md={1}></Grid>
         
           

 
              </Grid>
            </Grid>  
           
            <Grid item xs={12} md={6}>
              <br></br>
            <Grid item xs={12} style={{textAlign:'center'}}>
            <Typography style={{fontSize:32, fontFamily:'Raleway',textAlign:'center'}}>Check out our programs below!</Typography>
            </Grid>
              <br></br><br></br>
              <Grid container style={{marginLeft:20}} >
              <Grid item md={1}></Grid>
        <Grid item md={5}>
            <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image="summer.jpeg"
        />
        <CardContent>
          <Typography  component="h2" style={{fontSize: 20, fontFamily: 'Raleway'}}>
          SUMMER PROGRAM
          </Typography>
          <br></br>
          Sign up for free and make this lockdown summer count by clocking in your goodwill hours into our programs.
        </CardContent>
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}} href='/signup'>
          Sign up!
        </Button>
      </CardActionArea>
  
    </Card>
    </Grid>
   <Grid item md={1}></Grid>
    <Grid item md={5}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20,marginLeft:10}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="life.jpeg"
        />
        <CardContent style={{height: 90}}>
          <Typography  component="h2" style={{fontSize: 20,fontFamily: 'Raleway'}}>
            LIFE TIME MEMBERSHIP
          </Typography>
          <br></br>
          Make an impact by clocking in unlimited community hours just for Rs. 999/- 
        </CardContent>
    
   
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' ,  color: '#ff8800',borderRadius: 40}}>
          Coming Soon!
        </Button>
        </CardActionArea>
      
    </Card>
    </Grid>
    </Grid>
    </Grid>
               
         
      
      
  
      <Grid container>
      <Grid item md={1}></Grid>
      <Grid item md={5}>
     <AliceCarousel mouseTracking autoHeight='100' items={items}>

     </AliceCarousel>
      </Grid>
      <Grid item md={5}>
        <br></br><br></br><br></br><br></br><br></br>
        <Typography style={{fontFamily:'MonteCarlo',textAlign:'center', fontSize:50}}>One of the greatest gifts you can give is the
gift of time.  </Typography>
      </Grid>
     
   
  

    </Grid>
    </Grid>
        </div>
        
      
    )

};
const displayMobile=() =>{

  return(
    <div style={{backgroundColor:'#ffffff'}}>
            
    <Grid container spacing={1} style={{ marginTop:32}}> 
    <Grid item xs={12} >
      <Grid container style={{fontFamily: 'Raleway',textAlign:'center'}}>
  
      <Grid item xs={12} ><img src='logo.png' height='250px' style={{marginTop: 28}}></img></Grid>
      
      <Grid item xs={12} >
        
      <h5 style={{ fontSize: 26,  fontFamily: 'Raleway', textAlign: 'center'}}>Clock in your goodwill hours today!</h5>
      <Button href='/signup' style={{height: 40, fontFamily: 'Raleway',width: 100, backgroundColor:'#F26627', borderRadius: 30, color: 'white'}}> Sign Up</Button>
         &nbsp;&nbsp;&nbsp;
        <Button href='/donate' style={{height: 40,fontFamily: 'Raleway',width: 100, backgroundColor:'#F9A26C', borderRadius: 30, color: 'white'}}> Donate</Button>
      </Grid>
     
      <Grid item xs={1} md={1}></Grid>
 
   


      </Grid>
    </Grid>  
   
    <Grid item xs={12} md={6}>
      <br></br><br></br><br></br>
    <Grid item xs={12} style={{textAlign:'center'}}>
    <Typography style={{fontSize:32, fontFamily:'Raleway',textAlign:'center'}}>Check out our programs below!</Typography>
    </Grid>
     
      <Grid container style={{textAlign:'center'}} >
   <Grid item xs={1}></Grid>
<Grid item xs={10}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image="summer.jpeg"
/>
<CardContent>
  <Typography  component="h2" style={{fontSize: 20, fontFamily: 'Raleway'}}>
  SUMMER PROGRAM
  </Typography>
  <br></br>
  Sign up for free and make this lockdown summer count by clocking in your goodwill hours into our programs.
</CardContent>
<Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}} href='/signup'>
  Sign up!
</Button>
</CardActionArea>

</Card>
</Grid>
<Grid item xs={1}></Grid>
<Grid item xs={1}></Grid>
<Grid item xs={10}>
<Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
<CardActionArea>
<CardMedia
  className={classes.media}
  image="life.jpeg"
/>
<CardContent>
  <Typography  component="h2" style={{fontSize: 20,fontFamily: 'Raleway'}}>
    LIFE TIME MEMBERSHIP
  </Typography>
  <br></br>
  Make an impact by clocking in unlimited community hours just for Rs. 999/- 
</CardContent>



<Button size="big" color="primary" style={{fontFamily: 'Raleway' ,  color: '#ff8800',borderRadius: 40}}>
  Coming Soon!
</Button>
</CardActionArea>

</Card>
</Grid>
</Grid>
</Grid>
       
 



<Grid container>
<br></br><br></br><br></br><br></br><br></br>
<Grid item xs={12}>
<br></br><br></br>
<AliceCarousel mouseTracking items={items1}>

</AliceCarousel>
</Grid>
<Grid item xs={12}>

<Typography style={{fontFamily:'MonteCarlo',textAlign:'center', fontSize:50, marginLeft:12, marginRight:12}}>One of the greatest gifts you can give is the
gift of time.  </Typography>
</Grid>




</Grid>
</Grid>
</div>


  )

 };



 return(
    <div>
    {mobileView ? displayMobile() : displayDesktop() }
    </div>
)



}





export default LandingPage