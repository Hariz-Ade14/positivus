import React from "react";
import testimonialImg from "../../assets/Testimonials block.png"
import TestimonialImg from "../../assets/Testimonial-mobile.png"
import "./Body.css"

const Testimonials = () => {
  return (
    <div className="Testimonial">
      <div className="TestimonialHead">
        <h1
          style={{
            background: "rgba(185, 255, 102, 1)",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          Testimonials
        </h1>
        <p className="mx-4 mt-3">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="testimonial-block">
           <img src={testimonialImg} style={{width:"100%"}} alt="" />
      </div>
   <div className="img2">
      <img src={TestimonialImg} style={{width:"100%"}} alt="" />
           
      </div>
    </div>
  );
};

export default Testimonials;
