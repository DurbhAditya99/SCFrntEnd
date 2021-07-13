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
import { fetchUser } from './redux/ActionCreator';
import pics from './resources/pics'
import { MenuItem } from '@material-ui/core';

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

function ProfilePage(){
  
  const user = useSelector((state) => state.users.users)
  const [acts,setAct] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles();
  const pic = 'blank.png'
  

    useEffect(() =>{
      dispatch(fetchUser(token,userID))
      
      fetch(`http://127.0.0.1:8000/api/user/act`,{
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
    
  
   
  
  return(
     
        <div class='profile'>

        
            <Grid container spacing={1} style={{marginTop: 100}}> 
              <Grid item md={2}></Grid>
              <Grid item xs={12} md={8}>
             <Card variant='outlined' style={{ float:'center'}}>
              <Grid container>
                <Grid item xs ={7}> 
                <h1 style={{fontSize:40,fontFamily:'Raleway', textAlign:'right'}}>My Profile</h1> 
                </Grid>
                <Grid item xs ={5}> 
              <Button href='/profile/edit' style={{float : 'right'}}><EditIcon /></Button>
              </Grid>
              <Grid item xs={1} md={4}></Grid>
              <Grid item xs={6} md={8}>
              <CardMedia
          className={classes.media}
          image={pic}
          style={{width:275, borderRadius: 180, height: 275 }}>
        </CardMedia>
        </Grid>
        </Grid>
  
               <CardContent style={{}}>
          
               <Grid container spacing={3} >
            <Grid item xs={6} md={3}>
              <TextField label='First Name'  defaultValue='nONE' value={user['first_name']} id='read-only'> </TextField> 
             </Grid>
             <Grid item  xs={6} md={3}>
             <TextField label='Last Name' defaultValue='nONE'  value={user['last_name']} id='read-only' multiline> </TextField> 
             
             </Grid>
             <Grid item  xs={6} md={3}>
             <TextField label='Mobile Number' defaultValue='nONE'  value={user['mobile_number']} id='read-only'> </TextField>
            
             </Grid>
             <Grid item  xs={6} md={3}>
             <TextField label='Date of birth:' id='date' defaultValue='nONE'  value={user['dob']} id='read-only'> </TextField>
             </Grid>
             <Grid item  xs={12} md={3}>
             <TextField label='Email ID: ' defaultValue='nONE'  value={user['email_id']}id='read-only' style={{width: 300 , fontSize: 100}}> </TextField>
            
             </Grid>
             <Grid item  xs={6} md={3}>
             <TextField label='Credit Balance: ' defaultValue='nONE'  value={user['account_balance']} id='read-only'> </TextField>
            
              </Grid>
              <Grid item  xs={6} md={3}>
             <TextField label='User ID: ' defaultValue='nONE'  value={user['id']} id='read-only'> </TextField>
            
              </Grid>
              <Grid item xs={12}>
              <TextField label='About Me:' multiline defaultValue='nONE'  value={user['about']} id='read-only'  > </TextField>
              </Grid>
              </Grid>
              </CardContent>
              </Card>
              </Grid>
              </Grid>
  
          
          
    
    </div>
   
      
        
       )  


}



export default ProfilePage