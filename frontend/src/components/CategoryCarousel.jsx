import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full px-4 my-8 sm:my-12 md:my-16 lg:my-20">
      <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto relative">
        <CarouselContent className="ml-2 md:ml-4">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full xs:basis-1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Button
                  onClick={() => searchJobHandler(cat)}
                  variant="outline"
                  className="w-full rounded-full text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {cat}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10" />
        <CarouselNext className="absolute -right-8 sm:-right-14 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
