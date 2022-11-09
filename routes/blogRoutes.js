const express = require('express');
const routers = express.Router();
const Blog = require('../models/blog');

// Blog routes get request
routers.get('/blogs', (req,res) => {
    Blog.find().sort({createdAt: -1 }).then((result) =>{
        res.render('index', {title:'All Blogs', blogs: result})
    }).catch((err) => {
        console.log(err);
    })
})


// Post Blogs 
routers.post('/blogs', (req, res) =>{
    const blog = new Blog(req.body);
    blog.save().then(result => {
        res.redirect('/blogs');
    }).catch(err =>{
        console.log(err);
    })
})


routers.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  
routers.delete('/blogs/:id', (req, res) => {
    const id  = req.params.id;
    console.log(res);
    Blog.findByIdAndDelete(id).then( result => {
        res.json({redirect: '/blogs'});
    }).catch(err => {
        console.log(err);
    })
})

routers.get('/blog/create', (req, res) => {
    res.render('create' , {title: 'Create' });
})


module.exports = routers;