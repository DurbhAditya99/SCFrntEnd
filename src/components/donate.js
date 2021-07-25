import { Button, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import React from "react";

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
        <Grid container xs={12} spacing={1} style={{textAlign:'center', marginTop: 120, zIndex:20, backgroundColor:''}}>
          
      
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
            <Typography> Program you are donating for    </Typography>
        <TextField
            type='text  '
            name="size"
            variant= 'outlined'
            value =  {title ? title : 'General Donation'}
            >
            
            </TextField>
            </Grid>
           
      
            
        
     
        <Grid item xs={12}>
            <Typography style={{fontSize: 20, fontFamily: 'Raleway'}}>Please read the terms and conditions attached below!</Typography>
        </Grid>
      <Grid item xs={12}>
      <a href='https://drive.google.com/file/d/1tlqy-e1LNcCIEORd-E0xFAeK_HzoWZLL/view?usp=sharing'>Terms and conditions</a>
       </Grid>
       <Grid item xs={12}>
       <a href='https://drive.google.com/file/d/10bdl0PbZbmSakvYJzm4Eh6yGMauPE17V/view?usp=sharing'>Fees and Refund Policy</a>
       </Grid>
       <Grid item xs ={12}>
       <a href='https://drive.google.com/file/d/1N3p9Wr2ksD61Cm1r9vjR0JCKGLRaLGSQ/view?usp=sharing'>Privacy Policy</a>
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
   label="By clicking proceed, you agree to our terms of use, fees and refund policy and that you have read and accept the privacy policy"
 />
       </Grid>
       <Grid item xs={12}>
         {val ?  <Button href='/tncs'style={{backgroundColor: '#ff8800', color: 'white'}} >Continue</Button> : ''}
        
       </Grid>
      
        </Grid>
       
     
   
    )
}

