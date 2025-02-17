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
 
    <div className="  group relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]  hover:border-purple-500 hover:border-[4px]
     "> 
  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute  -left-[17px] top-[74px] rounded-s-lg group-hover:-left-[7px] group-hover:top-[72px]"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg group-hover:-left-[7px]"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-s-lg group-hover:-left-[7px]"></div>

     
      </div>
  
)

export default  UserProfileDisplay;