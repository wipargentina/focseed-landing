import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../data/testimonials.json';

export default function Testimonials() {
  const testimonials = data.testimonials;
  return (
    <section className='testimonials'>
      <div className='container'>
        <h2>Que opinan nuestros clientes</h2>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.location}</h4>
              <p>{testimonial.content}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
