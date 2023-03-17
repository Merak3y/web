const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/user/:id', (req, res) => {
  const req_contents = req.params; 
  console.log(req_contents)

  if(req_contents.id =="dog")
  {
    res.json({'res' :'DOG', 'img':'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ'})
  }

  else if(req_contents.id =="cat")
  {
    res.json({'res' :'CAT', 'img':'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=700&quality=85&dpr=1&s=none'})
  }

  else{
    res.json({'res' :'ELSE', 'img' : 'https://cdn.akamai.steamstatic.com/steam/apps/1534200/header.jpg?t=1616065824'})
  }

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})