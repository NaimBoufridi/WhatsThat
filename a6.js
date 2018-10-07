var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Team Liquid lost cause naim had faith in them')
})
 
app.listen(2000)
