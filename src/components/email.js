import { useEffect } from "react"
import { Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"


const Email = (props)=>{


    return(
        
        <Grid container style={{ marginTop:200,fontFamily: 'Raleway'}}>
            <Grid item xs={12} style={{textAlign:'center'}}>
                <img src='email.png' style={{height:200}}></img>
            </Grid>
            <Grid item xs={12} style={{textAlign:'center',fontSize:30}}>
            Verification Email has been sent!  
            </Grid>
            <Grid item xs={12} style={{textAlign:'center'}}>
            Please verify your account and continue with the login procedure
            </Grid>
           
        </Grid>
    )



}

export default Email