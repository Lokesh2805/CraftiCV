import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline, BtnUndo, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
const PROMPT = 'position title: {position title}, Depends on position title give me 5-7 bullets points for my experience in resume, give me result in HTML format'
function RichTextEditor({onRichTextEditorChange, index}) {
    const [value, setValue] = useState();
    
    const generateSummaryfromAI = () =>{
      const prompt = PROMPT.replace('{position title}', )
    }
  return (
    <div>
    <div className='flex justify-between my-2'>
    <label className='text-xs'>Summary</label>
    <Button variant="outline" size="sm"  className="flex gap-2 border-[#b57edc] text-[#b57edc]"><Brain/>Generate with AI</Button>
    </div>
    <EditorProvider>
    <Editor value={value} onChange={(e)=>{ setValue(e.target.value);
        onRichTextEditorChange(e);
    }}>
    <Toolbar>
    <BtnUndo/>
    <BtnRedo/>
    <Separator/>
    <BtnBold/>
    <BtnItalic/>
    <BtnUnderline/>
    <BtnStrikeThrough/>
    <Separator/>
    <BtnNumberedList/>
    <BtnBulletList/>
    <Separator/>
    <BtnLink/>
    
 
    </Toolbar>
    </Editor>
    
    </EditorProvider>
    </div>
  )
}

export default RichTextEditor