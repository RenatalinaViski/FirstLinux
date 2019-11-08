const express = require('express')
const app = express()
const app2=express()

app.use (express.static('public'))   
app.get('/',  (req, res)=> {
  res.sendFile(`${__dirname}/public/index.html`)
})

 
app.listen(3000, '0.0.0.0', ()=>{
console.log (`Server Express started in https://0.0.0.0:3000`)
})

app2.get('/api',(req,res)=>{
  res.sendFile(`${__dirname}/public/indexApi.html`)
})
app2.listen(4000,'0.0.0.0',()=>{
  console.log|(`Express server started in http://0.0.0.0:4000`)
})
