
const { Travel } = require('../models/Travel');

const pageHome = (req,res) => res.render('home', { page: 'Home' });

const pageTravels = async (req,res) => {
  try{
    const travels = await Travel.findAll();
    console.log(travels)
    res.render('travels', { page: 'Next Travels', travels })
  }
  catch(error){
    console.log(error)
  }
}

const pageTravelDetails = async (req, res) => {
  const {slug} = req.params;
  try{
    const travel = await Travel.findOne({where: {slug: slug}});
    res.render('travel', {
      page: 'Details of the travel',
      travel
    })
  }
  catch(error){
    console.log(error)
  }
}

const pageTestimonials = (req,res) => res.render('testimonials', { page: 'Testimonials' });

const pageAboutUs = (req,res) => res.render('aboutus', { page: 'About Us' });

module.exports = {
  pageHome,
  pageAboutUs,
  pageTestimonials,
  pageTravels,
  pageTravelDetails
}