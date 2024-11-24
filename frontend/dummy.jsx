import React from 'react'

const dummy = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Filter Section */}
      <aside className="w-full md:w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Filter Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <div className="space-y-2">
                  {['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'].map((location) => (
                    <div key={location} className="flex items-center">
                      <Checkbox id={location} />
                      <Label htmlFor={location} className="ml-2">{location}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Industry</h3>
                <RadioGroup defaultValue="frontend">
                  {['Frontend Developer', 'Backend Developer', 'FullStack Developer'].map((role) => (
                    <div key={role} className="flex items-center space-x-2">
                      <RadioGroupItem value={role.toLowerCase().replace(' ', '-')} id={role} />
                      <Label htmlFor={role}>{role}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Salary</h3>
                <RadioGroup defaultValue="0-40k">
                  {['0-40k', '42-1lakh', '1lakh to 5lakh'].map((range) => (
                    <div key={range} className="flex items-center space-x-2">
                      <RadioGroupItem value={range.toLowerCase().replace(' ', '-')} id={range} />
                      <Label htmlFor={range}>{range}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>

      {/* Job Listings */}
      <main className="w-full md:w-3/4 space-y-6">
        {jobData.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{job.postedAgo}</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{job.positions} Positions</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{job.type}</span>
                {job.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" className="text-sm">
                <BriefcaseIcon className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button
                variant="ghost"
                className="text-sm"
                onClick={() => toggleSaveJob(job.id)}
              >
                <BookmarkIcon className={`w-4 h-4 mr-2 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                {savedJobs.includes(job.id) ? 'Saved' : 'Save For Later'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  )
}

export default dummy