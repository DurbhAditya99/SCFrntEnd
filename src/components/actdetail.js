import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchUser,singleActivity } from './redux/ActionCreator';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});




const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

function ActDetail(props){
    
  const classes = useStyles();
  const {id} = props.match.params
  const [users,setUsers] = useState()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.users);
  const act = useSelector((state) => state.activity.activity)
  const actuser = useSelector((state)=> state.users.users)
  const addUser =() =>{
 
    fetch(`http://127.0.0.1:8000/api/detail/${id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : `Token ${token}`								
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data['user'])
      } )

  }

  
  
  useEffect(() =>{

    dispatch(fetchUser(token,userID))
    dispatch(singleActivity(token,id))

    dispatch(fetchUser(token,act['founder']))

    }, [])

   
  
  return(

         	  <Grid container>
               <Card style={{height: 30 , marginTop: 100, backgroundColor: '#ffffff' }}>
               <Grid item xs ={12}>
                 <Typography component='h1' style={{textAlign: 'center', fontSize: 20 , fontFamily: 'Cinzel'}}> 
                   Account Credits: {user['account_balance']}
                   </Typography>
                 </Grid>  
               </Card>
            <Grid item xs={12}>
            <Card variant='outlined'  style={{marginTop: 100, backgroundColor: '#ffffff' }}>
               <CardContent style={{}}>
               <Grid container spacing={3}>
              
            <Grid item xs={12}>
            <Typography component='h1' style={{fontSize: 40 , fontFamily: 'Raleway'}}> 
            {act['founder_name']}'s {act['title']}
            </Typography>
            </Grid> 
            <Grid item xs={12}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['description']}
            label='Description'
            multiline
            >
            </TextField>
            </Grid> 
            <Grid item xs={12}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['what_donating']}
            label= 'What are you donating'
            multiline
            >
              
            </TextField>
            </Grid> 
            <Grid item xs={12}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['where_donating']}
            label='Where?'
            multiline
            style={{width: 800}}
            >
            </TextField>
            </Grid> 
            <Grid item xs={2}>
            <TextField
            name='service'
            defaultValue = 'None'
            value = {act['service_type']}
            variant= 'outlined'
            label='Service Type: '
            >
            </TextField>
            </Grid> 
            <Grid item xs={2}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['start_date']}
            label='Start Date: '
            >
            </TextField>
            </Grid> 
            <Grid item xs={2}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['end_date']}
            label='Expiry Date: '          
            >
            </TextField>
            </Grid> 
            <Grid item xs={3}>
            <TextField
            name='Description'
            defaultValue = 'None'
            value = {act['category']}
            label='Category: '          
            >
            </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
            name='vol_req'
            defaultValue = 'None'
            value = {act['vol_req']}
            variant= 'outlined'
            label='Minimum Volunteers Required: '          
            >
            </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
            name='mother_vol'
            defaultValue = 'None'
            value = {act['mother_vol']}
            variant= 'outlined'
            label='Minimum Mother Volunteers Required: '          
            >
            </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
            name='current'
            defaultValue = 'None'
            value = {act['user'] ? act['user'].length : 1}
            variant= 'outlined'
            label='Current number of volunteers'          
            >
            </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
            name='founder'
            defaultValue = 'None'
            value = {act['founder_name']}
            variant= 'outlined'
            label='Founder'          
            >
            </TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField
            name='members'
            defaultValue = 'None'
            value = {act['members']}
            variant= 'outlined'
            label='Members'          
            >
            </TextField>
            </Grid>
            <Grid item xs= {12}>
            <Button onClick={addUser} style={{position: 'relative'}}>I want to join</Button>  
            </Grid> 
            <Grid item xs= {12}>
            <Typography>{users}</Typography>  
            </Grid>
     
            </Grid>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
  
   
      
        
       )  


}



export default ActDetail