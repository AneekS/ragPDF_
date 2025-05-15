"use client"
import * as React from "react"
import { MonitorUp } from "lucide-react"
const FileUplaodComponent: React.FC = () => {

    const handleFileUploadButtonClick = () => {
        // using basics DOM manupulation
        const el = document.createElement("input");
        el.setAttribute('type','file');
        el.setAttribute('accept','application/pdf');
        el.addEventListener('change', (ev)=>{
            if(el.files && el.files.length > 0)
            {
                const file = el.files.item(0);
            }
        })
        el.click();

    }
    return (
        <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-2xl border-amber-100 border-2">
           <div onClick={handleFileUploadButtonClick} className=" flex flex-col justify-center items-center">
             <h3>Upload Your PDF File</h3>
            <MonitorUp />
           </div>
        </div>
    )

}
export default FileUplaodComponent