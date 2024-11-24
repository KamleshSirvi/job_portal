import React from 'react'
import { Button } from './ui/button'
import { Bookmark, BookmarkIcon, BriefcaseIcon } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardFooter } from './ui/card'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        // <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        //     <div className='flex items-center justify-between'>
        //         <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        //         <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        //     </div>

        //     <div className='flex items-center gap-2 my-2'>
        //         <Button className="p-6" variant="outline" size="icon">
        //             <Avatar>
        //                 <AvatarImage src={job?.company?.logo} />
        //             </Avatar>
        //         </Button>
        //         <div>
        //             <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        //             <p className='text-sm text-gray-500'>India</p>
        //         </div>
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
        //     <div className='flex items-center gap-4 mt-4'>
        //         <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        //         <Button className="bg-[#7209b7]">Save For Later</Button>
        //     </div>
        // </div>
        <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <img src={job?.company?.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{job?.title}</h3>
                    <p className="text-sm text-gray-500">{job?.company?.name} • India </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">{job?.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{job?.position} Positions</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{job?.jobType}</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">{job?.salary} LPA</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" className="text-sm" onClick={()=> navigate(`/description/${job?._id}`)}>
                <BriefcaseIcon className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button
                variant="ghost"
                className="text-sm"
                // onClick={() => toggleSaveJob(job.id)}
              >
                <BookmarkIcon className={`w-4 h-4 mr-2 `} />
                {'Save For Later'}
              </Button>
            </CardFooter>
          </Card>
    )
}

export default Job