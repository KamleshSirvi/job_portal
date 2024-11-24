import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isIntiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true); // Update the local state
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          console.log(res.data.job);
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          ); // Ensure the state is in sync with fetched data
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <>
      {/* <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.postion} Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button
                onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div> */}

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Job Description
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="job-title">Job Title</Label>
              <Input id="job-title" value={singleJob?.title} readOnly />
            </div>
            {/* <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" value={jobData.company} readOnly />
          </div> */}
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Required(in yrs)</Label>
              <Input
                id="experience"
                value={singleJob?.experienceLevel}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Salary Range(in LPA)</Label>
              <Input id="salary" value={singleJob?.salary} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Number of Positions</Label>
              <Input id="experience" value={singleJob?.position} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Location</Label>
              <Input id="experience" value={singleJob?.location} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="job-description">Job Description</Label>
              <Textarea
                id="job-description"
                value={singleJob?.description}
                readOnly
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Date Posted</Label>
              <Input
                id="salary"
                value={singleJob?.createdAt.split("T")[0]}
                readOnly
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={isApplied} onClick={isApplied ? null : applyJobHandler}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default JobDescription;
