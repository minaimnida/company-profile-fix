import AboutUs from '@/components/AboutUs';
import BlogSection from '@/app/blogs/page'; // Import BlogSection
import ContactSection from '@/components/ContactSection'; // Import ContactSection
import Jumbotron from '@/components/Jumbotron';
import TestimonialsSection from '@/components/TestimonialsSection'; // Import TestimonialsSection
import TopPixSection from '@/app/products/Top/TopPixSection';

export default function Home() {
  return (
    <>
      <main>
        <Jumbotron />  {/* Hero Section */}
        {/* <AboutUs />  About Us Section */}
        {/* <TopPixSection /> */}
        <TestimonialsSection />  {/* Testimonials Section */}
        <BlogSection />  {/* Blog Section */}
        <ContactSection />  {/* Contact Section */}
      </main>
    </>
  );
}
