import Image from "next/image";
import FileUplaodComponent  from "./components/file-uplaod";
export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen min-w-screen">
        <div className="w-[30vw] min-h-screen p-4 flex justify-center items-center">
          <FileUplaodComponent></FileUplaodComponent></div>
        <div className="w-[70vw] min-h-screen border-l-2"></div>
      </div>
      
    </div>
  )
}