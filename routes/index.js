const express = require('express');
const router = express.Router();
const {pageHome, pageTestimonials, pageTravels, pageAboutUs, pageTravelDetails } = require('../controllers/pagesController');
const {saveTestimonial} = require('../controllers/testimonialController');
//Router and controller

router.get('/', pageHome);

router.get('/travels', pageTravels);

router.get('/travels/:slug', pageTravelDetails);

router.get('/testimonials', pageTestimonials);

router.post('/testimonials', saveTestimonial);

router.get('/aboutus', pageAboutUs);


module.exports = router;