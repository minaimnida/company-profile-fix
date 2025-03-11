// components/AboutUs.tsx
"use client";

import { useEffect, useState } from "react";

const AboutUs = () => {
  const [team, setTeam] = useState<any[]>([]);

  useEffect(() => {
    // Fetching random team data from randomuser.me
    fetch("https://randomuser.me/api/?results=3") // Get 3 team members
      .then((res) => res.json())
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#508D4E]">Our Story</h2>
        <p className="text-lg text-gray-600 mt-4">
          At Planto, we believe that every home deserves a touch of nature. Our
          mission is to bring together beautifully crafted furniture and
          thriving houseplants, helping you create a cozy and refreshing space.
        </p>

        {/* Company History */}
        <div className="mt-12 bg-[#f9f5ef] p-6 rounded-lg shadow-md text-left">
          <h3 className="text-2xl font-bold text-[#508D4E]">Our Journey</h3>
          <p className="mt-3 text-gray-700">
            Founded in 2022, Planto started as a small passion project for plant
            lovers and interior designers. Our goal was simple: to create a
            space where stylish furniture and vibrant plants could coexist in
            harmony. Today, Planto is a go-to destination for those who want to
            bring warmth and nature into their homes.
          </p>
        </div>

        {/* Team & Values */}
        <div className="mt-8 bg-[#f9f5ef] p-6 rounded-lg shadow-md text-left">
          <h3 className="text-2xl font-bold text-[#508D4E]">
            Our Team & Values
          </h3>
          <p className="mt-3 text-gray-700">
            Our team is made up of designers, plant specialists, and
            sustainability advocates who share a love for creating beautiful and
            eco-friendly living spaces. At Planto, we value craftsmanship,
            sustainability, and customer happiness. Every product is designed
            with care, ensuring that both furniture and plants thrive together.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-green-700 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-green-700">
                  {member.name.first} {member.name.last}
                </h4>
                <p className="text-gray-600">
                  {
                    ["Designer", "Plant Specialist", "Furniture Expert"][
                      index % 3
                    ]
                  }
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-500 hover:text-blue-600 mt-2 block"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
