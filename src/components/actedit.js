import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchUser,singleActivity } from './redux/ActionCreator';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { updateActivity,updateActivityPic } from './redux/ActionCreator';
import Backdrop from '@material-ui/core/Backdrop';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
 
  } 
}) )




const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

function ActEdit(props){
    
  const classes = useStyles();
  const {id} = props.match.params
  const [users,setUsers] = useState()
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.users);
  const act = useSelector((state) => state.activity.activity)
  const actuser = useSelector((state)=> state.users.users)
  const [image , setImage] = useState(null)
  const inputRef = useRef()
  const [em,setEM] = useState('')
  const initialFormData = Object.freeze({
    title : "",
    description : "",
    start_date  : "",
    est_hours : "",
    vol_req : "",
    mother_vol: '',
    what_donating: '',
    where_donating: '', 
    category: '',
});

const [formData, updateFormData] = useState(initialFormData);

const handleChange = (e) => {
  const { name , value } = e.target
  updateFormData({
    ...formData,
    // Trimming any whitespace
    [e.target.name]: e.target.value.trim(),
  });
  
  console.log(name ,value)
};

const handleImageChange = (e) => {
  setImage(e.target.files[0])
};



const submit=()=>{
  
  console.log(formData)
  console.log(image)
  
  
  
  const body = {

    title : formData.title ? formData.title : act['title']  ,
    description : formData.description ? formData.description : act['description'],
    start_date  : formData.start_date ? formData.start_date : act['start_date'],
    est_hours : formData.est_hours ? formData.est_hours: act['est_hours'],
    vol_req : formData.vol_req ? formData.vol_req : act['vol_req'],
    mother_vol: formData.mother_vol ? formData.mother_vol : act['mother_vol'],
    what_donating: formData.what_donating ? formData.what_donating : act['what_donating'],
    where_donating: formData.where_donating ? formData.where_donating : act['where_donating'], 
    category: formData.category ? formData.category : act['category'],
   }

   dispatch(updateActivity(token,id,body))
if (image){
  let formdata =new FormData()
  formdata.append("file", image)
  formdata.append("upload_preset", "gyjuo8dc")
  formdata.append("cloud_name",'dw2d6mnyl')
  console.log(formdata)
   fetch('https://api.cloudinary.com/v1_1/dw2d6mnyl/image/upload',{
    method: 'POST',
    body: formdata,
  })
  .then(res => res.json())
  .then((data) => {
    fetch(`https://socialcredsbnd.herokuapp.com/api/act/pic/${id}`,{
    method: 'PUT',
    headers:{
      'Content-type' : 'application/json',
      'Authorization' : `Token ${token}`
    },
    body: JSON.stringify({
          'image' : data['url']
    })
    })
})
}
}
  

  

  useEffect(() =>{

    dispatch(fetchUser(token,userID))
    dispatch(singleActivity(token,id))

    dispatch(fetchUser(token,act['founder']))
    

    }, [])

  
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const deleteAct = () => {
      
     
      fetch(`https://socialcredsbnd.herokuapp.com/api/detail/${id}`,{
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json',
          "Authorization" : `Token ${token}`								
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        } )
      setTimeout(()=>{
        window.location.href = '/dashboard'
      },2000)
     
      }
  
  return(

         	  <Grid container>
               <Grid item xs={12}></Grid>
               <Grid item md={2}></Grid>
            <Grid item xs={12} md={8} >
            <Card variant='outlined'  style={{marginTop: 20, backgroundColor: '#ffffff', zIndex: 10, borderRadius:30 }}>
               <CardContent style={{}}>
               <Grid container spacing={3}>
              
            <Grid item xs={12} style={{fontFamily:'Raleway'}}>
            <Typography component='h1' style={{fontSize: 35 , fontFamily: 'Raleway'}}> 
            {act['founder_name']}'s {act['title']}    ( EDITING )
            </Typography>
            </Grid> 
            <Grid item xs={12}>
              <Typography style={{fontFamily: 'Raleway'}}><strong>Description </strong></Typography>
            <TextField
            name="description"
            id='description'
            name="description"
						type="description"
            multiline
            fullWidth
            defaultValue= {act['description']}
            onChange={handleChange}
            >
              
            </TextField>
            </Grid> 
           
            <Grid item xs={12}>
            <Typography style={{fontFamily: 'Raleway'}}> <strong>What are you donating?</strong></Typography>
            <TextField
            name='what_donating'
            defaultValue ={act['what_donating']}
            multiline
            fullWidth
            onChange={handleChange}
            >
            </TextField>
            </Grid> 
            <Grid item xs={12}>
            <Typography  style={{fontFamily: 'Raleway'}}> <strong> Where is the program taking place? </strong></Typography>
            <TextField
            name='where_donating'
            defaultValue = {act['where_donating']}
            multiline
            fullWidth
            onChange={handleChange}
            >
              
            </TextField>
            </Grid> 
            <Grid item xs={12} md={3}>
            <Typography> <strong> Start Date </strong></Typography>
            <TextField
            id="start_date"
      			name='start_date'
            type="date"
						size = 'small'
						variant = 'outlined'
            defaultValue = {act['start_date']}
            onChange={handleChange}	
          	InputLabelProps={{
            	shrink: true,
         					 }}
              				/>
            </Grid> 
         
            <Grid item xs={4} md={3}>
            <Typography> <strong> Category </strong></Typography>
            <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    name= 'category'
					          style ={{width: 150}}
                    defaultValue= {act['category']}
                    onChange={handleChange}
                     >
          <MenuItem value={"Life Cred$"}>Life Cred$</MenuItem>
					<MenuItem value={"Social Cred$"}>Social Cred$</MenuItem>
					<MenuItem value={"Learning Cred$"}>Learning Cred$</MenuItem>
         	<MenuItem value={"Human Cred$"}>Human Cred$</MenuItem>
					<MenuItem value={"Food Cred$"}>Food Cred$</MenuItem>
					<MenuItem value={"Kid Cred$"}>Kid Cred$</MenuItem>
					<MenuItem value={"Water Cred$"}>Water Cred$</MenuItem>
          <MenuItem value={"Green Cred$"}>Green Cred$</MenuItem>
                   
                    </Select>
            </Grid>
            <Grid item xs ={12} md={2}>
						<Typography className={classes.paper}>Estimated hours</Typography> 
							<TextField
								variant="outlined"
								required	
								id="est_hours"
								size = 'small'
								name="est_hours"
								type= 'number'
                defaultValue = {act['est_hours']}
                
								onChange={handleChange}
							/>
                        </Grid>
                        
            <Grid item xs={12}>Volunteer info</Grid>
            <Grid item xs={6} md={3} style={{}}>
            <Typography> Minimum Child volunteers  </Typography>
            <TextField
            name='vol_req'
            type='number'
            defaultValue = {act['vol_req']}
            variant= 'outlined'
            onChange={handleChange}
                 
            >
            </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
            <Typography> Minimum Parent volunteers  </Typography>
            <TextField
            name='mother_vol'
            type='number'
            defaultValue = {act['mother_vol'] ? act['mother_vol'] : ''}
            variant= 'outlined'
            onChange={handleChange}        
            >
            </TextField>
            </Grid>
          
            <Grid item xs={12}></Grid>
            
          

            <Grid item xs={12}>
            <Typography>Upload a cover Image!</Typography>
            <input 
                type="file" id="image" accept="image/png, image/jpeg, image/jpg" multiple
                onChange={handleImageChange}
               
            />
            </Grid>
           
           
            <Grid item xs= {12}>
            <Button onClick={() => {submit()}} style={{backgroundColor:'#ff8800', color:'#ffffff'}}>MAKE CHANGES</Button>  &nbsp;
            <Button onClick={handleToggle} style={{backgroundColor:'red', color:'white'}}><DeleteIcon /> </Button>
            </Grid>
           

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose} style={{textAlign:'center', fontSize:30}}>
              <Grid container xs={12} md={4} style={{backgroundColor:'white', borderRadius:30}}> 
                <Grid item xs={12}>
                  Are you sure you want to delete?
                </Grid>
                <Grid item xs={12}>
                 <Button onClick={()=>{deleteAct()}}>Yes</Button>
                 <Button>No</Button>
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



export default ActEdit