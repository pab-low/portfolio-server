const express = require('express')
const app = express()
// adding middleware
app.set("view engine", "ejs"); //setting up template engine

app.use(express.static('./public'));

app.get('/About', function (req, res) {
  res.render('About');
});

 app.get('/project', function (req, res) {
  res.render('project');
});

app.get('/skill', function (req, res) {
    res.render('skill');
  });

app.listen(3000, function(err){
    if (err){
    console.log(err)
    }
    console.log('server is live on port 3000!!')
})





 
