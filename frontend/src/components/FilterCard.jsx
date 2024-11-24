import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Separator } from "./ui/separator"
// import { Checkbox } from "./ui/checkbox"

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const industryData = ["Frontend Developer", "Backend Developer", "FullStack Developer"]
const locationData = ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
const salaryData = ["0-40k", "42-1lakh", "1lakh to 5lakh"]


const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        // <div className='w-full bg-white p-3 rounded-md'>
        //     <h1 className='font-bold text-lg'>Filter Jobs</h1>
        //     <hr className='mt-3' />
        //     <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        //         {
        //             fitlerData.map((data, index) => (
        //                 <div>
        //                     <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
        //                     {
        //                         data.array.map((item, idx) => {
        //                             const itemId = `id${index}-${idx}`
        //                             return (
        //                                 <div className='flex items-center space-x-2 my-2'>
        //                                     <RadioGroupItem value={item} id={itemId} />
        //                                     <Label htmlFor={itemId}>{item}</Label>
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </div>
        //             ))
        //         }
        //     </RadioGroup>
        // </div>
        <aside className="w-full md:w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Filter Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <RadioGroup  onValueChange={changeHandler}>
                  {locationData.map((role) => (
                    <div key={role} className="flex items-center space-x-2">
                      <RadioGroupItem value={role.toLowerCase().replace(' ', '-')} id={role} />
                      <Label htmlFor={role}>{role}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Industry</h3>
                <RadioGroup onValueChange={changeHandler}>
                  {industryData.map((role) => (
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
                <RadioGroup onValueChange={changeHandler}>
                  {salaryData.map((range) => (
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
    )
}

export default FilterCard