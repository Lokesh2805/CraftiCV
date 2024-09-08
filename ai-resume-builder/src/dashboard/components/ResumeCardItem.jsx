import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function ResumeCardItem({resume}) {
    console.log(resume);
  return (
    <Link to={'/dashboard/resume/'+resume.id+'/edit'}>
    <div className='p-14 bg-secondary flex justify-center items-center h-[280px] border border-primary hover:scale-105 transition-all hover:shadow-md shadow-primary rounded-lg'>
        <Notebook/>
    </div>
        <h2 className='text-center my-1'>{resume.attributes.title}</h2>
    </Link>
  )
}

export default ResumeCardItem