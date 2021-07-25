import React, { Component, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getActivity } from './redux/ActionCreator';
import { fetchUser } from './redux/ActionCreator';
import { TextField, Typography } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Backdrop } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'moment';

const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

const catcolor = {
  'Water Cred$': 'blue',
  'Human Cred$' : 'brown',
  'Kid Cred$' : '#ffc61a',
  'Social Cred$' : '#ff7b00',
  'Green Cred$' : '	#25D366',
  'Life Cred$' : 'red'
 
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
 
  } 
}) )

function Dashboard(){
    
    const user = useSelector((state) => state.users.users);
    const act = useSelector((state) => state.activity.activity);
    const [data,setData] = useState('')
    const [acts,setAct] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles();
    const [state,setState] = useState(true)
    const [id,setID] = useState(0)
    const [select,setSelect] = useState({
      btn1: '#F9A26C',
      btn2: '#ff8800'
                    })
    const [open, setOpen] = React.useState(false);
    const [yes,setYes] = useState(false)
    

    const MyPrograms = ()=> {
          setSelect({
            btn1 : '#F9A26C',
            btn2: '#ff8800'   })
          setState(true)
    }
    const ExPrograms = ()=> {
        setSelect({
          btn1 : '#ff8800',
          btn2: '#F9A26C'   })
         setState(false)
    }


    

    useEffect(()=>{
     
      dispatch(getActivity(token))
      dispatch(fetchUser(token,userID))
     
      fetch(`https://socialcredsbnd.herokuapp.com/api/user/act`,{
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
      console.log(user)

    },[])

    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const changeURL = (infoid) =>{
        console.log(id)
        window.location.href=`/actdetail/${infoid}`
    }
    
  

    return(    
             
              <div style={{ marginTop: 100, fontFamily: 'Raleway' }}>
            
              
              <Grid container spacing={1} >
              <Grid item xs={1}></Grid>
              <Grid item xs={4} md={5}>
              <Typography style={{fontSize: 26, textAlign: 'left', fontFamily: 'Raleway'}}> Welcome back, <strong>{user['first_name']}</strong></Typography> 
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4} md={3} >
              <Typography style={{fontSize: 18,textAlign: 'center',fontFamily: 'Raleway'}}> Making a difference since </Typography> 
              <Typography style={{fontSize: 18,textAlign: 'center',fontFamily: 'Raleway'}}>{user['created_at'] ? Moment(user['created_at']).format('d MMM YYYY') : ''} </Typography> 
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3} md={4} >
              <Typography style={{fontSize: 18,textAlign: 'left', fontFamily: 'Raleway'}}> Time Credit$:  {user['account_balance']}</Typography> 
              </Grid>
              <Grid item xs={3} md={2}></Grid>
              <Grid item xs={4} md={3}>
              <Typography style={{fontSize: 18,textAlign: 'right',  fontFamily: 'Raleway'}}><i class="material-icons">location_on</i>Bangalore</Typography> 
              </Grid>
              <Grid item xs={1} md={2}></Grid>
              
            

              <Grid item md={12} xs={12} >
              <Card style={{ backgroundColor: '#ff8800',marginTop: 30,height: 80}}>
                <CardContent style={{textAlign: 'center', verticalAlign: 'center'}}>
                <Button style={{width:120, height: 56,color:'#ffffff',fontSize: 16, backgroundColor:  `${select.btn1}`, borderRadius: 100, fontFamily: 'Raleway'}} onClick={MyPrograms}>My Programs</Button> 
                <Button style={{width:120, height: 56,color:'#ffffff', fontSize: 16, backgroundColor: `${select.btn2}`, marginLeft:19, borderRadius: 50, fontFamily: 'Raleway' }} onClick={ExPrograms}>Explore Programs</Button>
                </CardContent>
              </Card>
              </Grid>

              <Grid item xs={12} style={{textAlign:'center'}}>
                <TextField size="small" variant= 'outlined' label='Search' disabled style={{marginTop: 20}}></TextField>
                &nbsp;&nbsp;
                <TextField size="small" variant= 'outlined' label='Filter' disabled style={{marginTop: 20}}></TextField>
              </Grid>
              
              { !state ?
              <Grid container  maxwidth='xs'>
              {act ? act.map((info)=>{
               
              return(
                <Grid container style={{}}>
                  <Grid item md={3}></Grid>
                  
              <Grid item xs={12} md={6}>
               <Card variant='outlined' style={{ borderRadius:30 ,marginTop: 20 ,marginLeft: 20, marginRight: 20,outlineColor: 'black'}} >
               <CardActionArea onClick={()=>{changeURL(info.id)}}>
                
               <CardContent style={{fontFamily: 'Raleway'}}>
               <Grid container>
              <Grid item xs={7} md={9} >
               <Typography component='h1'style={{fontSize:20}}>
               {info.title}  
               </Typography>
              
               </Grid>
               
               <Grid item xs={5} md={3} style={{ borderRadius:30}} >
               <Typography component='h1'style={{fontSize: 16,fontFamily:'Raleway',textAlign:'center', color:'white', backgroundColor:`${catcolor[`${info.category}`]}`, borderRadius: 30}}>
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
                Start Date: { Moment.locale(info.start_date)} 
               </Typography>
               </Grid>
           
               
               </Grid>
               
               </CardContent>
               
               </CardActionArea>
              
               </Card>
             
               </Grid>
               
              </Grid>
            

                )} 
               
              ) : 
              
              <Grid item xs={12}>
              Nothing to see here
              </Grid>
              
              }
             </Grid>
              :   


              <Grid container maxwidth='xs'>
              {acts ? acts.map((info)=>{
              
              return(
                <Grid container style={{}}>
                  <Grid item md={3}></Grid>
                <Grid item xs={12} md={6}>
                
                
                <div class='card'>
               <Card variant='outlined' style={{ borderRadius:30 ,marginTop: 20 ,marginLeft: 20, marginRight: 20,outlineColor: 'black'}} >
               
               <CardActionArea onClick={()=>{changeURL(info.id)}}>
               
               <CardContent style={{fontFamily: 'Raleway' }}>
               <Grid container>
              <Grid item xs={7} md={9} >
               <Typography component='h1'style={{fontSize:20}}>
               {info.title}  
               </Typography>
              
               </Grid>
               
               <Grid item xs={5} md={3} style={{ borderRadius:30}} >
               <Typography component='h1'style={{fontSize: 16,fontFamily:'Raleway',textAlign:'center', color:'white', backgroundColor:`${catcolor[`${info.category}`]}`, borderRadius: 30}}>
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
               <Grid item xs={11}>
               <Typography component='h5' style={{color: 'black',fontFamily: 'Raleway'}}>
               {info.founder == userID ? <Typography><strong>Founder</strong></Typography> :  <Typography>Member</Typography> } 
               </Typography>
               </Grid>
              <Grid item xs={1}>
              
              </Grid>
               
               </Grid>
               </CardContent>
               
               </CardActionArea>
            
               </Card>
               <Grid item xs={12}></Grid>
               {info.founder == userID ?
               <Grid item xs={12} md={4} style={{display: 'inline-flex' , float:'right'}}>
             
             
               </Grid> : <Grid item xs={12}></Grid> }  
            
               </div>
               </Grid>
               </Grid>    )
              }) : <Grid item ><h1>Nothing to see here'</h1></Grid>}
              </Grid>
                            } 

                          
               
              </Grid>
              </div>
              
            
    )
}


export default Dashboard
