import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import GlobalApis from './../../../../../service/GlobalApis'
import { useParams } from 'react-router-dom';
import { Brain, LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import { AIchatSession } from './../../../../../service/AIModel'

const prompt = "Job Tile: {jobTitle}, Depends on job title give me a summary for my resume within 4-5 lines."

function Summery({enableNext}) {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summery, setSummery] = useState();
    const [loading, setLoading] = useState(false);
    const params= useParams();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    },[summery])
    const GenerateSummaryFromAI=async()=>{
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}',resumeInfo?.jobTitle)
        console.log(PROMPT);
        const result = await AIchatSession.sendMessage(PROMPT);
        console.log(result.response.text());
        setLoading(false);
    }
    const onSave=(e)=>{
        e.preventDefault();
        setLoading(true);
        const data={
          data:{
            summery:summery
          }
        }
    
        GlobalApis.UpdateResumeDetail(params?.resumeId,data).then(res=>{
          console.log(res);
          enableNext(true);
          setLoading(false);
          toast('Details Updated');
        },(error)=>{
          setLoading(false);
        })
    }
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Summary</h2>
      <p>Add summary for your job title</p>
        <form className='mt-7' onSubmit={onSave}>
            <div className='flex justify-between'>
                <label>Add summary</label>
                <Button variant='outline' size="sm" type='button' className='border-[#b57edc] text-[#b57edc] flex gap-2' onClick={()=>GenerateSummaryFromAI()} ><Brain/>Generate from AI</Button>
             
            </div>
            <Textarea className='mt-5' required onChange={(e)=>setSummery(e.target.value)}/>
            <div className='flex justify-end mt-2'>
            <Button type="submit" disabled={loading}>{loading?<LoaderCircle className='animate-spin'/>:'Save'}</Button>
     
            </div>
        </form>
      
      </div>
  )
}

export default Summery