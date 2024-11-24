import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <>
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          No. 1 Job Hunt Website
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Search, Apply &<br />
          Get Your <span className="text-purple-600">Dream Jobs</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolori
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative">
          <Input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Button
            onClick={searchJobHandler}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
