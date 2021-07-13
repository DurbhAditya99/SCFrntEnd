import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { registerUser } from './redux/ActionCreator';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import Checkbox from '@material-ui/core/Checkbox';
import 'react-toastify/dist/ReactToastify.css';
import { MenuItem } from '@material-ui/core';
import months from './resources/months'
import dates from './resources/dates'
import years from './resources/years'

toast.configure()



const useStyles = makeStyles((theme) => ({
	avatar: {
		margin: theme.spacing(1),
		height: 50,
		backgroundColor: '#ff8800',	
		width: 50,
		float: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 20,
		zIndex: 5,
		
	},
	submit: {
		margin: theme.spacing (3, 0, 2),
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		float: 'center'
	},
}));



// Registration Part

export default function SignUp() {
	
	const dispatch = useDispatch();
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: false,
	  });

	const history = useHistory();
	const initialFormData = Object.freeze({
		email_id: '',
		password: '',
		confirm_password: '',
    	dob: " ",
    	first_name: '',
   	 	last_name: '',
   		mobile_number: '',
		dob_d : '',
		dob_m : '',
		dob_y : '',
	});

	const iformErrors = {
		first_name:'',
		last_name:'',
		password: '',
		dob: '',
		confirm_password: '',
		mobile_number: ''
	}

	const [formData, updateFormData] = useState(initialFormData);
	const [formErrors, updateFormErrors] = useState(iformErrors);
	const [errors,setErrors] = useState('')
	const [disp,setDisp] = useState(false)

	const formValid = (formError) => {
		let valid = true;
		console.log('fomrerror',formError)
		Object.values(formError).forEach( val=> {
			val.length >0 && (valid=false);
			})
		return valid;
}

	

	const handleChange = (e) => {
		console.log(state.checkedA)
		const { name , value } = e.target
		setState({ ...state, [e.target.name]: e.target.checked });
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});

	
		let formErr = formErrors;
		switch(name) {
			case 'first_name':
				formErr.first_name = (value.length <3 && value.length >0) ? "Please enter your first name" : "";
				break;
			case 'last_name':
				formErr.last_name = (value.length <3 && value.length >0) ? "Please enter your last name" : "";
				break;
			case 'password':
				formErr.password= (value.length<6 && value.length > 0) ? "Minimum 6 characters" : "";
				break;
			case 'confirm_password':
				formErr.confirm_password = ( value == (formData.password)) ?  "" : "Both passwords don't match";
				break; 
			case 'mobile_number':
				formErr.mobile_number = (value.length < 10 || value.length > 10 )   ?  "Mobile Number should be 10 digits" : "";
				break; 
		}
		
		updateFormErrors(formErr)
		console.log(formErrors)	
	
	};



	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors('')	
		

		console.log(formData.dob_d + '-' + formData.dob_m + '-' + formData.dob_y)

		if (formValid(formErrors)){
			console.log('valid!')
			
			if(formData.dob===''){
				console.log('wrong dob')
				return
			}

		const body = {
			first_name : formData.first_name,
			last_name: formData.last_name,	
			dob: formData.dob_y + '-' + formData.dob_m + '-' + formData.dob_d,
			mobile_number: formData.mobile_number,
			email_id: formData.email_id,	
			password: formData.password,
			above_age: state.checkedA,
		}
		
		
		dispatch(registerUser(body))
		
	
	}else {
		console.log('invalid!')
		setErrors('Please check whether information entered is correct.')
		return
	}
	}
	
	

	const classes = useStyles();

	return(

		<div style={{zIndex:5}}>
		
		<Container component="main" maxWidth='md'>
			<CssBaseline />
			<div className={classes.paper}>
			<Avatar className={classes.avatar}></Avatar>

			<form className={classes.form} noValidate>
					<Grid container spacing={1} >
					<Grid item md={3}></Grid>
					<Grid item xs={12} md={3} style={{textAlign: 'center'}}>
					
							<TextField
								variant="outlined"
								required	
								name="first_name"
								label= "First Name"
								type="FirstName"
								id="first_name"
								onChange={handleChange}
							/>

						</Grid>
						<Grid item xs={12} md={3} style={{textAlign: 'center'}}> 
							<TextField
								variant="outlined"
								required
								name="last_name"
								label= "Last Name"
								type="LastName"
								id="LastName"
								onChange={handleChange}
							/>
							
						</Grid>
						<Grid item md={3}></Grid>
						<Grid item xs={1} md={3}></Grid>
						<Grid item xs={3} md={2} style={{textAlign: 'center'}}>
           				 <TextField
            			id="dob_d"
           				name='dob_d'
            			label="Date of birth"
            			select
						size = 'small'
						placeholder = 'Enter date'
						variant = 'outlined'
						style={{width:90, height: 40  ,marginTop:12}}
          				onChange={handleChange}
         			 	className={classes.textField}
           				InputLabelProps={{
            			 shrink: true,
         					 }}
              				>
								   {dates.map((option)=> (	
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>

							  ))}
							  </TextField>
						</Grid>
						<Grid item xs={3} md={2} style={{textAlign: 'center'}}>
           				 <TextField
            			id="dob_m"
           				name='dob_m'
            			label="Month of birth"
            			select	
						size = 'small'
						variant = 'outlined'
						style={{width:90, height: 40  ,marginTop: 12}}
          				onChange={handleChange}
         			 	className={classes.textField}
           				InputLabelProps={{
            			 shrink: true,
         					 }}
         
              				>
							  {months.map((option)=> (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>

							  ))}
							</TextField>  
						</Grid>
						<Grid item xs={3} md={2} style={{textAlign: 'center'}}>
           				 <TextField
            			id="dob_y"
           				name="dob_y"
            			label="Year of Birth"
            			select
						size = 'small'
						variant = 'outlined'
						style={{width:90, height: 40  ,marginTop: 12}}
          				 onChange={handleChange}
         			 	 className={classes.textField}
           				InputLabelProps={{
            			 shrink: true,
         					 }}
         
              				>
							  {years.map((option)=> (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>

							  ))}
								</TextField>
						</Grid>
						<Grid item xs={1} md={3}></Grid>
						<Grid item xs={1} md={3}></Grid>	
						<Grid item xs={10} md={6}>
					    <Typography style={{marginTop:8,marginBottom:8, fontFamily:'Raleway'}}>Are you above 18?(if below 18 please provide parents' email id and mobile number)</Typography>	
						</Grid>	
						<Grid item xs={1} md={3}></Grid>	
						<Grid item md={3}></Grid>
						<Grid item xs={12} md={3} style={{textAlign: 'center'}}>
							<TextField
								variant="outlined"
								required	
								
								id="email_id"
								label="Email Address"
								name="email_id"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
						    
						<Grid item xs={12} md={3}  style={{textAlign: 'center'}}> 
							<TextField
								variant="outlined"
								required
								
								name="mobile_number"
								label= "Mobile Number(+91): "
								type="number"
								id="MobileNo"
								onChange={handleChange}
							/>
								{formErrors.mobile_number.length>0 && (
								<Grid item xs={12} style={{textAlign: 'center', marginTop: 16}}><span className=" ">{formErrors.mobile_number}</span></Grid>	
							)}
							
							</Grid>
						
							<Grid item md={3}></Grid>			
							<Grid item md={3}></Grid>
						<Grid item xs={12} md={3} style={{textAlign: 'center'}}> 
							<TextField
								variant="outlined"
								required
								style={{height: 40 ,marginTop: 16}}
								name="password"
								label="Password"
								type="password"
								id="password"
								minLength = "6"
								autoComplete="current-password"
								onChange={handleChange}
							/>
							{formErrors.password.length>0 && (
								<Grid item style={{textAlign: 'center', marginTop: 16}}><span className=" ">{formErrors.password}</span></Grid>	
							)}
						</Grid>
						<Grid item xs={12} md={3} style={{textAlign:'center'}}>	
							<TextField
								variant="outlined"
								required
								style={{ height: 40 ,marginTop: 16}}
								name="confirm_password"
								label="Confirm Password"
								type="password"
								id="confirm_password"
								autoComplete="current-password"
								onChange={handleChange}
							/>
							{formErrors.confirm_password.length>0 && (
								<Grid item xs={12} style={{textAlign: 'center', marginTop: 16}}><span className=" ">{formErrors.confirm_password}</span></Grid>	
							)}
						</Grid>
						<Grid item md={3}></Grid>
						<Grid item xs={12}>
							<br></br>
						</Grid>

						<Grid item xs={3}></Grid>
						<Grid item xs={6} style={{textAlign: 'center'}}>
						{errors.length >0 ?<Alert severity='error'> {errors}</Alert>  : null }		
						</Grid>
						<Grid item xs={3}></Grid>
						<Grid item xs={2}></Grid>
						<Grid item xs={8} style={{textAlign: 'center'}}>	
						<FormControlLabel
       					 control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
       					 label="I agree to the terms and conditions and privacy policy"
						 style={{ marginTop: 8}}
    					  />
						</Grid>
						<Grid item xs={2}></Grid>
					
					<Grid xs={3} md={4}></Grid>
					<Grid item xs={6} md={4} style={{textAlign: 'center'}}>
					{ state.checkedB ? 
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
						style ={{ height:40 }}
					>
						Sign Up
					</Button> : 	
					<Button
						type="submit"
						disabled
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
						style ={{ height:40 }}
					>
						Sign Up
					</Button> }
					</Grid>
					<Grid xs={3} md={4}></Grid>
					<Grid md={2}></Grid>
					{disp ? <h4>Please check your email to activate your account</h4> : ''}
					
						<Grid item xs={12} md={8} style={{textAlign: 'center'}}>
							<Link href="/login" variant="body2" style ={{marginTop: 31}}>
								Already have an account? Sign in
							</Link>
						
					</Grid>
					<Grid md={2}></Grid>
					</Grid>
				</form>
				</div>
		</Container>
		</div>
	);
}


