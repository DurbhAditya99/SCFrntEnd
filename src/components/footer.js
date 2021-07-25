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
      textAlign:'center',
      color:'white',
      backgroundColor:'#F26627  ',
      display: 'inline-flex',
      height: 180
      
    }}> 
  
  <a style ={{ marginTop: 40, color:'white',}} href='https://drive.google.com/file/d/1tlqy-e1LNcCIEORd-E0xFAeK_HzoWZLL/view?usp=sharing'>Terms and conditions</a>
  <a style ={{color:'white'}} href='https://drive.google.com/file/d/1N3p9Wr2ksD61Cm1r9vjR0JCKGLRaLGSQ/view?usp=sharing'>Privacy Policy</a>
  <a style ={{color:'white'}} href='https://drive.google.com/file/d/10bdl0PbZbmSakvYJzm4Eh6yGMauPE17V/view?usp=sharing'>Fees and Refund Policy</a>
  <h5>All rights reserved.</h5>
  </AppBar>
    
    )

}



export default Footer