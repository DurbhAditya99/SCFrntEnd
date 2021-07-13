import React, { Component, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getActivity } from './redux/ActionCreator';
import { fetchUser } from './redux/ActionCreator';
import { toast } from 'react-toastify';
import { TextField, Typography } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';

const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

function Dashboard(){
    
    const user = useSelector((state) => state.users.users);
    const act = useSelector((state) => state.activity.activity);
    const [data,setData] = useState('')
    const [acts,setAct] = useState([])
    const dispatch = useDispatch()
    const [state,setState] = useState(true)
    const [select,setSelect] = useState({
      btn1: '#F9A26C',
      btn2: '#ff8800'
                    })
    const count = true
    

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

    const changeURL = (id) =>{
        console.log(id)
        window.location.href=`/actdetail/${id}`
    }

    return(    
             
              <div style={{ marginTop: 100, fontFamily: 'Raleway' }}>
            
              
              <Grid container spacing={1} >
              <Grid item xs={1}></Grid>
              <Grid item xs={4}>
              <Typography style={{fontSize: 26, textAlign: 'left', fontFamily: 'Raleway'}}> Welcome back, <strong>{user['first_name']}</strong></Typography> 
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}  >
              <Typography style={{fontSize: 18,textAlign: 'right',fontFamily: 'Raleway'}}> Making a difference since 4th June, 2021</Typography> 
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}  >
              <Typography style={{fontSize: 18,textAlign: 'left', fontFamily: 'Raleway'}}>Credit balance:  {user['account_balance']}</Typography> 
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={4} md={3}>
              <Typography style={{fontSize: 18,textAlign: 'right',  fontFamily: 'Raleway'}}><i class="material-icons">location_on</i>Bangalore</Typography> 
              </Grid>
              <Grid item xs={1} md={2}></Grid>
              
            

              <Grid item md={12} xs={12} >
              <Card style={{ backgroundColor: '#ff8800',marginTop: 30,height: 80}}>
                <CardContent style={{textAlign: 'center', verticalAlign: 'center'}}>
                <Button style={{width:140, height: 56,color:'#ffffff',fontSize: 16, backgroundColor:  `${select.btn1}`, borderRadius: 100, fontFamily: 'Raleway'}} onClick={MyPrograms}>My Programs</Button> 
                <Button style={{width:140, height: 56,color:'#ffffff', fontSize: 16, backgroundColor: `${select.btn2}`, marginLeft:19, borderRadius: 50, fontFamily: 'Raleway' }} onClick={ExPrograms}>Explore Programs</Button>
                </CardContent>
              </Card>
              </Grid>

              <Grid item xs={12}>
                <TextField size="small" variant= 'outlined' label='Search' style={{marginLeft: 910,marginTop: 20}}></TextField>
              </Grid>
              
              { !state ?
              <Grid container  maxwidth='xs'>
              {act ? act.map((info)=>{
               
              return(

              <Grid item xs={12} md={6}>
               <Card variant='outlined' style={{ borderRadius:30 ,marginTop: 20 ,height: 200,marginLeft: 20, marginRight: 20,outlineColor: 'black'}} >
               <CardActionArea onClick={()=>{changeURL(info.id)}}>
                
               <CardContent style={{fontFamily: 'Raleway',height: 240}}>
               <Typography component='h1'style={{fontSize: 20}}>
               {info.title}
               </Typography>
               <br></br>
               <Typography component='h5' style={{color: 'black', fontFamily: 'Raleway'}}> 
                Service type: {info.service_type == 'O'? 'Offer': 'Request' } 
               </Typography>  
               
               <Typography component='h5' style={{color: 'black',fontFamily: 'Raleway'}}>
                <Grid item xs={2}>
                Description: 
                {info.description}
                </Grid>
               </Typography>
              
               <Typography component='h5'  style={{color: 'black',fontFamily: 'Raleway'}}>
               {info.act_status}
               </Typography>
               <Typography component='h5' style={{color: 'black',fontFamily: 'Raleway'}}>
                Start Date: {info.start_date}   
               </Typography>
                
               </CardContent>
               </CardActionArea>
               </Card>
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
                <Grid item xs={12} md={6}>
                <div class='card'>
               <Card variant='outlined' style={{ borderRadius:30 ,marginTop: 20 ,height: 200,marginLeft: 20, marginRight: 20,outlineColor: 'black'}} >
               <CardActionArea onClick={()=>{changeURL(info.id)}}>
               <CardContent style={{fontFamily: 'Raleway',height: 240, width:880 }}>
               <Typography component='h1'style={{fontSize: 20}}>
               {info.title}
               </Typography>
               <br></br>
               <Typography component='h5' style={{color: 'black', fontFamily: 'Raleway'}}> 
                Service type: {info.service_type == 'O'? 'Offer': 'Request' } 
               </Typography>  
               <Typography component='h5'  style={{color: 'black',fontFamily: 'Raleway'}}>
                Description: {info.description} 
               </Typography>
               <Typography component='h5'  style={{color: 'black',fontFamily: 'Raleway'}}>
               {info.act_status}
               </Typography>
               <Typography component='h5' style={{color: 'black',fontFamily: 'Raleway'}}>
                Start Date: {info.start_date} 
               </Typography>
              
               </CardContent>
               </CardActionArea>
               </Card>
               </div>
               </Grid>    )
              }) : <Grid item ><h1>Nothing to see here'</h1></Grid>}
              </Grid>
                            } 


              <Grid item xs={12}>
                <Button href='/create'></Button>
              </Grid>
              </Grid>
              </div>
              
            
    )
}


export default Dashboard
