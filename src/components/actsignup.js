import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function ActivitySignUp(){
    
    return(
        <Grid container style={{verticalAlign:'center'}}>
            <Grid item xs={12}>
                <Typography style={{textAlign:'center'}}> 
                    You have successfully signed up for the program
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ActivitySignUp