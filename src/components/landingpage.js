import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 170,
    },
  });
  

function LandingPage(){
    const classes = useStyles();
    return(
        <div class='land'>
          
            <div class='image' >
            <img src = 'gotlogo.jpeg' align='right' style={{borderRadius: 150}}></img>
            </div>
            <div class='title'>
            <h1>SOCIAL CRED$</h1>
            <h5>Clock in your goodwill hours today!</h5>
            <Button></Button>
            </div>
            <h1>Scroll down</h1>
            <br></br>
            
            <Card style={{width:1520,backgroundColor:'orange',fontFamily: 'Fredoke One',textAlign:'center', position: 'absolute',height: 20, top:660}}>Scroll down</Card>
            
            <div class= 'cards'>
            <h1 style={{ fontFamily:'Cinzel',borderRadius: 60,fontSize: 40 ,position:'absolute',top:680, right: 600}}>Sign Up Now!</h1>
            <div class='card-1'>
            
        <Card className={classes.root} style={{borderRadius:30}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="life.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  component="h2" style={{fontSize: 26,fontFamily: 'Fredoka One'}}>
            LIFE TIME MEMBERSHIP
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}}>
          Coming Soon!
        </Button>
        <Button size="big" color="primary" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div class='card-2'>
    <Card className={classes.root} style={{borderRadius:30}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="summer.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  component="h2" style={{fontSize: 26, fontFamily: 'Fredoka One'}}>
          SUMMER PROGRAM
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary" href ="/registration" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}}>
         Sign Up!        
        </Button>
        <Button size="big" color="primary" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div class='card-3'>
    <Card className={classes.root} style={{borderRadius:30}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="donate.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="h2" style={{fontSize: 26,fontFamily: 'Fredoka One'}} >
            DONATE NOW!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}} href='/tnc'>
          PROCEED
        </Button>
        <Button size="big" color="primary" style={{backgroundColor:'#0000ad',fontFamily: 'Fredoka One' , color: 'white', borderRadius: 40}}>
          Learn More
        </Button>
      </CardActions>
    </Card>

    
    </div>

    </div>
    <div class="signupvideo">
      <h1>
        
      </h1>

      </div>

        </div>
    )

}

export default LandingPage