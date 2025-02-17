import React from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
interface UserProfileDisplayProps {
  formData:any ;
  countryCode:string ;
}

const UserProfileDisplay:React.FC<UserProfileDisplayProps> =({formData  , countryCode}) => (
 
    <div className="  group relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]  hover:outline hover:outline-[4px] hover:outline-purple-500

     "> 
  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute  -left-[17px] top-[74px] rounded-s-lg hover:outline hover:outline-[4px] hover:outline-purple-500 "></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg hover:outline hover:outline-[4px] hover:outline-purple-500 "></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg "></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-e-lg "></div>
    <div className="rounded-[2rem]    overflow-hidden w-[272px] h-[572px] bg-neutral-200 dark:bg-gray-800">
        {/* iPhone-Like Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-gray-800 dark:bg-gray-700 rounded-b-[16px]"></div>
    <div className="flex flex-col items-center justify-center pt-9 mx-3">
      <div className="text-center flex flex-col items-center justify-center ">
        <img className="w-20 h-20 object-cover object-center p-1 rounded-full  ring-2 ring-purple-300 dark:ring-gray-500"
        src={formData.imageUrl || "/images/avatar.jpeg"}
        alt="Bordered Avatar"
        />

      </div>
      </div>
      </div>


     
      </div>
  
)

export default  UserProfileDisplay;