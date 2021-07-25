
const token = localStorage.getItem('token')

const deleteAct = (id) => {
    console.log('delete')
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
      }