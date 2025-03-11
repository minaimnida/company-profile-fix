"use client"

import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    // Fetching random user data to simulate testimonials (you can replace with your own API)
    fetch('https://randomuser.me/api/?results=4') // Fetching 4 random users as testimonials
      .then((res) => res.json())
      .then((data) => setTestimonials(data.results));
  }, []);

  // Function to generate a random testimonial description
  const generateTestimonialDescription = (name: string) => {
    const descriptions = [
      `${name} had an amazing experience with our products! Highly recommend to everyone.`,
      `I love how ${name} used our products to transform their living space! 10/10.`,
      `Incredible service and excellent product quality — ${name} couldn’t be happier!`,
      `The product exceeded ${name}'s expectations. A perfect addition to any home!`
    ];
    // Randomly select a testimonial description from the array
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-green-700">Customer Testimonials</h2>
      <p className="text-lg text-gray-600 mt-4">
        Hear from some of our happy customers!
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
            <img
              src={testimonial.picture.medium}
              alt={`${testimonial.name.first} ${testimonial.name.last}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-green-700">
              {testimonial.name.first} {testimonial.name.last}
            </h4>

            {/* Random Description */}
            <p className="text-gray-600 mt-2">
              "{generateTestimonialDescription(testimonial.name.first)}"
            </p>
            <p className="text-gray-500 mt-2">{testimonial.email}</p>
            {/* Add a rating (optional) */}
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9733;</span> {/* Add star ratings */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
