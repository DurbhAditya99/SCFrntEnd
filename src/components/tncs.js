import { useEffect ,useState} from "react"
import { Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Backdrop, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    media:{
      
    }
  }));
  


const TNCPage = (props)=>{
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
      };
    const handleToggle = () => {
        setOpen(!open);
      };

    return(
        
        <Grid container style={{ marginTop:150,fontFamily: 'Raleway'}}>
           <Grid item xs={12} style={{textAlign:'center', fontSize:40}}> Choose a payment method </Grid>
           <Grid item xs={12}> </Grid>
           <br></br>
            <Grid item xs={3} md={4}></Grid>
            <Grid item xs={12} md={4} style={{textAlign:'center'}}>
              <Card > 
                  <CardActionArea style={{height:150}}>
                  <CardContent style={{fontFamily: 'Raleway', fontSize:30 }}>
                        RazorPay
                        <Typography>Coming soon..</Typography>
                  </CardContent>
                  </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} style={{textAlign:'center', fontSize:30}}> OR </Grid>
        
            <Grid item xs={12}> </Grid>
            <Grid item xs={3} md={4}></Grid>
            <Grid item xs={12} md={4} >
              <Card>
             
                  <CardContent style={{ fontFamily: 'Raleway', fontSize:18}}>
                  <Typography style={{ fontFamily: 'Raleway', fontSize:30, textAlign:'center'}}>  Bank details</Typography>
                  <ul class="alignMe">
                  <li><b>Account Details</b>Gift of Time Foundation</li>
  <li><b>Account No</b>50200050835960</li>
  <li><b>IFSC Code</b> HDFC0001756</li>
  <li><b>Branch Name</b>Marathahalli </li>

</ul>
                        
                    
                  </CardContent>
               
              </Card>
            </Grid>
           
           
                  <Grid item xs={12}></Grid>
             
      
          
           
        </Grid>
    )



}

export default TNCPage 