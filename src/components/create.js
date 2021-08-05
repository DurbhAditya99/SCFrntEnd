import React, { useEffect, useState, useRef } from 'react';
import Switch from '@material-ui/core/Switch';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/ActionCreator';
import { addActivity } from './redux/ActionCreator';
import InfoIcon from '@material-ui/icons/Info';
import Alert from '@material-ui/lab/Alert';
import { Card } from '@material-ui/core';
import {getCurrentDate} from './current'
import programs from './resources/programs';
const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

// Registration Part


const useStyles = makeStyles({
	paper:{
		fontFamily:'Raleway',
		fontSize: '18',
		borderRadius: 30
	}
  });

export default function CreatePost() {

	const [file, setFiles] = useState(null)
    const inputRef = useRef()
	const [actid, setAct] = useState(null)
	const classes = useStyles();
	const dispatch = useDispatch();
	
	let date = new Date()
	const user = useSelector((state) => state.users.users)
	const [val, setVal] = React.useState({
		checkedA: false,
		checkedB: false,
	  });
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

const handleDateChange = (date) => {
		setSelectedDate(date);
	  };
	const history = useHistory();
	const initialFormData = Object.freeze({
        service_type : "R",
        title : "",
        description : "",
        start_date  : "",
        est_hours : "",
        vol_req : "0",
		mother_vol: '0',
		what_donating: 'x',
		where_donating: 'x',
        category: '',
		end_date: '2022-12-12'
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
		console.log(file)
		dispatch(fetchUser(token,userID))
	},[])
	

	const checkValid =(data) =>{

		let valid = true;
		
		Object.values(data).forEach( val=> {
			val.length <1 && (valid=false);
			})
		return valid;


	}

	const handleVol =(e) =>{
		setVal({ ...val, [e.target.name]: e.target.checked });
	}
	const handleChange = (e) => {

		const { name , value } = e.target
        
		
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
				end_date : formData.end_date,
                est_hours : formData.est_hours,
                vol_req : formData.vol_req ? formData.vol_req : 0,
				category : formData.category,
				mother_vol: formData.mother_vol ? formData.mother_vol : 0,
				is_active : formData.checkedA,
				founder_name: user['first_name'],
				
			}
		dispatch(addActivity(token,body,setAct))
		history.push('/')
		console.log(actid)

			console.log(date)
			console.log('success')
			programs.push({title: `${formData.title}` })
		}
		 else{
			setErrors('Please check if you’ve entered all the required information.')
			console.log(getCurrentDate())
		}
	}
	
	


	return (
		
		<div class = 'register' style={{marginTop:100}}>
			<Grid container>
			<Grid item md={2}></Grid>
		<Grid item md={8} xs={12}>
		<Card style={{borderRadius:20}}>
		<br></br>	<br></br>
		<Container component="main" maxWidth='md' xs={4}>
		
			<CssBaseline />    
			<div className={classes.paper}>
					<Grid container spacing={3} className={classes.Typography}  >
					<Grid item xs={12} style={{textAlign: 'left'}}>
					<Typography component="h1" style={{borderRadius:20,fontSize: 26,fontFamily:'Raleway'}}>
                   <strong>CREATE YOUR PROGRAM HERE</strong> 
					</Typography>
					<Typography component="h1" style={{borderRadius:20,fontSize: 22,marginTop:10,fontFamily:'Raleway'}}>
                    All fields are required*
					</Typography>
					</Grid>
					
                   

					<Grid item xs={12} md={6} >
						<Typography className={classes.paper}><strong>What do you want to call your program?</strong></Typography>
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
						<Grid item md={8} xs={12}> 
						<Typography className={classes.paper} style={{fontFamily: 'Raleway'}}><strong>Describe your social initiative.</strong></Typography>
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
						<Grid item xs={12} style={{fontSize:20}}>
						<Switch
        				checked={val.checkedB}
       					onChange={handleVol}
        				name="checkedB"
        				inputProps={{ 'aria-label': 'secondary checkbox' }}
      					/> Does your program include donations?
						</Grid>
						{ val.checkedB ? 
						<Grid style={{marginLeft:2}} container spacing={4}>
						<Grid item md={6} xs={12}> 
						<Typography className={classes.paper}><strong>What are you donating? </strong></Typography>
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
						<Grid item md={6} xs={12}>
						<Typography className={classes.paper}><strong>Where are you donating?</strong> </Typography> 
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

						</Grid></Grid> : ' ' }
						
						<Grid item xs={12} style={{fontSize:20}}>
						<Switch
        				checked={val.checkedA}
       					onChange={handleVol}
        				name="checkedA"
        				inputProps={{ 'aria-label': 'secondary checkbox' }}
      					/> Does your program require volunteers?
						</Grid>
						{ val.checkedA ? 
						<Grid container spacing={3} style={{marginLeft:2}} >
						<Grid item xs={11} style={{textAlign: 'left',borderRadius:20, fontSize: 20,fontFamily:'Raleway'}}>
						<strong>Number of Volunteers required: </strong>
							<br></br>
						</Grid>
						
						<Grid item xs ={12} md={3}>
						<Typography className={classes.paper}><strong>Minimum Child Volunteers :</strong></Typography> 
							<TextField
								variant="outlined"
								required
								type="number"
								size = 'small'
								name="vol_req"
								id="vol_req"
								defaultValue = '0'
								onChange={handleChange}
								inputProps ={{ min: 0}}
							/>
							</Grid>
							<Grid item xs={3}></Grid>
						<Grid item xs ={12} md={3}>
						<Typography className={classes.paper}><strong>Minimum Adult Volunteers :</strong></Typography> 
							<TextField
								variant="outlined"
								required
								size = 'small'
								name="mother_vol"
								defaultValue = '0'
								type="number"
								id="mother_vol"
								inputProps ={{ min: 0}}
								onChange={handleChange}
							/>
						</Grid> </Grid> : ' '}
						<Grid item xs ={12} md={6}>
						<Grid item xs={12}></Grid>
						<Typography className={classes.paper}><strong>Start date of the program</strong></Typography>
					

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
						inputProps={{min: getCurrentDate()}}
              				/>
							  
						</Grid>
						<Grid item xs ={12} md={6}>
						<Typography className={classes.paper}><strong>Estimated end date of the program (optional)</strong></Typography>
					

           				 <TextField
            			id="end_date"
           				name = "end_date"
            			type="date"
						size = 'small'
						variant = 'outlined'	
          				onChange={handleChange}	
           				InputLabelProps={{
            			 shrink: true,
         					 }}
						inputProps={{min: getCurrentDate()}}
              				/>
							  
						</Grid>
						
						<Grid item xs ={12} md={6}>
						<Typography className={classes.paper}><strong>Estimated hours</strong></Typography> 
							<TextField
								variant="outlined"
								required	
								id="est_hours"
								size = 'small'
								name="est_hours"
								type= 'number'
								onChange={handleChange}
								inputProps ={{ min: 0}}
							/>
                        </Grid>
						<Grid item md={3}>
					<Typography className={classes.paper}><strong>Service Type</strong></Typography> 
					
					
					
					<Select
                    labelId="demo-simple-select-label"
                    id="category"
                    name= 'category'
					style ={{width: 140}}
                    onChange={handleChange}
                     >
                    <MenuItem value={"R"}>Request</MenuItem>
					<MenuItem value={"O"}>Offer </MenuItem>
				
                    </Select>
					</Grid>
                   
					 
					
						
					<Grid item md={3}>
					<Typography className={classes.paper}><strong>Category</strong></Typography> 
					
					
					
					<Select
                    labelId="demo-simple-select-label"
                    id="category"
                    name= 'category'
					style ={{width: 140}}
                    onChange={handleChange}
                     >
                    <MenuItem value={"Life Cred$"}>Life Cred$ <div><InfoIcon style={{color:'#ff8800', height:20}} /></div></MenuItem>
					<MenuItem value={"Social Cred$"}>Social Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
					<MenuItem value={"Learning Cred$"}>Learning Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
         			<MenuItem value={"Human Cred$"}>Human Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
					<MenuItem value={"Food Cred$"}>Food Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
					<MenuItem value={"Kid Cred$"}>Kid Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
					<MenuItem value={"Water Cred$"}>Water Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
					<MenuItem value={"Green Cred$"}>Green Cred$ <InfoIcon style={{color:'#ff8800', height:20}} /></MenuItem>
                    </Select>
					</Grid>
					
				
					
					{errors.length >0 ?<Alert severity='error' style={{fontFamily: 'Raleway'}}> {errors}</Alert>  : null }	

                      <Grid item xs ={12} md={12}>
						  <br></br>
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
		<br></br>	<br></br>	<br></br>	<br></br>
		</Card>
		</Grid>
		</Grid>
		</div>
		
	);
}


