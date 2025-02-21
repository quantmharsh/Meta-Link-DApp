import React from "react";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconBriefcase2,
  IconMail,
  IconMailBitcoin,
  IconMapPin,
  IconMapPin2,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
interface UserProfileDisplayProps {
  formData:any ;
  countryCode:string ;
}

const UserProfileDisplay:React.FC<UserProfileDisplayProps> =({formData  , countryCode}) => (
 
    <div className="   group relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]  hover:outline hover:outline-[4px] hover:outline-purple-500

     "> 
  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute  -left-[17px] top-[74px] rounded-s-lg 
 
  "></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-s-lg "></div>
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
        <p className="font-medium text-gray-700 py-2">
          @{`${formData.username}`  ||"MetaLinkDID"}

        </p>
        <p className=" tex-sm text-gray-700 py-1">
          {formData.info || "We make digital Identity easier 🚀"}

        </p>

      </div>
      {/* job title , country code */}
      <div className="grid grid-cols-2 gap-2 py-2 w-full">
        <div className="flex flex-row items-center space-x-2  bg-gray-100 px-3 py-2 rounded-lg">
          <IconBriefcase2 width={17} height={17}/>
          <p className="text-sm">{formData.job_title || "Company"}</p>
        </div>
        <div className="flex flex-row items-center space-x-2 bg-gray-100  px-3 py-2 rounded-lg">
          <IconMapPin2 width={17} height={17}/>
          <p className="text-sm">{countryCode}</p>
        </div>

      </div>

      {/* Email & phone */}
      <div className="flex flex-col w-full">
        {/* Email */}
        <div className="flex flex-row items-center bg-gray-100 space-x-2 px-3 py-2 rounded-lg">
          <IconMailBitcoin width={17} height={17}/>
          <p className="text-sm">
            {formData.email || "MetaLink@crypto.com"}
          </p>
        </div>
        {/* Phone */}
        <div className="flex flex-row items-center bg-gray-100 mt-2 space-x-2 px-3 py-2 rounded-lg">
            <IconPhone width={17} height={17} />
            <p className="text-sm">
              {formData.phone_number || "+00 123 456 789"}
            </p>
          </div>
      </div>
      <div className="inline-flex items-center  justify-center w-full">
        <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2  left-1/2 dark:text-white dark:bg-gray-900">Skills</span>
      </div>
      {/* Skills */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {formData?.skills?.map((skill:string , index:number)=>(
          <div
          key={index}
          className="flex flex-row items-center bg-gray-100 w-max space-x-2 px-3 py-2 rounded-lg"
          >
            <p className="tex-xs">{skill}</p>
            
            </div>
        ))}

      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-4 bg-gray-200  border-0 dark:bg-gray-700"/>
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">Socials</span>
      </div>
      <div className="grid grid-cols-4 gap-2 pt-2 w-full">
          {formData.x && (
            <Link href={formData.x}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandX width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.instagram && (
            <Link href={formData.instagram}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full
               hover:animate-fifth
              ">
               
                <IconBrandInstagram width={24} height={24} color="white" className="hover:w-13 hover:h-13" />
              </div>
            </Link>
          )}
          {formData.github && (
            <Link href={formData.github}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandGithub width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.discord && (
            <Link href={formData.discord}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandDiscord width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.linkedin && (
            <Link href={formData.linkedin}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandLinkedin width={24} height={24} color="white" />
              </div>
            </Link>
          )}
        </div>
      </div>
      </div>


     
      </div>
  
)

export default  UserProfileDisplay;