import React, { useEffect } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import { TextField, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/ActionCreator';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  media:{
    
  }
}));

const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')
const pict = localStorage.getItem('pic')


function Inbox(){
  
  const user = useSelector((state) => state.users.users)
  const [acts,setAct] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles();
  const [pic,setPic] = useState(pict)
  const [open, setOpen] = React.useState(false);
  const [val,setVal] = useState(false)
  const [notifs, setNotifs] = useState(null)
   

    useEffect(() =>{

      fetch('https://socialcredsbnd.herokuapp.com/api/notif/list',{

            method: 'GET',
            headers: {
              "Authorization" : `Token ${token}`								
            },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data) 
      setNotifs(data)
    })

    }, [])
    
    const addUser = (prog_id, id, notif_id) =>{
      fetch(`https://socialcredsbnd.herokuapp.com/api/adduser/${prog_id}/${id}`,{
      method: 'GET',
      headers: {
        "Authorization" : `Token ${token}`								
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data['status'] == 'success'){
        handleSubmit(notif_id)
        }
      } )

    }

    const handleSubmit = (id) =>{

      fetch(`https://socialcredsbnd.herokuapp.com/api/notif/send/${id}`,{

            method: 'DELETE',
            headers: {
              "Authorization" : `Token ${token}`								
            },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data) 
      window.location.href = '/inbox'
    })

    }

    const handleChange =(e) =>{
      console.log(pic)
      localStorage.setItem('pic', pic )
      window.location.href= '/profile'
    }

  
  return(    
    <Grid container>
            <Grid item md={3}></Grid>
            <Grid container spacing={1} md={6} xs={12} style={{backgroundColor:'#ffffff',zIndex: 10,textAlign:'center', borderRadius:30 , marginTop: 10,fontSize: 20,fontFamily:'Raleway', textAlign:'center'}}> 
                <Card style={{backgroundColor:'#ffffff', borderRadius:30}}>
                
                <Grid item md={12}>               
                
                      
                   <Grid container spacing={1}>     
                
            
                <Grid item md={1}></Grid>
                <Grid item xs ={12} style={{textAlign:'center', fontSize:60}}> 
                Notifications
                </Grid>
                <Grid item xs={12}>Current time cred$: {user['clocked_hours'] }</Grid>
                <Grid item xs={12}>Your credit requests will appear here</Grid>
                <Grid item xs={12}></Grid>
                <Grid container style={{textAlign:'center'}}>
            { notifs ? notifs.map((info)=>{
              return(
                
              <Grid container >
                <Grid item md={1}></Grid>
                <Grid item md={10} xs={12}>
                <Card style={{borderRadius: 30, marginLeft:15,marginRight:15}} >
                  <br></br>
                  {info.hours !== 0 ? 
              <Grid item xs={12}>&nbsp; <strong>{info.message}</strong> has worked <strong>{info.hours} hours</strong>  in the program <strong>{info.program_name}</strong> and is requesting {info.creds} time cred$. <br></br>Accept the proposal?</Grid>:<Grid item xs={12}>&nbsp; <strong>{info.message} {info.program_name}</strong>  <br></br>Accept the proposal?</Grid>}
              <Grid item xs={12}><Button onClick={()=>{addUser(info.program,info.from_user,info.id)}}><i class='material-icons' style={{color:'green'}}>check_circle</i></Button> <Button onClick={()=>{handleSubmit(info.id)}}><i class='material-icons' style={{color:'red'}} >cancel</i></Button> </Grid>           
              </Card>
              <br></br> 
              </Grid>
              
              </Grid>
              
              )
              
            }) : ''}
            </Grid>
            <Grid item xs={12}></Grid>
           
            </Grid>

            
           
            </Grid>
            </Card>
                                                      
          </Grid>
          </Grid>
          
    
   
   
      
        
       )  


}



export default Inbox