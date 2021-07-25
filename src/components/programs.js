import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React from "react";
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
      width: 270,
      height: 348,
      
    },
    media: {
      height: 170,
    },
  });



export default function Programs(){

 
  const classes = useStyles();    
  const [state, setState] = React.useState(false)
  const [val,setVal] = React.useState(false)

  const handleChange=(e)=>{
    
    setState(!state)
    setVal(!val)

    console.log(e.target)
  }
  

    return(
        <Grid container spacing={2} style={{textAlign:'center',marginTop:200, fontSize:20}}>
            <Grid item xs={1}></Grid>
            <Grid item xs = {4} md={3}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          
          image="life.jpeg"
        />
        <CardContent style={{height: 90}}>
          <Typography  component="h2" style={{fontSize: 20,fontFamily: 'Raleway'}}>
          SPEAK EASY ENGLISH
          </Typography>
          <br></br>
          Make an impact by clocking in unlimited community hours just for Rs. 999/- 
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}}>
          Coming Soon!
        </Button>
       
      </CardActions>
    </Card>
   
    </Grid>
    <Grid item xs = {4} md={3}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          
          image="life.jpeg"
        />
        <CardContent style={{height: 90}}>
          <Typography  component="h2" style={{fontSize: 20,fontFamily: 'Raleway'}}>
          LET'S JOIN HANDS
          </Typography>
          <br></br>
          Make an impact by clocking in unlimited community hours just for Rs. 999/- 
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}}>
          Coming Soon!
        </Button>
       
      </CardActions>
    </Card>
   
    </Grid>
    <Grid item xs = {4} md={3}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          
          image="life.jpeg"
        />
        <CardContent style={{height: 90}}>
          <Typography  component="h2" style={{fontSize: 20,fontFamily: 'Raleway'}}>
          AUDIO BOOKS FUND
          </Typography>
          <br></br>
          Make an impact by clocking in unlimited community hours just for Rs. 999/- 
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}}>
          Coming Soon!
        </Button>
       
      </CardActions>
    </Card>
   
    </Grid>
    <Grid item xs={12}></Grid>
    <Grid item xs={1}></Grid>
    <Grid item xs = {4} md={3}>
    <Card className={classes.root} style={{borderRadius:30, marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          
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
        
        <Button size="big" color="primary" style={{fontFamily: 'Raleway' , color: '#ff8800', borderRadius: 40}}>
          Coming Soon!
        </Button>
       
      </CardActions>
    </Card>
   
    </Grid>
    <Grid item xs={1}></Grid>
    
        </Grid>
    )
}

