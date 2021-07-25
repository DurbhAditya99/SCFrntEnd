import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import  {Carousel } from 'react-material-ui-carousel'
import pics from './resources/pics';
import years from './resources/years';
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
  <img style={{marginTop:10,borderRadius:60 ,height:12}} src="1.6.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100, borderRadius:60}} src="1.1.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100, borderRadius:60}} src="1.2.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100, borderRadius:60}} src="1.3.jpeg" onDragStart={handleDragStart} />,
  <img style={{marginTop:10,marginRight:100, borderRadius:60}} src="1.5.jpeg" onDragStart={handleDragStart} />,
  
];

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: 270,
      height: 358,
    
      
    },
    media: {
      height: 170,
    },
  });
  

function LandingPage(){
    const classes = useStyles();
    return(
        <div>
            
            <Grid container spacing={1} style={{marginLeft:20}}> 
            <Grid item xs={12} md={4} style={{height:690}}>
              <Grid container style={{fontFamily: 'Raleway'}}>
              <Grid item xs={2}></Grid>
              <Grid item xs={6} >
                <img src='logo.png' style={{height: 219 , width: 190, marginTop: 39}}></img>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={0.5} md={2}></Grid>
              <Grid item xs={10} md={8}>
              <h5 style={{marginTop: 30, fontSize: 28, height: 37 , fontFamily: 'Raleway', textAlign: 'left'}}>Clock in your goodwill hours today!</h5>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={4} md={3} style={{textAlign: 'left'}}>
                <Button href='/signup' style={{height: 40, marginTop:26,fontFamily: 'Raleway',width: 100, backgroundColor:'#F26627', borderRadius: 30, color: 'white'}}> Sign Up</Button>
              </Grid>
              <Grid item xs={4}  md={4} style={{textAlign: 'left'}}>
                <Button href='/tncs' style={{height: 40,marginTop:26, fontFamily: 'Raleway',width: 100, backgroundColor:'#F9A26C', borderRadius: 30, color: 'white'}}> Donate</Button>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} >
              
                <Typography style={{textAlign: 'left',fontSize:16 ,fontFamily: 'Raleway'}}><i class="material-icons" style={{fontSize:40,marginTop: 120, color: '#ff8800'}}>arrow_downward</i>Scroll for more</Typography>
              </Grid>
              </Grid>
            </Grid>  
            
            <Grid item xs={12} md={8}>
            <div id='grad'>
             </div> 
            
              </Grid>
         
         <Grid container style={{ marginRight: 50}}>
          
         <Grid item xs={12} md={6}>
                <div id='grad1'>
                 </div>
         </Grid>
      
      <Grid item xs={1} md={6}>
      <Grid container style={{marginTop: 100}}>
      <Grid item md={2} xs={8}></Grid>
      <Grid item xs = {4} md={4}>
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
      </CardActionArea>
      <CardActions>
      <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ffffff', backgroundColor:'#F9A26C', borderRadius: 40}}>
          Sign up!
        </Button>
      
      </CardActions>
    </Card>
     
    </Grid>
     
    <Grid item xs={8} md={1}></Grid>
    <Grid item xs = {4} md={5}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
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
      </CardActionArea>
      <CardActions>
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ffffff', backgroundColor:'#F9A26C', borderRadius: 40}}>
          Coming Soon!
        </Button>
       
      </CardActions>
    </Card>
   
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
        </div>
        
      
    )

}

export default LandingPage