
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Carousel />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
