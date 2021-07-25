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
  
  const user = useSelector((state) => state.users.users)
  const {id} = props.match.params
  const [acts,setAct] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles();
  const [pic,setPic] = useState(pict)
  const [open, setOpen] = React.useState(false);
  const [val,setVal] = useState(false)
  

    useEffect(() =>{
      dispatch(fetchUser(token,id))
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
            <Grid container spacing={1} style={{backgroundColor:'#ffffff',zIndex: 10, borderRadius:30 , marginTop: 80,fontSize: 20,fontFamily:'Raleway'}}> 
                 <Grid item md={1}></Grid>
                <Grid item md={6}>               
                
                 <Card style={{borderRadius:30, zIndex:10}}>        
                   <Grid container spacing={1}>     
              
            
                <Grid item md={1}></Grid>
                <Grid item xs={12} md={4}><img src={user['profile_pic']} style={{height:200, width:200, borderRadius:160}}></img></Grid>
                <Grid item xs ={8} md={3}> 
                
                <h1 style={{fontSize:40,fontFamily:'Raleway',textAlign:'left'}}>{user['first_name']}&nbsp;
            {user['last_name']}</h1> 
                </Grid>
                <Grid item md={12} xs={1}></Grid>
               
              <Grid item xs={12}></Grid>
              <Grid item md={1}></Grid>
              <Grid container spacing={1} xs={12} md={12} style={{outlineStyle:'solid',textAlign:'center',backgroundColor: '#ffffff',borderRadius:20, fontSize: 40}}>
        
        <Grid item xs={3} md={4}><Typography>Clocked hours</Typography></Grid>
        <Grid item xs={3} md={4}><Typography>Credits</Typography></Grid>
        <Grid item xs={3} md={4}><Typography>Debits</Typography></Grid>
       
        <Grid item xs={12}></Grid>
        
        
        
        <Grid item xs={3} md={4}>{user['clocked_hours']}</Grid>
        <Grid item xs={3} md={4} >{user['account_balance']}</Grid>
        <Grid item xs={2} md={4}>{user['debits']}</Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
       
       
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
        <Grid item xs={11}>
        <i class="material-icons">email</i>{user['email_id']}
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={11}>
        <i class="material-icons">smartphone</i>  {user['mobile_number']}
        </Grid>
        <Grid item xs={12}></Grid>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            </Grid>

            </Card>
            </Grid>
          <Grid item md={4}>
          <Card>
           <Grid container>
          {acts ? acts.map((info)=>{

            return(
                <Card>
                  {info.title}
                </Card>
            )


          }) : '' }
           </Grid>
          </Card>
          </Grid>                                
          </Grid>
          
          
    
   
   
      
        
       )  


}



export default ProfileViewPage