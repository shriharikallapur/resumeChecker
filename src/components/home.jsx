import React from "react";
import { Link } from "react-router-dom";

const Jobs =[
  {
    id: 1,
    title: 'Front-End Engineer',
    location: 'San Francisco',
    workType: 'remote',
    salary: '$70000',
    jobType: 'Full-time',
    jobDesc: {
      jD1: 'Experience working with CSS frameworks like BootStrap.',
      jD2: 'Creating tools that enhance the user’s experience.'
    }
  },
  {
    id: 2,
    title: 'UI/UX Engineer',
    location: 'New York',
    workType: 'remote',
    salary: '$60000',
    jobType: 'Full-time',
    jobDesc: {
      jD1: 'Experience working with CSS frameworks like BootStrap.',
      jD2: 'Creating tools that enhance the user’s experience.'
    }
  },
  {
    id: 3,
    title: 'Back-End Engineer',
    location: 'Los Angeles',
    workType: 'remote',
    salary: '$75000',
    jobType: 'Full-time',
    jobDesc: {
      jD1: 'Experience working with CSS frameworks like BootStrap.',
      jD2: 'Creating tools that enhance the user’s experience.'
    }
  },
  {
    id: 4,
    title: 'Full-Stack Engineer',
    location: 'Las Vegas',
    workType: 'remote',
    salary: '$100000',
    jobType: 'Full-time',
    jobDesc: {
      jD1: 'Experience working with CSS frameworks like BootStrap.',
      jD2: 'Creating tools that enhance the user’s experience.'
    }
  }
]

export const Home = () => {
  return (
    <div>
      <p className='text-5xl text-center mt-10 font-bold'>Select job here</p>
      <div className='flex my-28 mx-28'>
        {
          Jobs.map((item, i) => (
            <Link to="/applyForm" key={item.id}>
              <button className='text-left mx-3 rounded-lg  border-2 active:border-[#7c97c9]'>
                <div className='p-4'>
                  <div>
                    <p className='text-3xl font-bold'>{item.title}</p>
                    <p className='text-lg'>{item.location}</p>
                    <p>{item.workType}</p>
                  </div>
                  <div className='mt-1'>
                    <p>{item.salary}</p>
                    <p className='text-sm'>{item.jobType}</p>
                    <ul className='mt-4'>
                      <li key={'jD1'} className='text-xs mb-1'>{item.jobDesc.jD1}</li>
                      <li key={'jD2'} className='text-xs'>{item.jobDesc.jD2}</li>
                    </ul>
                  </div>
                </div>
              </button>
            </Link>
          ))
        }
      </div>
    </div>

  )
}


