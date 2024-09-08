import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './Preview/PersonalDetailPreview';
import SummaryPreview from './Preview/SummaryPreview';
import ProfessionalExperiencePreview from './Preview/ProfessionalExperiencePreview';
import EducationalPreview from './Preview/EducationalPreview';
import SkillsPreview from './Preview/SkillsPreview';

function ResumePreview() {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{
        borderColor: resumeInfo?.themeColor
    }}>
        {/*Personal Details*/}
        <PersonalDetailPreview resumeInfo={resumeInfo}/>

        {/*Summary*/}
        <SummaryPreview resumeInfo={resumeInfo}/>

        {/*Professional Experience*/}
    
        <ProfessionalExperiencePreview resumeInfo={resumeInfo}/>
        {/*Educational details*/}

        <EducationalPreview resumeInfo={resumeInfo}/>

        {/*Skills*/}
        <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview