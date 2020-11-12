const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.render('home', {
    page: 'Home'
  })
});

router.get('/travels', (req,res) => {
  res.render('travels',{
    page: 'Travels'
  })
});

router.get('/testimonials', (req,res) => {
  res.render('testimonials', {
    page: 'Testimonials'
  })
});

router.get('/aboutus', (req,res) => {
  res.render('aboutus', {
    page: 'About Us'
  })
});


module.exports = router;