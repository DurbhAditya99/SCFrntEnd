import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import { TextField, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGuest} from './redux/ActionCreator';
import pics from './resources/pics'
import { MenuItem } from '@material-ui/core';
import { TextFieldsRounded } from '@material-ui/icons';
import { CardActionArea } from '@material-ui/core';
import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  media:{
    
  }
}));

const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')
const pict = localStorage.getItem('pic')


function ProfileViewPage(props){
  
  const nuser = useSelector((state) => state.guests.guests)
  const {id} = props.match.params
  const [acts,setAct] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles();
  const [pic,setPic] = useState(pict)
  const [open, setOpen] = React.useState(false);
  const [val,setVal] = useState(false)
  

    useEffect(() =>{
      dispatch(fetchGuest(token,id))
      fetch(`https://socialcredsbnd.herokuapp.com/api/user/act/${id}`,{
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
          "Authorization" : `Token ${token}`								
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)       
          setAct(data) 
        } )
    
    
    }, [])
    
    
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const handleChange =(e) =>{
      console.log(pic)
      localStorage.setItem('pic', pic )
      window.location.href= '/profile'
    }

  
  return(
            <Grid container spacing={1} style={{backgroundColor:'#ffffff',zIndex: 10, borderRadius:30 , marginTop: 100,fontSize: 20,fontFamily:'Raleway'}}> 
                 <Grid item md={1}></Grid>
                <Grid item md={7}>               
                
                 <Card style={{borderRadius:30, zIndex:10}}>        
                   <Grid container spacing={1}>     
              
            
                <Grid item md={1}></Grid>
                <Grid item xs={12} md={4} style={{textAlign:'center'}}><img src={nuser['profile_pic']} style={{height:200, width:200, borderRadius:160}}></img></Grid>
                <Grid item xs ={12} md={3} style={{fontSize:40,fontFamily:'Raleway',textAlign:'center'}} > 
                
                {nuser['first_name']}&nbsp;
            {nuser['last_name']}
            </Grid>
                <Grid item md={12} xs={1}></Grid>
               
              <Grid item xs={12}></Grid>
              <Grid item md={1}></Grid>
              <Grid container spacing={1} xs={12} md={12} style={{outlineStyle:'solid',textAlign:'center',backgroundColor: '#ffffff',borderRadius:20, fontSize: 40}}>
        
        <Grid item xs={3} md={4}><Typography>Clocked hours</Typography></Grid>
        <Grid item xs={3} md={4}><Typography>Credits</Typography></Grid>
        <Grid item xs={3} md={4}><Typography>Debits</Typography></Grid>
       
        <Grid item xs={12}></Grid>
        
        
        
        <Grid item xs={3} md={4}>{nuser['clocked_hours']}</Grid>
        <Grid item xs={3} md={4} >{nuser['account_balance']}</Grid>
        <Grid item xs={2} md={4}>{nuser['debits']}</Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
       
       
        <Grid container maxWidth='md' style={{textAlign:'left'}}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={6} style={{fontSize:30}}><strong>About</strong></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={6}>
         <Typography style={{fontFamily:'Raleway'}}> {nuser['about']} </Typography>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <br></br>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={11}>
        <i class="material-icons">email</i>{nuser['email_id']}
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={11}>
        <i class="material-icons">smartphone</i>  {nuser['mobile_number']}
        </Grid>
        <Grid item xs={12}></Grid>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            </Grid>

            </Card>
            </Grid>
            <Grid item md={0.5}></Grid>
          <Grid item md={3}>
            <Typography style={{textAlign:'center',fontFamily:'Raleway', fontSize:30}}>{nuser['first_name']}'s programs</Typography>
          <Card>
           <Grid container>
          {acts ? acts.map((info)=>{

            return(
              <Grid container style={{}}>
           
              
          <Grid item xs={12} md={12}>
           <Card variant='outlined' style={{ borderRadius:30 ,marginTop: 20 ,marginLeft: 20,marginBottom:20, marginRight: 20,outlineColor: 'black'}} >
           <CardActionArea >
            
           <CardContent style={{fontFamily: 'Raleway'}}>
           <Grid container>
          <Grid item xs={7} md={9} >
           <Typography component='h1'style={{fontSize:20}}>
           {info.title}  
           </Typography>
          
           </Grid>
           
           <Grid item xs={5} md={3} style={{ borderRadius:30}} >
           <Typography component='h1'style={{fontSize: 16,fontFamily:'Raleway',textAlign:'center', color:'white', borderRadius: 30}}>
           {info.category}
           </Typography>
           </Grid>
           <Grid item xs={12}>
           <br></br>
           </Grid>
           <Grid item xs={12}>
           <Typography component='h5' style={{color: 'black', fontFamily: 'Raleway'}}> 
            Service type: {info.service_type == 'O'? 'Offer': 'Request' } 
           </Typography>  
           </Grid>
           <Grid item xs={12}>
           <Typography component='h5'  style={{color: 'black',fontFamily: 'Raleway'}}>
            Description: {info.description} 
           </Typography>
           </Grid>
           <Grid item xs={12}>
           <Typography component='h5'  style={{color: 'black',fontFamily: 'Raleway'}}>
           {info.act_status}
           </Typography>
           </Grid>
           <Grid item xs={12}>
           <Typography component='h5' style={{color: 'black',fontFamily: 'Raleway'}}>
            Start Date: {Moment(info.start_date).format('DD MMMM YYYY')} 
           </Typography>
           </Grid>
       
           
           </Grid>
           
           </CardContent>
           
           </CardActionArea>
          
           </Card>
         
           </Grid>
           
          </Grid>
            )


          }) : '' }
           </Grid>
          </Card>
          </Grid>                                
          </Grid>
          
          
    
   
   
      
        
       )  


}



export default ProfileViewPage