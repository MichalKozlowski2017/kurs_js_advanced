fetch('http://localhost:3003/cars')
.then(response => {
  return response.json()
})
.then(data => {
  data.forEach((el)=>{
    document.querySelector('#list').innerHTML += `
      <li>${el.Name}</li>
    `
  })
})
.catch(error => {
  console.log(error)
})

fetch('http://localhost:3003/cars', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    Name: "Polonez"
  })
})