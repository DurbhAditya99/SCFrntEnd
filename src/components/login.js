import React from 'react'
import {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/ActionCreator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Particles from 'react-particles-js';
import { InputLabel } from '@material-ui/core';
toast.configure()

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 20,
		height: 553,	
		zIndex: 5,
		
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#ff8800',
		height:theme.spacing(12),
		width: theme.spacing(12),
		marginTop: theme.spacing(4),
		
	
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	  },
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
}));

function LoginPage(){

    const history = useHistory();
	const dispatch = useDispatch()
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };
    const initialFormData = Object.freeze({
      email_id: '',
      password: '',
    });

	const iformErrors = {
		email_id: '',
		password: ''
	}
    
    const [formData, updateFormData] = useState(initialFormData);
	const [formErrors, updateFormErrors] = useState(iformErrors);
	const [errors,setErrors] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);

	  const body = {
		username: formData.email_id,	
		password: formData.password,  
	  }
	  
	  dispatch(loginUser(body))
	  
      
    };

  const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});

		
	};
    
  const classes = useStyles();
    return(
		<div   >
	
      <Container component="main" maxWidth="xs" style={{zIndex:10}}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>

				{errors.length >0 ?<Alert severity='error'> {errors}</Alert>  : null }
				<form className={classes.form} noValidate>
					<Grid container spacing={3} style={{zIndex:5}}>
						<Grid item xs={12} style={{marginLeft:20, marginRight:20}}>
						<InputLabel style={{textAlign:'left'}}>Email ID</InputLabel>
							<Input
								variant="outlined"
								required
								fullWidth
								style={{height: 40}}
								id="email_id"
								label="Email Address"
								name="email_id"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
						
						
						<Grid item xs={12} style={{display:'inline-block',marginLeft:20, marginRight:20}}>
						<InputLabel style={{textAlign:'left'}}>Password</InputLabel>
								<Input
								
								required
								fullWidth
								style={{height: 40}}
								name="password"
								label="Password"
								type={passwordShown ?  "text" : "password" }
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
							<Button onClick={togglePassword}><span class="material-icons">
									visibility
										</span></Button>
									</InputAdornment>
								}
							/>
								
						
							
							
						</Grid>
						<br></br>
						<Grid item xs={12} style={{textAlign: 'center'}}>
					<Button
						type="submit"
						variant="contained"
						style={{backgroundColor:"#ff8800", color:'white',height: 40, marginTop: 16}}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					</Grid>
					<Grid item xs={12} style={{textAlign: 'center'}}>
					<Button
						type="submit"
						style={{height: 20, width: 177, marginTop: 16, fontSize: 15}}
						color="primary"
						disabled
					>
						Forgot Password
					</Button>
					</Grid>
					<Grid item xs={12} style={{textAlign: 'center'}}>
					<Button
						type="submit"
						fullWidth
						style={{height: 23, width: 233, marginTop: 48, fontSize: 11}}
						color="#ff8800"
						href= '/signup'
					>
						Don't have an account? Sign up
					</Button>
					</Grid>
          </Grid>
				</form>
			</div>
		</Container>
		
		</div>
    )

}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage