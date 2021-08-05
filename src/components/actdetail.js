import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Backdrop, CardActionArea, CardMedia, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { addActivity, fetchGuest, fetchUser,singleActivity } from './redux/ActionCreator';
import { useHistory } from 'react-router';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import Moment from 'moment';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 800,
    fontSize: 20,
    marginTop: 24,
    color: '#ffffff',
    width: 100,
    textTransform:'none',
    borderRadius: 20
    
 },
}));

   



const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

function ActDetail(props){
  
  const {menuButton} = useStyles();
  const history = useHistory()
  const classes = useStyles();
  const {id} = props.match.params
  const [users,setUsers] = useState()
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.users);
  const act = useSelector((state) => state.activity.activity)
  const actuser = useSelector((state)=> state.guests.guests)
  const [creds, setCreds] = useState(0)
  const [hours, setHours] = useState(0)

  const initialFormData = Object.freeze({
    creds : '',
    hours : '',
    message: '',
});
const [formData, updateFormData] = useState(initialFormData);
  const handleClose = () => {
    setOpen(false);
    setOpen2(false)
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleToggle2 = () => {
    setOpen2(!open);
  };

  const changeU =(id) =>{
    window.location.href= `/actedit/${id}`
  }
  const addUser =() =>{
    
    fetch(`https://socialcredsbnd.herokuapp.com/api/notif/send/${act['founder']}`,{
      method: 'POST',
      headers: {
        "Authorization" : `Token ${token}`,
        'Content-Type'	: 'application/json'							
      },
      body : JSON.stringify({
        "from_user" : userID,
        "to_user" : act['founder'],
        "creds" : '0',
        "program_name" : act['title'],
        "program" : act['id'],
        "hours": '0',
        "message": `${user['first_name']} ${user['last_name']} wants to join your program`
    })
        })
      .then(res => res.json())
      .then(data => {
        console.log(data) 
        toast.success('Request has been sent successfully')
        })

  /*  fetch(`https://socialcredsbnd.herokuapp.com/api/adduser/${id}`,{
      method: 'GET',
      headers: {
        "Authorization" : `Token ${token}`								
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      } )

     handleToggle()

*/
  }

  const notif = () =>{

    console.log(act['founder'])
    fetch(`https://socialcredsbnd.herokuapp.com/api/notif/send/${act['founder']}`,{
      method: 'POST',
      headers: {
        "Authorization" : `Token ${token}`,
        'Content-Type'	: 'application/json'							
      },
      body : JSON.stringify({
        "from_user" : userID,
        "to_user" : act['founder'],
        "creds" : formData.creds,
        "program_name" : act['title'],
        "program" : act['id'],
        "hours": formData.hours,
        "message": `From:  ${user['first_name']}` +  formData.message
    })
        })
      .then(res => res.json())
      .then(data => {
        console.log(data) 
        })
    toast.success('Request sent')
  }


  const handleChange = (e) =>{	
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});

  }

  const donate = () =>{

      history.push({
        pathname: '/donate',
        title: act['title'] 
      })
      }
  


  const profile = (id) =>{
    if(userID!=id){
      history.push(`/profile/${id}`)
    }
    else{
      history.push(`/profile`)
    }
  }


  useEffect(() =>{

    dispatch(fetchUser(token,userID))
    dispatch(singleActivity(token,id))

    dispatch(fetchGuest(token,act['founder']))
  
    }, [act['founder']])

   
  
  return(

         	  <Grid container spacing={1}>
             
               <Grid item xs={12}></Grid>
               <Grid item md={2}></Grid>

            <Grid item xs={12} md={8} >
           
            <Card variant='outlined'  style={{marginTop: 10, backgroundColor: '#ffffff', zIndex: 10, borderRadius:30 }}>
               <CardContent style={{}}>
                 <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
            <Grid item xs={12}  style={{fontFamily:'Raleway'}}>
            <Typography component='h1' style={{fontSize: 35 , fontFamily: 'Raleway'}}> 
            {act['founder_name']}'s {act['title']} 
            </Typography>
            <Button style={{textTransform:'None', backgroundColor:'#ff8800',color:'#ffffff', borderRadius:20,width:100,height:40,fontFamily:'Raleway'}} onClick={donate} >Donate</Button>&nbsp;
            { act['user'] ?  ( act['user'].includes(parseInt(userID)) ? ( act['founder']==userID ? '' :  <Button  style={{backgroundColor:'#ff8800',fontFamily:'Raleway', color:'#ffffff', borderRadius:20,textTransform:'None',width:160,height:40 }} onClick={handleToggle2}> Request for Cred$</Button>) : <Button onClick={addUser} style={{backgroundColor:'#ff8800',fontFamily:'Raleway', color:'#ffffff', borderRadius:20,textTransform:'None',width:160,height:40 }}>Join program</Button> ) : '' }  
            {act['founder']==userID ? <Button style={{zIndex:15,borderRadius:20,width:120,fontFamily:'Raleway'}} onClick={()=>{changeU(act['id'])}}><EditIcon style={{zIndex:10}}></EditIcon></Button> : ''}
            </Grid>
            <Grid item xs={12}>
              <Typography style={{fontFamily: 'Raleway'}}><strong>{act['founder_name']}'s plan</strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            style={{fontFamily:'Raleway'}}
            >
              {act['description']}
            </Typography>
            </Grid>           
            { act['what_donating'] ? act['what_donating'] !=='x' ?
            
            <Grid item xs={12}>
            <Grid item xs={12}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong>What {act['founder_name']} is donating</strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            style={{fontFamily:'Raleway'}}
            >
              {act['what_donating']}
            </Typography>
            </Grid> 
            <br></br>
            <Grid item xs={12}>
            <Typography  style={{fontFamily: 'Raleway'}}> <strong> Where is the program taking place? </strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            style={{fontFamily:'Raleway'}}
            >
              {act['where_donating']}
            </Typography>
            </Grid> 
            </Grid> : ' ' : '' }
            <Grid item xs={4} md={6}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong> Start Date </strong></Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            style={{fontFamily:'Raleway'}}
            >
              {Moment(act['start_date']).format('DD MMM YYYY')}
            </Typography>
            </Grid> 
         
            <Grid item xs={6} md={6}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong> Category </strong>    </Typography>
            <Typography
            name='Description'
            defaultValue = 'None'
            multiline
            fullWidth
            style={{fontFamily:'Raleway'}}
            >
              {act['category']}
            </Typography>
          
            </Grid>
            
            </Grid>
            </Grid>
            
            
            <Grid item md={6} xs={12}>
            { act['image'] ? <img class='responsive' style={{ borderRadius: 30,height: 275}}  src={act['image']} />  : (act['founder']==userID ?  <CardActionArea onClick={()=>{changeU(act['id'])}} style={{textAlign:'center', borderRadius: 30, height: 300}}> Add a cover image</CardActionArea> : '')  }
            </Grid>
            
            <Grid item xs={12}> <Typography style={{fontFamily: 'Raleway',fontSize:30}}> <strong>Volunteer info</strong>    </Typography></Grid>
            <Grid item xs={6} md={3} style={{}}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong> Minimum Child Volunteers: </strong>    </Typography>
            <Typography>{act['vol_req']}
            </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong> Minimum Parent Volunteers: </strong>    </Typography>
            <Typography>{act['mother_vol']}
            </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong> Current Number of Volunteers: </strong>    </Typography>
            <Typography>{act['user'] ? act['user'].length : 1}
            </Typography>
            
            </Grid>
          
            <Grid item xs={6} md={12}>
            <Typography style={{fontFamily: 'Raleway'}}>Founder</Typography>
            <Button  style={{textTransform:'None',borderRadius:30}} onClick={() =>{profile(act['founder'])}}>
            <img src={actuser['profile_pic']} style={{height: 35, width:35, borderRadius: 100 }}></img> &nbsp; {act['founder_name']} </Button>
            </Grid>
           

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <Grid container style={{backgroundColor: '#ffffff', color:'black', textAlign:'center', borderRadius: 30, height: 300}}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <Typography style={{fontSize:40, fontFamily:'Raleway'}}>Successfully joined the program! </Typography>
                    
                    <Button href='/dashboard'> Back to dashboard</Button>
                  </Grid>
                  </Grid>
            </Backdrop>

            <Backdrop className={classes.backdrop} open={open2} >
            <Grid container md={6} style={{backgroundColor: '#ffffff', color:'black', textAlign:'center', borderRadius: 30,  zIndex:10}}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                  <br></br>
                    <Typography style={{fontSize:30, fontFamily:'Raleway'}}> Please fill up the form below </Typography>
                    <Typography style={{fontSize:20, fontFamily:'Raleway'}}>How many hours have your worked in this program?</Typography>
                    <TextField variant='outlined' type='number' onChange={handleChange} name='hours' inputProps={{min:0}}></TextField>
                    <Typography style={{fontSize:20, fontFamily:'Raleway'}}>How many credits are you expecting?</Typography>
                    <TextField variant='outlined' type='number' onChange={handleChange} name='creds' inputProps={{min:0}}></TextField>
                    <Typography style={{fontSize:20, fontFamily:'Raleway'}}>Briefly describe your contribution to the program</Typography>
                    <TextField variant='outlined' multiline onChange={handleChange} name='message'></TextField>
                    <Grid item xs={12}></Grid>
                    <Grid item md={2}></Grid>
                    
                   
                   
                    <br></br>
                    <Button  onClick={notif} style={{backgroundColor:'orange', color:'white',borderRadius:20}}>Submit</Button>&nbsp;<Button style={{backgroundColor:'orange', color:'white',borderRadius:20}} onClick={handleClose}>Cancel</Button>
                    <br></br>
                    <br></br> 
                   
                  </Grid>
                  </Grid>
            </Backdrop>

            
           

            
            </Grid>

            </CardContent>
            </Card>
            </Grid>
          
            </Grid>
  
   
      
        
       )  


}



export default ActDetail