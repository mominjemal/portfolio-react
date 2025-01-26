import React from 'react'
import './Testimonials.css'
import theme_pattern from '../../assets/asset/theme_pattern.svg'

const testimonialData = [
    {
        content: "Working with this developer was an absolute pleasure. They delivered exactly what we needed and more.",
        author: "John Smith",
        position: "CEO, TechCorp"
    },
    {
        content: "Exceptional work quality and great communication throughout the project.",
        author: "Sarah Johnson",
        position: "Product Manager"
    },
    {
        content: "Highly skilled and professional. Would definitely recommend!",
        author: "Mike Wilson",
        position: "Startup Founder"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials-title">
                <h1>Testimonials</h1>
                <img src={theme_pattern} alt="" />
            </div>
            
            <div className="testimonials-container">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-content">{testimonial.content}</p>
                        <div className="testimonial-author">
                            <h3>{testimonial.author}</h3>
                            <p>{testimonial.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials 