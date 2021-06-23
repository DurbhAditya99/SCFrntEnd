import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";


export default function DonatePage(){

    return(
        <Grid container spacing={5} style={{textAlign:'left',marginLeft:30, marginTop: 120}}>
            <Grid item xs ={12}>
        <Typography style={{fontSize:30}}>Donate generously</Typography>
        </Grid>
        <Grid item xs ={12}>
        <Typography style={{fontSize:30}}>Your donation qualifies for 80G tax rebate </Typography>
        </Grid> 
        <Grid item xs ={12}>
            <TextField
            label='Donor Name'
            style={{width:1000}}
            >

            </TextField>
        
        </Grid>
        <Grid item xs ={12}>
            <TextField
            type='number'
            label='How much would you like to donate?'
            style={{width:1000}}
            placeholder='₹5000 / ₹15,000 / ₹25,000'
            >

            </TextField>
        
        </Grid>
        </Grid>
    )
}

