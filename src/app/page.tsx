"use client";
import ContactForm from "@/components/ContactForm";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
