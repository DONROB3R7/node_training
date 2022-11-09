const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const { application, response } = require('express');
const { render } = require('ejs');
const blogRoutes =  require('./routes/blogRoutes');

// DataBase Connected 
const dataBase = 'mongodb+srv://donrob3r7:donrob3r7@nodetuts.qjfzzzs.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => app.listen(3000)
).catch((error)=> console.log(error));


// express app
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Register view engine
app.set('view engine', 'ejs');



app.get('/all-blogs', (req,res) =>{
    Blog.find().then(result =>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    } )
})

app.get('/', (req, res) =>{
    res.redirect('/blogs');
});

app.get('/about', (req, res) =>{
   res.render('about', {title: 'About' });
});





//Blog routers
app.use(blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404' });
})