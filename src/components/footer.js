import React from 'react'
import {
    AppBar,
    makeStyles,
  } from "@material-ui/core";
 


const tokenglobal = localStorage.getItem('token')

const useStyles = makeStyles(() => ({
    headers: {
      backgroundColor: "#ffffff",
    },
    logo: {
      fontFamily: "Cinzel",
      fontWeight: 600,
      fontSize: 35,
      color: "#ff8800",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 800,
        fontSize: 15,
        marginTop: 12,
        
     },
  }));


function Footer(){
      
    const { header, logo, menuButton } = useStyles();

  


    return(

    <AppBar style={{
      position: 'relative',
      left: 0,
      bottom: 0,
      height:90,
      width: 1530,
      marginBottom: 0,
      backgroundColor: '#ff8800',textAlign:'center',
      color:'white',
      marginTop: 10,display: 'inline-flex'
      
   
    }}> 
  
  <a style ={{color: 'white', marginTop: 10}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:e310af10-87c5-4d86-86c4-b09fafc0e835'>Terms and conditions</a>
  <a style ={{color: 'white'}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:530bde28-0762-47db-b1ea-854a9b24eff3'>Privacy Policy</a>
  <a style ={{color: 'white'}} href='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:26812c15-bde2-44a2-a2dc-0b5896cb7d73'>Fees and Refund Policy</a>
 
  </AppBar>
    
    )

}



export default Footer