import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Backdrop, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchUser,singleActivity } from './redux/ActionCreator';
import { useHistory } from 'react-router';
import ActivitySignUp from './actsignup';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
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

function ActDetail(props){
  
  const history = useHistory()
  const classes = useStyles();
  const {id} = props.match.params
  const [users,setUsers] = useState()
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.users);
  const act = useSelector((state) => state.activity.activity)
  const actuser = useSelector((state)=> state.users.users)

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const changeU =(id) =>{
    window.location.href= `/actedit/${id}`
  }
  const addUser =() =>{
    
    fetch(`https://socialcredsbnd.herokuapp.com/api/adduser/${id}`,{
      method: 'GET',
      headers: {
        "Authorization" : `Token ${token}`								
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      } )

     handleToggle()


  }

  const donate = () =>{

      history.push({
        pathname: '/donate',
        title: act['title'] 
      })
      }
  


  const profile = (id) =>{
    if(userID!=id){
      history.push(`/profile/${id}`)
    }
    else{
      history.push(`/profile`)
    }
  }


  useEffect(() =>{

    dispatch(fetchUser(token,userID))
    dispatch(singleActivity(token,id))

    dispatch(fetchUser(token,act['founder']))
  
    }, [])

   
  
  return(

         	  <Grid container>
               <Grid item xs={12}>
               <Card style={{height: 30 , marginTop: 20, backgroundColor: '#ffffff', textAlign:'center' }}>
                 
                 
                 <Grid container>
              
               <Grid item xs ={12}>
                 <Typography component='h1' style={{textAlign: 'center', fontSize: 20 , fontFamily: 'Cinzel'}}> 
                   Account Credits: {user['account_balance']}
                   </Typography>
                 </Grid>  
                 </Grid>
               </Card>
               </Grid>
               <Grid item xs={12}></Grid>
               <Grid item md={2}></Grid>

            <Grid item xs={12} md={8} >
           
            <Card variant='outlined'  style={{marginTop: 20, backgroundColor: '#ffffff', zIndex: 10, borderRadius:30 }}>
               <CardContent style={{}}>
                 <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
            <Grid item xs={12}  style={{fontFamily:'Raleway'}}>
            <Typography component='h1' style={{fontSize: 35 , fontFamily: 'Raleway'}}> 
            {act['founder_name']}'s {act['title']} 
            </Typography>
            <Button style={{backgroundColor:'#ff8800',color:'#ffffff', borderRadius:30}} onClick={donate} >Donate</Button>
            { act['user'] ?  ( act['user'].includes(parseInt(userID)) ? ( act['founder']==userID ? '' : <Button>Request for credits</Button>) : <Button onClick={addUser} style={{backgroundColor:'#ff8800', color:'#ffffff', borderRadius:30}}>Join program</Button> ) : '' }  
            {act['founder']==userID ? <Button style={{zIndex:15}} onClick={()=>{changeU(act['id'])}}><EditIcon style={{zIndex:10}}></EditIcon></Button> : ''}
            </Grid>
            <Grid item xs={12}>
              <Typography style={{fontFamily: 'Raleway'}}><strong>{act['founder_name']}'s plan</strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            >
              {act['description']}
            </Typography>
            </Grid>           
            <Grid item xs={12}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong>What {act['founder_name']} is donating</strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            >
              {act['what_donating']}
            </Typography>
            </Grid> 
            <Grid item xs={12}>
            <Typography  style={{fontFamily: 'Raleway'}}> <strong> Where is the program taking place? </strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            >
              {act['where_donating']}
            </Typography>
            </Grid> 
            <Grid item xs={4} md={6}>
            <Typography> <strong> Start Date </strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            >
              {Moment(act['start_date']).format('DD MMM YYYY')}
            </Typography>
            </Grid> 
         
            <Grid item xs={4} md={6}>
            <Typography> <strong> Category </strong>    </Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            >
              {act['category']}
            </Typography>
          
            </Grid>
            
            </Grid>
            </Grid>
            
            
            <Grid item md={6}>
            <img class='responsive' style={{ borderRadius: 30, height: 400}}  src={act['image']} />
            </Grid>
            
            <Grid item xs={12}>Volunteer info</Grid>
            <Grid item xs={6} md={3} style={{}}>
            <TextField
            name='vol_req'
            defaultValue = 'None'
            value = {act['vol_req']}
            variant= 'outlined'
            label='Minimum Child Volunteers: '          
            >
            </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
            <TextField
            name='mother_vol'
            defaultValue = 'None'
            value = {act['mother_vol']}
            variant= 'outlined'
            label='Minimum Parent Volunteers: '          
            >
            </TextField>
            </Grid>
            <Grid item xs={12} md={3}>
            <TextField
            name='current'
            defaultValue = 'None'
            value = {act['user'] ? act['user'].length : 1}
            variant= 'outlined'
            label='Current number of volunteers'          
            >
            </TextField>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={6} md={3}>
            <Typography>Founder</Typography>
            <Button onClick={() =>{profile(act['founder'])}}> {act['founder_name']} </Button>
            </Grid>
            <Grid item xs={6} md={3}>
            <TextField
            name='members'
            defaultValue = 'None'
            value = {act['user']}
            variant= 'outlined'
            label='Members'          
            >
            </TextField>
            </Grid>

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <Grid container style={{backgroundColor: '#ffffff', color:'black', textAlign:'center', borderRadius: 30, height: 300}}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <Typography style={{fontSize:40, fontFamily:'Raleway'}}>Successfully joined the program! </Typography>
                    <Typography>Contact info of the founder</Typography>
                    <Button href='/dashboard'> Back to dashboard</Button>
                  </Grid>
                  </Grid>
            </Backdrop>
           

            
            </Grid>

            </CardContent>
            </Card>
            </Grid>
            </Grid>
  
   
      
        
       )  


}



export default ActDetail