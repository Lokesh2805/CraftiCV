import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
const formFeild = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};
function Experience() {
  const [experienceList, setExperienceList] = useState([
    {
      formFeild,
    },
  ]);

  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);

  const handleChange = (index, event) => {
    const newEnteries = experienceList.slice();
    const {name, value} = event.target;
    newEnteries[index][name] = value;
    setExperienceList(newEnteries); 
  };

  const AddNewExperience = () =>{
    setExperienceList([...experienceList, formFeild])
  }

  const RemoveExperience = () =>{
    setExperienceList(experienceList=>experienceList.slice(0,-1));
  }

  const handleRichTextEditor = (e, name, index) =>{
    const newEnteries = experienceList.slice();
    newEnteries[index][name] = e.target.value;
    setExperienceList(newEnteries);
  }

  useEffect(()=>{
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList
    })
  },[experienceList])
  
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your last previous job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className=" text-xs m-3">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className=" text-xs m-3">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className=" text-xs m-3">City</label>
                  <Input
                    name="city"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className=" text-xs m-3">State</label>
                  <Input
                    name="state"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className=" text-xs m-3">Start Date</label>
                  <Input
                  type="date"
                    name="startDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className=" text-xs m-3">End Date</label>
                  <Input
                  type="date"
                    name="endDate"
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                <RichTextEditor onRichTextEditorChange={(event)=>handleRichTextEditor(event, 'workSummery', index)}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={AddNewExperience} className="text-primary">+ Add More Experience</Button>
          <Button variant="outline" onClick={RemoveExperience} className="text-primary">- Remove</Button>
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
