import AboutUs from '@/components/AboutUs';
import BlogSection from '@/components/BlogSection'; // Import BlogSection
import ContactSection from '@/components/ContactSection'; // Import ContactSection
import Jumbotron from '@/components/Jumbotron';
import ProductSection from '@/components/_product/ProductSection'; // Import ProductSection
import TestimonialsSection from '@/components/TestimonialsSection'; // Import TestimonialsSection
import TopPixSection from '@/components/Top/TopPixSection';

export default function Home() {
  return (
    <>
      <main>
        <Jumbotron />  {/* Hero Section */}
        {/* <AboutUs />  About Us Section */}
        <ProductSection />  {/* Products Section */}
        <TopPixSection />
        <TestimonialsSection />  {/* Testimonials Section */}
        <BlogSection />  {/* Blog Section */}
        <ContactSection />  {/* Contact Section */}
      </main>
    </>
  );
}
