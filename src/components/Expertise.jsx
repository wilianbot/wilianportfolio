import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

function Expertise() {
  return (
    <div className="flex flex-col items-center justify-top h-screen mt-5 max-sm:h-full max-sm:mt-28" id="expertise">
        <h1 className="align-top flex justify-center font-poppins font-semibold text-6xl colortext titlenamerobal cursor-default max-sm:text-4xl">My Expertise</h1>
        <div className="grid grid-cols-3 grid-rows-2 mt-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-subgrid">
            <div className="h-80 w-72 border-white border-4 flex flex-col align-middle items-center p-5">
                <div className="flex align-middle items-center gap-2">
                    <FaReact className="size-9 text-blue-500"/>
                    <h3 className="font-poppins text-3xl font-semibold">Front-End</h3>
                </div>
                <ul className="font-mono text-lg">
                     <li>React</li>
                     <li>JavaScript</li>
                     <li>Tailwind CSS</li>
                     <li>HTML</li>
                     <li>CSS</li>
                </ul>
            </div> 
            <div className="h-80 w-72 border-white border-4 flex flex-col align-middle items-center p-5">
                <div className="flex align-middle items-center gap-2">
                    <FaCode className="size-9 text-orange-500"/>
                    <h3 className="font-poppins text-3xl font-semibold">Back-End</h3>
                </div>
                <ul className="font-mono text-lg">
                     <li>C</li>
                     <li>C++</li>
                </ul>
            </div>    
            <div className="h-80 w-72 border-white border-4 flex flex-col align-middle items-center p-5">
                <div className="flex align-middle items-center gap-2">
                    <MdOutlinePhoneIphone className="size-9 text-purple-700"/>
                    <h3 className="font-poppins text-3xl font-semibold">App Developer</h3>
                </div>
                <ul className="font-mono text-lg">
                     <li>React-Native</li>
                     <li>Flutter</li>
                </ul>
            </div>    
            <div className="h-80 w-72 border-white border-4 flex flex-col align-middle items-center col-start-2 p-5 max-sm:col-auto">
                <div className="flex align-middle items-center gap-2">
                    <FaDatabase className="size-9 text-pink-700"/>
                    <h3 className="font-poppins text-3xl font-semibold">Database</h3>
                </div>
                <ul className="font-mono text-lg">
                     <li>MySQL</li>
                </ul>
            </div>    
        </div>
    </div>
  )
}

export default Expertise