import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApis from './../../service/GlobalApis';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const {user}= useUser();
  const [resumeList, setResumeList] = useState([]);
  useEffect(()=>{
   user && GetResumeList();
  },[user])
  const GetResumeList = () =>{
    GlobalApis.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(res=>{
     setResumeList(res.data.data);
    });
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
    <h2 className='font-bold text-3xl'>My Resume</h2>
    <p>Start Creating AI resume for your next Job role</p>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
      <AddResume/>
      { resumeList.length>0 && resumeList.map((resume, index)=>(
        <ResumeCardItem resume={resume} key={index} />
      ))}
    </div>
    </div>
  )
}

export default Dashboard