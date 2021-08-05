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
import { TextFieldsRounded } from '@material-ui/icons';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
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


function ProfilePage(){
  
  const user = useSelector((state) => state.users.users)
  const [acts,setAct] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles();
  const [pic,setPic] = useState(pict)
  const [open, setOpen] = React.useState(false);
  const [val,setVal] = useState(false)
  

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
            <Grid container spacing={1} style={{backgroundColor:'#ffffff',zIndex: 10, borderRadius:30 ,fontSize: 20,fontFamily:'Raleway'}}> 
                 <Grid item md={1}></Grid>
                <Grid item md={10 }>               
                
                 <Card style={{borderRadius:30, zIndex:10}}>        
                   <Grid container spacing={1}>     
              
            
                <Grid item md={1}></Grid>
                <Grid item xs ={12} md={3} style={{textAlign:'center'}}> 
                <h1 style={{fontSize:40,fontFamily:'Raleway',textAlign:'center'}}>My Profile<Button href='/profile/edit'><EditIcon /></Button></h1> 
                </Grid>
                <Grid item md={3} xs={1}></Grid>
                
             <Grid item xs={12}></Grid>
              <Grid item md={1}></Grid>
              <Grid item xs={12} md={2} style={{textAlign:'center'}}>
              <img class='responsive' style={{ borderRadius: 30,borderRadius:100, width:200,height:200}}  src={user['profile_pic']} />
             
             
              <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <Grid container style={{backgroundColor: '#ffffff', color:'black', textAlign:'center'}}>
                  <Grid item xs={12}>
                    <Typography style={{fontSize:40}}>Pick your avatar</Typography>
                   
                  </Grid>
                 
              {pics.map((option)=> (
                <Grid item xs={4} style={{float:'center'}}>
                  
								<MenuItem onClick={() =>{ setPic(option.value)
                                          setVal(true)
                                                                }} key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
               
                </Grid>
							  ))}
              
                </Grid>
              </Backdrop>

                
               
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1} style={{height: 144,fontFamily:'Raleway', fontSize: 20,textAlign:'left'}}>
          
            <Grid item md={1}></Grid>
             <Grid container md={12} style={{textAlign:'center'}} spacing={1}>                                                   
            <Grid item xs={12} style={{fontSize: 24}}>
              <strong>
            {user['first_name']}&nbsp;
            {user['last_name']}
            </strong>
            </Grid>
            <Grid item xs={12} style={{}}> 
            User ID: #{user['id']}
            
            </Grid>
           
            <Grid item xs={12}>
        <i   class="material-icons">email</i>{user['email_id']}
        </Grid>
        <Grid item xs={12}>
        <Typography> <i class="material-icons">smartphone</i>  {user['mobile_number']}</Typography>
        </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid container spacing={1} xs={12} md={12} style={{outlineStyle:'solid' ,textAlign:'center',backgroundColor: '#ffffff',borderRadius:20, fontSize: 40}}>
        
        <Grid item xs={4} md={4} ><Typography>Clocked hours</Typography></Grid>
        <Grid item xs={4} md={4}><Typography>Credits</Typography></Grid>
        <Grid item xs={4} md={4}><Typography>Debits</Typography></Grid>
       
        <Grid item xs={12}></Grid>
        
        
      
        <Grid item xs={4} md={4}>{user['clocked_hours']}</Grid>
        <Grid item xs={4} md={4} >{user['account_balance']}</Grid>
        <Grid item xs={4} md={4}>{user['debits']}</Grid>
        </Grid>
       
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid><Grid item xs={12}></Grid> <Grid item xs={12}></Grid>
        <Grid container maxWidth='md' style={{textAlign:'left'}}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={6} style={{fontSize:30}}><strong>About</strong></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={6}>
         <Typography style={{fontFamily:'Raleway'}}> {user['about']} </Typography>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <br></br>
        <Grid item xs={1} md={1}></Grid>
       
        <Grid item xs={12}></Grid>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            </Grid>

            </Card>
            </Grid>
            
                                                      
          </Grid>
          
          
    
   
   
      
        
       )  


}



export default ProfilePage