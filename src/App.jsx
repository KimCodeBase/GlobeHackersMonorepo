import SmCard from "./components/SmCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FeaturesSection from "./components/FeaturesSection";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FeaturesSection />
      <SmCard />
      <Footer />
    </>
  );
}
