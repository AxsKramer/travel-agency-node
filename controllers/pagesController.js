const { Travel } = require('../models/Travel');
const { Testimonial } = require('../models/Testimonial');

const pageHome = async (req,res) => {
  //To consult 3 travels of travel model
  try{
    const [travels, testimonials] = await Promise.all([Travel.findAll({limit: 3}), Testimonial.findAll({limit: 3})]);
    console.log(travels)
    console.log(testimonials)
    res.render('home', { 
      page: 'Home', 
      classHome: 'home',
      travels,
      testimonials
    });
  }
  catch(error){
    console.log(error);
  }
}

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

const pageTestimonials = async (req,res) => {
  try{
    const testimonials = await Testimonial.findAll();
    res.render('testimonials', { page: 'Testimonials', testimonials });
  }
  catch(error){
    console.log(error);
  }
}

const pageAboutUs = (req,res) => res.render('aboutus', { page: 'About Us' });

module.exports = {
  pageHome,
  pageAboutUs,
  pageTestimonials,
  pageTravels,
  pageTravelDetails
}