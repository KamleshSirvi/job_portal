import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  console.log(job);
  return (
    <>
      {/* // <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        //     <div>
        //         <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        //         <p className='text-sm text-gray-500'>India</p>
        //     </div>
        //     <div>
        //         <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        //         <p className='text-sm text-gray-600'>{job?.description}</p>
        //     </div>
        //     <div className='flex items-center gap-2 mt-4'>
        //         <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
        //         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
        //         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
        //     </div>
        // </div> */}

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-semibold">{job?.title}</h4>
              <p className="text-sm text-gray-500">
                {job?.company?.name} • India
              </p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage
                // src={`https://avatar.vercel.sh/${company}.png`}
                // alt={company}
              />
              {/* <AvatarFallback>{company[0]}</AvatarFallback> */}
            </Avatar>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{job?.description}</p>
          <div className="flex space-x-2">
            <Badge variant="secondary">{job?.position} Positions</Badge>
            <Badge variant="secondary">{job?.jobType}</Badge>
            <Badge variant="secondary">{job?.salary}LPA</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={()=> navigate(`/description/${job._id}`)} className="w-full">Apply Now</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LatestJobCards;
