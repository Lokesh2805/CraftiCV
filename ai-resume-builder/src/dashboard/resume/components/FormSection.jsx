import React, { useState } from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery';

function FormSection() {
  const [activeformIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
    <div className='flex justify-between items-center'>
      <Button variant="outline" size='sm' className='flex gap-2 '><LayoutGrid/>Theme</Button>
      <div className='flex gap-2'>
      {activeformIndex>1 && <Button className='flex gap-2' size='sm' onClick={()=>setActiveFormIndex(activeformIndex-1)}><ArrowLeft/></Button>}
        <Button disabled={!enableNext} className='flex gap-2' size='sm' onClick={()=>setActiveFormIndex(activeformIndex+1)} >Next <ArrowRight/></Button>
      </div>
    </div>
    {/*Personal Details*/}
    { activeformIndex==1 ? <PersonalDetails enableNext={(v)=> setEnableNext(v)}/> : null}
    {/*Summery*/}
    { activeformIndex==2 ? <Summery enableNext={(v)=> setEnableNext(v)}/> : null }

    {/*Experience*/}

    {/*Educational Details*/}

    {/*Skills*/}
    
    
    </div>
  )
}

export default FormSection