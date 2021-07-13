import React from 'react'
import {
    AppBar,
    makeStyles,
  } from "@material-ui/core";
import { Height } from '@material-ui/icons';
 


const tokenglobal = localStorage.getItem('token')

function Footer(){
      
    return(

    <AppBar style={{
      position: 'relative',
      float: 'bottom',
      marginTop: '-200',
      backgroundColor: '#ff033e',
      textAlign:'center',
      color:'white',
      display: 'inline-flex',
      height: 300
   
    }}> 
  
  <a style ={{color: 'white', marginTop: 40}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:e310af10-87c5-4d86-86c4-b09fafc0e835'>Terms and conditions</a>
  <a style ={{color: 'white'}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:530bde28-0762-47db-b1ea-854a9b24eff3'>Privacy Policy</a>
  <a style ={{color: 'white'}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:26812c15-bde2-44a2-a2dc-0b5896cb7d73'>Fees and Refund Policy</a>
  <h5>All rights reserved.</h5>
  </AppBar>
    
    )

}



export default Footer