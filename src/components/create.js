import React, { useEffect, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/ActionCreator';
import { addActivity } from './redux/ActionCreator';
import colors from './resources/colors'
import Alert from '@material-ui/lab/Alert';


const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

// Registration Part


const useStyles = makeStyles({
	paper:{
		fontFamily:'Raleway'
	}
  });

export default function CreatePost() {

	const classes = useStyles();
	const dispatch = useDispatch();
	const [state, setState] = React.useState({
		checkedA: true
	  });
	const user = useSelector((state) => state.users.users)

	const history = useHistory();
	const initialFormData = Object.freeze({
        service_type : '',
        title : "",
        description : "",
        start_date  : "",
        est_hours : "",
        vol_req : "",
		mother_vol: '',
		what_donating: '',
		where_donating: '',
        category: '',
	});



	const [formData, updateFormData] = useState(initialFormData);
	const [errors, setErrors] = useState('') 

/*	const formValid = (formError) => {
		let valid = true;
		console.log('fomrerror',formError)
		Object.values(formError).forEach( val=> {
			val.length >0 && (valid=false);
			})
		return valid;
}
*/	
	useEffect(() => {
		dispatch(fetchUser(token,userID))
	},[])
	

	const checkValid =(data) =>{

		let valid = true;
		
		Object.values(data).forEach( val=> {
			val.length <1 && (valid=false);
			})
		return valid;


	}

	const handleChange = (e) => {

		const { name , value } = e.target
        setState({ ...state, [e.target.name]: e.target.checked });
		
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
		
		console.log(name ,value)
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData)
		if (checkValid(formData)){
			console.log('valid')
		const body ={
                service_type : formData.service_type,
                title : formData.title,
                description : formData.description,
				what_donating: formData.what_donating,
				where_donating: formData.where_donating,
                act_status  : formData.act_status,
                start_date  :  formData.start_date,
                est_hours : formData.est_hours,
                vol_req : formData.vol_req,
				mother_vol: formData.mother_vol,
				is_active : formData.checkedA,
				founder_name: user['first_name'],
				
			}
		dispatch(addActivity(token,body))
		console.log('success')
		} else{
			setErrors('Please check if you’ve entered all the required information.')
		}
	}
	
	


	return (
		
		<div class = 'register' style={{marginTop:120}}>
		
	
		<Container component="main" maxWidth='md' xs={4}>
		
			<CssBaseline />    
			<div className={classes.paper}>
					<Grid container spacing={3} className={classes.Typography} style={{backgroundColor: '#ffffff'}} >
					<Grid item xs={12} style={{textAlign: 'left'}}>
					<Typography component="h1" style={{borderRadius:20,fontSize: 24,fontFamily:'Raleway'}}><strong>
                    Register your program! </strong>
					</Typography>
					<Typography component="h1" style={{borderRadius:20,fontSize: 20,marginTop:10,fontFamily:'Raleway'}}>
                    All fields are required*
					</Typography>
					</Grid>
					
                   

					<Grid item xs={5} >
						<Typography className={classes.paper}>What do you want to call your program?</Typography>
							<TextField
								variant="outlined"
								name="title"
								type="title"
								id="title"
								size = 'small'
								fullWidth
								style={{ height: 40}}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={8}> 
						<Typography style={{fontFamily: 'Raleway'}}>Describe your social initiative.</Typography>
							<TextField
								variant="outlined"
								fullWidth
                                multiline
								name="description"
								type="description"
								id="description"
								
								size = 'large'
								onChange={handleChange}
							/>

						</Grid>
					
						<Grid item xs={12}> 
						<Typography className={classes.paper}>What are you donating? eg.books,clothes,money</Typography>
							<TextField
								variant="outlined"
								
                                multiline
								size = 'small'
								name="what_donating"
								type="description"
								id="what_donating"
								style={{ height: 40}}
								onChange={handleChange}
							/>

						</Grid>
						<Grid item xs={12}>
						<Typography className={classes.paper}>Where are you donating? </Typography> 
							<TextField
								variant="outlined"
                                multiline
								size = 'small'
								name="where_donating"
								type="description"
								id="where_donating"
								style={{ height: 40}}
								onChange={handleChange}
							/>

						</Grid>
						<Grid item xs ={12} md={2}>
						<Typography className={classes.paper}>Start date of the program</Typography> 
           				 <TextField
            			id="start_date"
           				name='start_date'
            			type="date"
						size = 'small'
						variant = 'outlined'
          				onChange={handleChange}
           				InputLabelProps={{
            			 shrink: true,
         					 }}
         
              				/>
							  
						</Grid>
						<Grid item xs={3}></Grid>
						<Grid item xs ={12} md={2}>
						<Typography className={classes.paper}>Estimated hours</Typography> 
							<TextField
								variant="outlined"
								required	
								id="est_hours"
								size = 'small'
								name="est_hours"
								type= 'number'
								onChange={handleChange}
							/>
                        </Grid>
						<Grid item xs={11} style={{textAlign: 'left',borderRadius:20, fontSize: 20,fontFamily:'Raleway'}}>
							Number of Volunteers required: 
						</Grid>
						<Grid item xs ={12} md={2}>
						<Typography className={classes.paper}>Minimum Child Volunteers required:</Typography> 
							<TextField
								variant="outlined"
								required
								type="number"
								size = 'small'
								name="vol_req"
								id="vol_req"
								onChange={handleChange}
								
							/>
							</Grid>
							<Grid item xs={3}></Grid>
						<Grid item xs ={12} md={2}>
						<Typography className={classes.paper}>Minimum Parent Volunteers required:</Typography> 
							<TextField
								variant="outlined"
								required
								size = 'small'
								name="mother_vol"
								
								type="number"
								id="mother_vol"
							
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}></Grid>
						<Grid item xs ={6} md={2}>
                    <InputLabel id="demo-simple-select-label">Service Type: </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="service_type"
                    name= 'service_type'
					style ={{width: 150}}
                    onChange={handleChange}
                     >
                    <MenuItem value={"O"}>Offer</MenuItem>
                    <MenuItem value={"R"}>Request</MenuItem>
                   
                    </Select>
                    </Grid>
					<Grid item xs={1}></Grid>
                    <Grid item xs={6}>
					Category Types: 
					<br></br>
					<input type="text" list="categories" label="Category Type:" id='category' name='category' onChange={handleChange} />
					<datalist id="categories">
  					<option>Earth Creds</option>
  					<option>School Creds</option>
  					<option>Charity Creds</option>
					</datalist></Grid>
				
					
					{errors.length >0 ?<Alert severity='error' style={{fontFamily: 'Raleway'}}> {errors}</Alert>  : null }	

                      <Grid item xs ={12} md={12}>
					<Button
						type="submit"
						variant="contained"
						style={{backgroundColor: "#ff8800",color:'#ffffff', borderRadius: 30, fontFamily: 'Raleway'}}
						onClick = {handleSubmit}
					>
					    Create Program
					</Button>
					</Grid>
					</Grid>
					</div>
		</Container>
		</div>
		
	);
}


