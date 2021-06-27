import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from "@material-ui/core";
import React from "react";


export default function TNCPage(){

  
  const [state, setState] = React.useState(false)
  const [val,setVal] = React.useState(false)

  const handleChange=(e)=>{
    
    setState(!state)
    setVal(!val)

    console.log(e.target)
  }
  

    return(
        <Grid container spacing={2} style={{textAlign:'center', marginTop: 200, fontSize:20}}>
             <Grid item xs={12}>
                 <Typography style={{fontSize: 30}}>Please read the terms and conditions attached below!</Typography>
             </Grid>
           <Grid item xs={12}>
           <a href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:e310af10-87c5-4d86-86c4-b09fafc0e835'>Terms and conditions</a>
            </Grid>
            <Grid item xs={12}>
            <a href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:26812c15-bde2-44a2-a2dc-0b5896cb7d73'>Fees and Refund Policy</a>
            </Grid>
            <Grid item xs ={12}>
            <a href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:530bde28-0762-47db-b1ea-854a9b24eff3'>Privacy Policy</a>
            </Grid>
            <Grid item xs ={12}>
            <FormControlLabel
        control={
          <Checkbox
            name = 'checked'
            defaultChecked= {state}
            onChange={handleChange}
            color="primary"
          />
        }
        label="By clicking proceed, you agree to our terms of use, fees and refund policy and that you have read and accept the privacy policy"
      />
            </Grid>
            <Grid item xs={12}>
              {val ?  <Button style={{backgroundColor: '#ff033e', color: 'white'}} href='/donate'>Continue</Button> : ''}
             
            </Grid>
        </Grid>
    )
}

