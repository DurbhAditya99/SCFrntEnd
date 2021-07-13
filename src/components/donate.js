import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";


export default function DonatePage(){

    return(
        <Grid container spacing={1} style={{textAlign:'center', marginTop: 120}}>
            <Grid item xs ={12}>
        <Typography style={{fontSize:30, fontFamily: 'Raleway'}}>Donate generously</Typography>
        </Grid>
        <Grid item xs ={12}>
        <Typography style={{fontSize:30,fontFamily: 'Raleway'}}>Your donation qualifies for 80G tax rebate </Typography>
        </Grid> 
        <Grid item xs ={12}>
            <TextField
            variant= 'outlined'
            label='Donor Name'>
                
            </TextField>
        
        </Grid>
        <Grid item xs ={12}>
            <TextField
            variant= 'outlined'
            label='Donor Email ID'
            >
            </TextField>
        
        </Grid>
        <Grid item xs ={12}>
        <Typography>  How much would you like to donate? </Typography>
        <TextField
            type='number'
            name="size"
            variant= 'outlined'
            style={{height: 30}}
            inputProps ={{min: 200, step: 100}}>    
            </TextField>
        </Grid>
        </Grid>
    )
}

