import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutKaspa from "@/components/AboutKaspa";
import Trading from "@/components/Trading";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutKaspa />
        <Trading />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;