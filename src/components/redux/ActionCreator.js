import * as ActionTypes from './ActionTypes'


export const fetchUser = (token,userID) => {
	return function (dispatch) {
        fetch(`http://127.0.0.1:8000/api/user/profile/${userID}`,{
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

    fetch(`http://127.0.0.1:8000/api/user/update/${userID}`,{
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
    fetch(`http://127.0.0.1:8000/api/display/all`,{
             method: 'GET',
             headers: {
               "Content-Type": 'application/json',
               "Authorization" : `Token ${token}`								
             }
           })
           .then(res => res.json())
           .then((data) => {
             console.log(data)
             dispatch({ type: ActionTypes.GET_POST, payload: data })
         })
  }

}