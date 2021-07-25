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
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { WhatsApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    media:{
      
    }
  }));
  


const THNKPage = (props)=>{

    return(
        <div style={{backgroundColor:'#FF957D'}}>
        <Grid container spacing={1} style={{ marginTop:165,fontFamily: 'Raleway', backgroundColor:'white'}}>
           <Grid item xs={1} md={2}></Grid>
           <Grid item md={8} style={{textAlign:'center'}}>
           <Card>
               <CardContent>
                   <Grid container spacing={1}>
                       <Grid item xs={1} md={2}></Grid>
                       <Grid item xs={12}>
                       <i style={{fontSize:58, backgroundColor:'#00D387', color:'white', borderRadius:30}} class='material-icons'>check_circle_outline</i>
                       </Grid>
               <Grid item xs={12} md={12}>
          <Typography style={{textAlign:'center',color:'#00D387',fontFamily:'Raleway', fontSize:38}}>   <strong> DONATION SUCCESSFUL </strong></Typography>
          </Grid>
          <Grid item xs={12}>
           <Typography style={{textAlign:'center', fontFamily:'Raleway', marginTop:20}}>Thank you for you contribution of <strong> ₹ XXX </strong>, you’re a lifesaver!</Typography>   
           <br></br>
       
           </Grid>
          <br></br>
           </Grid>
               </CardContent>
               <CardContent style={{backgroundColor:'#F5F5F5'}}>
                   <Grid container spacing={2}>
                       <Grid item xs={3}></Grid>
               <Grid item  xs={12} md={6} style={{textAlign:'center'}}>
           You can make an bigger difference by sharing this with you friends and family on social media as every share helps us improve our reach tremendously.
           
           </Grid>
           <br></br>
           <br></br><br></br>
           <Grid item xs={4} md={4}></Grid>
          
         
           <Grid item xs={2}>
           <FacebookShareButton 
           url='https://socialcreds.netlify.app/'
           quote={"wassup"}
           hashtag='#socialcreds #got'>
               <FacebookIcon style={{height:30}}></FacebookIcon>
           </FacebookShareButton>

           </Grid>

           <Grid item xs={2}>
               
          <WhatsappShareButton
          title='Aditya has donated 600rs '
           url='https://socialcreds.netlify.app/'
           >
              <WhatsappIcon style={{height:30}}></WhatsappIcon>
          </WhatsappShareButton>
           </Grid>
           </Grid>
           
               </CardContent>
           </Card>
           <br></br>
           We recommend you check out our monthly donation program to further increase your impact.
           </Grid>
        </Grid>
        </div>
    )



}

export default THNKPage 