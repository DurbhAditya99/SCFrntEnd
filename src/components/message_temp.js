import { useEffect } from "react"
import { Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"


const Message = (props)=>{

    const {uidb64} = props.match.params
    const {token} = props.match.params

    useEffect(()=>{
        fetch(`https://socialcredsbnd.herokuapp.com/api/activate/${uidb64}/${token}/`,{
            method: 'GET',
            headers : {
                "Content-Type": 'application/json'
            }
        })
    },[])


    return(
        
        <Grid container style={{marginTop: 200, fontFamily: 'Raleway'}}>
            <Grid item xs={12} style={{textAlign:'center'}}>
            Congrats on creating your Social Cred$ account
            </Grid>
            <Grid item xs={12} style={{textAlign:'center'}}>
            You have credited with a time bank balance 1.0
            </Grid>
            <Grid item xs={12} style={{textAlign:'center'}} >
            <Button href='/login'>Login</Button>
            </Grid>
        </Grid>
    )



}

export default Message