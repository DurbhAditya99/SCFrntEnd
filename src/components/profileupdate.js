import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { updateUser } from './redux/ActionCreator'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/ActionCreator';



const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '170%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing (3, 0, 2),
	},
}));



const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

export default function  ProfileUpdatePage(){
    

  const classes = useStyles();

  const initialFormData = Object.freeze({
        about:'',
    	first_name: '',
   	 	last_name: '',
   		mobile_number: ''
	});

  const [formData, updateFormData] = useState(initialFormData);
  const dispatch = useDispatch()
  const [users,setUser] = useState({})
  const user = useSelector((state) => state.users.users)


  useEffect(() =>{
	//   const userID =this.props.match.params.userID;
	dispatch(fetchUser(token,userID))
	   }, [])
	   
   
 
 
  const handleSubmit =() =>{
    console.log(formData)

	const body = {
		first_name : formData.first_name ? formData.first_name : user['first_name'],
		last_name: formData.last_name ? formData.last_name : user['last_name'],	
		mobile_number: formData.mobile_number ? formData.mobile_number : user['mobile_number'],
		about: formData.about ? formData.about : user['about']
	}

	dispatch(updateUser(token,userID,body))
	
	window.location.href = '/profile'
  }

  	const handleChange = (e) => {
      console.log(e.target.name)
      updateFormData({
        ...formData,
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
      });
  
    }
  
  return(
  
	<div class='profile'>
	
   <div class='details'>

	<Card variant='outlined' style={{width:1000 , marginTop: 100, marginLeft: 200 }}>
	<CardActionArea style={{width: 1000}}>
    <CardMedia
	className={classes.media}
	image="blank.png"
	
	style={{width: 300, marginLeft: 350, borderRadius: 180, height: 300 }}
	/>
	</CardActionArea>
		 <CardContent style={{}}>
	
		 <Grid container spacing={3} >
	  <Grid item xs={3}>
		<TextField label='First Name' variant='outlined' name ='first_name' placeholder={user['first_name']} onChange={handleChange}> </TextField> 
	   </Grid>
	   <Grid item xs={3}>
	   <TextField label='Last Name'   name ='last_name' variant='outlined' placeholder={user['last_name']}  onChange={handleChange}> </TextField> 
	   
	   </Grid>
	   <Grid item xs={3}>
	   <TextField label='Mobile Number'   name ='mobile_number' variant='outlined' placeholder={user['mobile_number']} onChange={handleChange}> </TextField>
	   </Grid>
	   <Grid item xs={3}>
	   <TextField label='Date of birth:' id='date' id='read-only' defaultValue='None' value={user['dob']} variant='outlined' > </TextField>
	   </Grid>
	   <Grid item xs={4}>
	   <TextField label='Email ID: ' value={user['email_id']} defaultValue='nONE' variant='outlined'   style={{width: 300 , fontSize: 100}} /> 
	   </Grid>
	   <Grid item xs={3}>
	   <TextField label='Credit Balance: ' value={user['account_balance']} defaultValue='nONE' variant='outlined' > </TextField>
		</Grid>
		<Grid item xs={12}>
		<TextField label='About Me:' name='about' multiline placeholder={user['about']} variant='outlined' style={{width: 600 }}  onChange={handleChange}> </TextField>
		</Grid>
		
		<Grid item xs={12}>
	 	<Button onClick={handleSubmit} style={{backgroundColor: 'orange'}}>SUBMIT CHANGES</Button>
		 </Grid>
		 </Grid>
		</CardContent>
		</Card>
   
	  </div>
	

</div>
      
        
       )  


}


