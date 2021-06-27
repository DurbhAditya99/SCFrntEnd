import React, { Component, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getActivity } from './redux/ActionCreator';
import { fetchUser } from './redux/ActionCreator';

const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

function Dashboard(){
    
    const user = useSelector((state) => state.users.users);
    const act = useSelector((state) => state.activity.activity);
    const [data,setData] = useState('')
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getActivity(token))
      dispatch(fetchUser(token,userID))
      console.log(user)
    },[])

    const changeURL = (id) =>{
        console.log(id)
        window.location.href=`/actdetail/${id}`
    }

    return(      
              <div>
                <h1 style={{textAlign:'center', fontSize: 80, fontFamily: 'Cinzel', color: '#ff033e', backgroundColor: 'ff'}}>Welcome {user['first_name']}</h1>
                <Card style={{wordSpacing: 4,textAlign: 'center ',position: 'absolute',top:190, width:1500, fontFamily: 'Fredoka One',height: 25}}> Your Credit balance: {user['account_balance']} ||| Total Clocked hours: {user['clocked_hours']}</Card>
                  <div class='dash'>
                 <h1 style={{color: '#ff033e'}}>Current Programs </h1>
               <Grid container spacing={4}>
                
              {act ? act.map((info)=>{
              
              return(
                 <Grid item xs={4}>
                <div class='card'>
               <Card variant='outlined' style={{borderRadius:10 , marginLeft: 20, marginRight: 20,outlineColor: 'black'}} >
               <CardContent style={{ backgroundColor: 'cornsilk'}}>
               <Typography component='h1'style={{fontSize: 20}}>
               {info.title}
               </Typography>
               <br></br>
               <Typography component='h5' style={{color: 'orange'}}>
                Service type: {info.service_type == 'O'? 'Offer': 'Request' } 
               </Typography>
               <Typography component='h5'  style={{color: 'orange'}}>
               {info.act_status}
               </Typography>
               <Typography component='h3' style={{color: 'orange'}}>
                Start Date: {info.start_date} 
               </Typography>
               <Typography component='h3'  style={{color: 'orange'}}>
                Volunteers Required: {info.vol_req} 
               </Typography>
               <Button onClick={()=>{changeURL(info.id)}}><Typography  >See more</Typography></Button>
               </CardContent>
               </Card>
               </div>
               </Grid>  

                )
              }) : ''}
              </Grid>
         

                </div>
             
              </div>
    )
}


export default Dashboard
