import { Button, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function DonatePage(props){
    const [state, setState] = React.useState(false)
    const [val,setVal] = React.useState(false)
    
    const { title } = props.location
    const handleChange=(e)=>{
      
      setState(!state)
      setVal(!val)
  
      console.log(e.target)
    }

    return(
        <Grid container xs={12} spacing={1} style={{textAlign:'center', marginTop: 100, zIndex:20, backgroundColor:''}}>
          
      
            <Grid item xs ={12}>
        <Typography style={{fontSize:30, fontFamily: 'Raleway'}}>Donate generously to help us build India's largest time bank</Typography>
        </Grid>
        <Grid item xs ={12}>
        <Typography style={{fontSize:30,fontFamily: 'Raleway'}}>Your donation qualifies for 80G tax rebate </Typography>
        </Grid> 
        <Grid item xs ={12}>
            <TextField
            variant= 'outlined'
            label='Donor Name'>
                
            </TextField>
            <TextField
            variant= 'outlined'
            label='Donor Email ID'
            >
            </TextField>
        
        
        </Grid>
        <Grid item xs ={12}>
       
        </Grid>
        <Grid item xs ={12} >
        <Typography>  How much would you like to donate?   </Typography>
        
        
        <TextField
            type='number'
            name="size"
            variant= 'outlined'
            defaultValue = '2000'
            inputProps ={{min: 0, step: 500}}>
            
            </TextField>
            </Grid>
          
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
            <Typography> Program you are donating for    </Typography>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item xs={12} md={4}>
            <Autocomplete
      id="combo-box-demo"
      options={ [ {title:'General Donation'}, { title:'Internship'}  ] }
      getOptionLabel={(option) => option.title}
      
      renderInput={(params) => <TextField {...params}  label="Enter Program title" variant="outlined" value='Internship'  />}
    />
</Grid>
        

            
        
     
        <Grid item xs={12}>
            <Typography style={{fontSize: 20, fontFamily: 'Raleway'}}>Please read the terms and conditions attached below!</Typography>
        </Grid>
      <Grid item xs={12}>
      <a href='https://drive.google.com/file/d/1tlqy-e1LNcCIEORd-E0xFAeK_HzoWZLL/view?usp=sharing' target='_blank' rel='noopener noreferrer'> Terms and conditions</a>
       </Grid>
       <Grid item xs={12}>
       <a href='https://drive.google.com/file/d/18dAOpUYSc70o0ws22OYHRrvRMA24V1vy/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Fees and Refund Policy</a>
       </Grid>
       <Grid item xs ={12}>
       <a href='https://drive.google.com/file/d/1N3p9Wr2ksD61Cm1r9vjR0JCKGLRaLGSQ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>
       </Grid>
       <Grid item xs={12}></Grid>
       <Grid item md={2}></Grid>
       <Grid item xs ={12}>
       <FormControlLabel
   control={
     <Checkbox
       name = 'checked'
       defaultChecked= {state}
       onChange={handleChange}
       color="primary"
      style={{fontFamily:'Raleway'}}
     />
   }
   label="By clicking proceed, you agree to our terms of use, fees and refund policy and that you have read and accepted the privacy policy"
 />
       </Grid>
       <Grid item xs={12}>
         {val ?  <Button href='/tncs'style={{backgroundColor: '#ff8800', color: 'white'}} >Continue</Button> : ''}
        
       </Grid>
      
        </Grid>
       
     
   
    )
}

