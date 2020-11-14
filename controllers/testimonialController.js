const { Testimonial} = require('../models/Testimonial');

const saveTestimonial = async (req,res) => {

  const errors = [];
  const {name, email, message} = req.body;
  if(name.trim() === '') {
    errors.push({message: 'The name´s field is empty '});
  }
  if(email.trim() === ''){
    errors.push({message: 'The email´s field is empty '});
  }
  if(message.trim() === ''){
    errors.push({message: 'The testimony´s field is empty '});
  }

  if(errors.length > 0){

    const testimonials = await Testimonial.findAll();

    res.render('testimonials', {
      page: 'Testimonials',
      errors,
      name,
      email,
      message,
      testimonials
    });
  }
  else{
    try{
      await Testimonial.create({
        name,
        email,
        message
      });

      res.redirect('/testimonials');
    }
    catch(error){
      console.log(error);
    }
  }
}

module.exports = {
  saveTestimonial,
}