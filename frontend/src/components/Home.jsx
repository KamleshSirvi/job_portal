import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />

        <main className="container mx-auto px-4 py-12">
          <HeroSection />

          <CategoryCarousel />

          <LatestJobs />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
