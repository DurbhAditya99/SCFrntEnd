import { toast } from 'react-toastify'
import * as ActionTypes from './ActionTypes'


export const fetchUser = (token,userID) => {
	return function (dispatch) {
        fetch(`https://socialcredsbnd.herokuapp.com/api/user/profile/${userID}`,{
            method: 'GET',
            headers: {
              "Content-Type": 'application/json',
              "Authorization" : `Token ${token}`								
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              dispatch({ type: ActionTypes.GET_USER, payload: data })
              
            } )
	}
}

export const updateUser = (token, userID,body) =>{
  return function (dispatch){

    fetch(`https://socialcredsbnd.herokuapp.com/api/user/update/${userID}`,{
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : `Token ${token}`								
      },
     
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        dispatch({ type: ActionTypes.UPDATE_USER, payload: data })
    })

  }
}


export const getActivity = (token) =>{
  return function (dispatch){
    fetch('https://socialcredsbnd.herokuapp.com/api/display/all',{
             method: 'GET',
             headers: {
               "Content-Type": 'application/json',
               "Authorization" : `Token ${token}`	,
               "Accept": "application/json"							
             }
           })
           .then(res => res.json())
           .then((data) => {
             console.log(data)
             dispatch({ type: ActionTypes.GET_POST, payload: data })
         })
  }
}



export const singleActivity = (token,id) => {

  return function( dispatch){
    fetch(`https://socialcredsbnd.herokuapp.com/api/detail/${id}`,{
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : `Token ${token}`								
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({ type: ActionTypes.SINGLE_POST, payload: data })
      } )
  }
}


export const addActivity = (token,body) => {
  return function(dispatch){
    fetch('https://socialcredsbnd.herokuapp.com/api/create',{
			method:"POST",
			body: JSON.stringify(body),
      headers: {
				  "Content-Type": 'application/json',		
          "Authorization" : `Token ${token}`,
          "Access-Control-Request-Headers" : 'Authorization'
			},
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast.success('Your program has successfully')
      dispatch({ type: ActionTypes.ADD_POST, payload: data }) 
      
    } )
  }
}


export const loginUser = (body) =>{
  
  return function(dispatch){
    fetch('https://socialcredsbnd.herokuapp.com/api/user/login/',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",				
        },
        body: JSON.stringify(body),
      })
      .then((res) => res.json()
	  .then(data=> { console.log(data)
					const token = data['token']
					const id = data['id']
					const fn = data['first_name']
					if (token) {
						localStorage.setItem('token' , token)
						localStorage.setItem('userID', id)
						localStorage.setItem('first_name', fn)
						dispatch({ type: ActionTypes.LOGIN_USER, payload: data })
            window.location.href = '/dashboard'
						} else {
							toast.warning('Incorrect username or password')
						}
				} ))
      .catch((err) => { 
        console.log(err.message)
        
      })
  }
}



export const registerUser = (body) =>{
  return function(dispatch){

    fetch('https://socialcredsbnd.herokuapp.com/api/user/register/',{
			method:"POST",
			headers: {
				"Content-Type": 'application/json',								
			},
			body: JSON.stringify(body),
		})
		.then(function(res){ 
      
			if (res.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' + res.status);
				return;
			  }
			 
			res.json().then(function(data) {	
				console.log('printing data',data)
				console.log(data['status'])
        if (data['status'] === 400){
          const errs = data['errors']
          console.log('im in')
					if(errs['dob']){
            console.log('im in')
						const db = errs['dob']
						alert(db)
          return }
					if(errs['email_id']){
					const em = errs['email_id']
          toast.warning('User with this Email ID already exists')
        }
      } else{
        toast.success('Success!! Please check your email id ')
      }
				})

        
	})
		.catch(error => {
            console.log('There was an error!', error);
        });
  }
}