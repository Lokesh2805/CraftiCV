import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline, BtnUndo, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'

function RichTextEditor({onRichTextEditorChange}) {
    const [value, setValue] = useState();
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