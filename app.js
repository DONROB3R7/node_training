const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');

// DataBase Connected 

const dataBase = 'mongodb+srv://donrob3r7:donrob3r7@nodetuts.qjfzzzs.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => app.listen(3000)
).catch((error)=> console.log(error));





// express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');


//app.use(morgan('tiny'));
//app.use(express.static('public'));

// app.use((req,res,next) => {

// next();
// })



app.get('/', (req, res) =>{

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
 
    res.render('index', {title: 'Home', blogs:blogs });
});

app.get('/about', (req, res) =>{

   res.render('about', {title: 'About' });
});


app.get('/blog/create', (req, res) => {
    res.render('create' , {title: 'Create' });
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404' });
})




// Listen for requests
// app.listen(3000);