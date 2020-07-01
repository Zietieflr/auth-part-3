// example code 

fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(parseJson)
  .then(response => {
    const { token } = response 

    localStorage.setItem('token', token)
  })

  fetch('http://localhost:3000/pets', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(pet)
  })

  function logout(){
    localStorage.removeItem('token')
  }