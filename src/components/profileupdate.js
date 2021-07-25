import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, Typography } from '@material-ui/core';
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
  const [image , setImage] = useState(null)


  useEffect(() =>{
	//   const userID =this.props.match.params.userID;
	dispatch(fetchUser(token,userID))
	   }, [])
	   
	const handleImageChange = (e) => {
		setImage(e.target.files[0])
	  };
 
 
  const handleSubmit =() =>{
    console.log(formData)

	const body = {
		first_name : formData.first_name ? formData.first_name : user['first_name'],
		last_name: formData.last_name ? formData.last_name : user['last_name'],	
		mobile_number: formData.mobile_number ? formData.mobile_number : user['mobile_number'],
		about: formData.about ? formData.about : user['about']
	}

  dispatch(updateUser(token,userID,body))
	console.log(image)
  let formdata =new FormData()
  formdata.append("file", image)
  formdata.append("upload_preset", "kd7lwvo8")
  formdata.append("cloud_name",'dw2d6mnyl')
  console.log(formdata)
   fetch('https://api.cloudinary.com/v1_1/dw2d6mnyl/image/upload',{
    method: 'POST',
    body: formdata,
  })
  .then(res => res.json())
  .then((data) => {
    fetch(`https://socialcredsbnd.herokuapp.com/api/user/pic/${userID}`,{
    method: 'PUT',
    headers:{
      'Content-type' : 'application/json',
      'Authorization' : `Token ${token}`
    },
    body: JSON.stringify({
          'profile_pic' : data['url']
    })
    })
})
	
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
  
	
	<Grid container xs={12} >
	<Grid item xs ={12}> 
                <h1 style={{fontSize:40,fontFamily:'Raleway', textAlign:'center'}}>Edit Profile</h1> 
                </Grid>
	<Grid item xs={3}></Grid>
	<Grid item  xs={12} md={6} style={{}}>
	<Card variant='outlined' style={{ marginTop: 20 }}>
	<CardActionArea>
    <CardMedia
	className={classes.media}
	image="summer.jpeg"
	style={{width: 10, marginLeft: 350, borderRadius: 180 }}
	/>
	</CardActionArea>
		 <CardContent style={{}}>
	
		 <Grid container spacing={3} >
	  <Grid item xs={6} md={4}>
		  <Typography>First Name</Typography>
		<TextField variant='outlined' name ='first_name' placeholder={user['first_name']} onChange={handleChange}> </TextField> 
	   </Grid>
	   <Grid item xs={6} md ={4}>
	   <Typography>Last Name</Typography>
	   <TextField  name ='last_name' variant='outlined' placeholder={user['last_name']}  onChange={handleChange}> </TextField> 
	   
	   </Grid>
	   <Grid item xs={6} md={3}>
	   <Typography>Mobile Number</Typography>
	   <TextField  name ='mobile_number' variant='outlined' placeholder={user['mobile_number']} onChange={handleChange}> </TextField>
	   </Grid>
	   <Grid item xs={6} md={3}>
	   <TextField label='Date of birth:' id='date' id='read-only' defaultValue='None' value={user['dob']} variant='outlined' > </TextField>
	   </Grid>
	   <Grid item xs={12} md={4}>
	   <TextField label='Email ID:' value={user['email_id']} defaultValue='nONE' variant='outlined'   style={{ fontSize: 100}} /> 
	   </Grid>
		<Grid item xs={12}>
		<Typography>About me: </Typography>
		<TextField name='about' multiline placeholder={user['about']} variant='outlined' fullWidth onChange={handleChange}> </TextField>
		</Grid>
		<Grid item xs={12}>
            <Typography>Upload Profile Pic</Typography>
            <input 
                type="file" id="image" accept="image/png, image/jpeg, image/jpg" multiple
                onChange={handleImageChange}  
            />
            </Grid>
		
		<Grid item xs={12}>
	 	<Button onClick={handleSubmit} style={{backgroundColor: 'orange'}}>SUBMIT CHANGES</Button>
		 </Grid>
		 </Grid>
		</CardContent>
		</Card>
		</Grid>
		</Grid>

	

      
        
       )  


}


