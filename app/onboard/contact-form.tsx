"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  getUserByAddress,
  createUser,
  getUsernameByAddress,
} from "@/utils/queries";
import { useWallets } from "@privy-io/react-auth";

import UserProfileDisplay from "./components/user-profile-display";
import SocialMediaInputs from "./components/social-media-inputs";
import FormFields from "./components/form-fields";
import CustomImageUploader from "@/components/ui/custom-image-uploader";

import { Toaster } from "@/components/ui/toaster";
import { FormSchema, FormValues } from "@/utils/formSchema";
import { options } from "@/utils/options";
const urlPatterns: Record<string, string> = {
    x: "^https?:\\/\\/(www\\.)?twitter\\.com\\/[A-Za-z0-9_]{1,15}$",
    instagram: "^https?:\\/\\/(www\\.)?instagram\\.com\\/[A-Za-z0-9_.]+$",
    linkedin: "^https?:\\/\\/(www\\.)?linkedin\\.com\\/in\\/[A-Za-z0-9_-]+$",
    github: "^https?:\\/\\/(www\\.)?github\\.com\\/[A-Za-z0-9_-]+$",
    discord:
      "^https?:\\/\\/(www\\.)?discord\\.com\\/users\\/\\d{17,19}$",
  };
  
  const animatedComponents=makeAnimated();
export default function CreateProfile()  {
 const [countryCode , setCountryCode]=useState<string>("");
 const {wallets}=useWallets();
 const {toast}=useToast();
 const [loading , setLoading]=useState<boolean>(false);
 const[submitted , setSubmitted]=useState<boolean>(false);
 const[formData , setFormData]=useState<FormValues>({
  first_name: "",
    last_name: "",
    username: "",
    email: "",
    home_address: "",
    date_of_birth: "",
    education: "",
    work_history: "",
    phone_number: "",
    job_title: "",
    x: "",
    instagram: "",
    discord: "",
    github: "",
    linkedin: "",
    info: "",
    imageUrl: "",
    skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
 });



 //fetch country code 
 useEffect(()=>{
const fetchCountryCode=async()=>{

  try {
     const response=await axios.get("https://ipapi.co/json/");
     setCountryCode(response.data.country_code);
     handleChange("country_code" , response.data.country_code);
  } catch (error) {
    console.error("Error fetching country code :" , error);
  }
}; 
   fetchCountryCode();
 },[])
 

//fetch user info from blockchain 
useEffect(()=>{
const getUserInfo=async()=>{
  let userInfo=(await getUserByAddress(wallets[0]?.address)) as any;
  let userName=(await getUsernameByAddress(wallets[0]?.address))as any;
setFormData({
  first_name:userInfo?.basicInfo.firstName ,
  last_name:userInfo?.basicInfo.lastName,
  username:userName ,
  email:userInfo?.basicInfo.email,
  home_address:userInfo?.basicInfo.homeAddress,
  date_of_birth:userInfo?.basicInfo.date_of_birth,
        education: userInfo?.professionalInfo.education,
        work_history: userInfo?.professionalInfo.workHistory,
        phone_number: userInfo?.basicInfo.phoneNumber,
        job_title: userInfo?.professionalInfo.jobTitle,
        x: userInfo?.socialLinks.x,
        instagram: userInfo?.socialLinks.instagram,
        github: userInfo?.socialLinks.github,
        discord: userInfo?.socialLinks.discord,
        linkedin: userInfo?.socialLinks.linkedin,
        info: userInfo?.professionalInfo.info,
        skills: userInfo?.professionalInfo.skills,
        imageUrl: userInfo?.professionalInfo.imageURL,


});
console.log("userInfo", userInfo);
console.log("userName", userName);
}
getUserInfo();

},[])

const[errors ,setErrors]=useState<any>({});
const [selectedOptions ,setSelectedOptions]=useState<
any[]>([]);
//using shadcn form 
const form =useForm({
  resolver:zodResolver(FormSchema),
  defaultValues:formData ,
});

//validate URL's
const validateUrl=(url:string , pattern:string)=>{
  if(!url)
  {
    return false;
  }
  const regex=new RegExp(pattern);
  return  regex.test(url);
}


 // update form fields
 const handleChange=(
  name:string , value:any
 )=>{

  setFormData((prev)=>({...prev ,[name]:value}));
  let error="";
  if(name==="email" && value && !/.+@.+\..+/.test(value) )
  {
    error="Invalid Email Address";
  }
  else if(
    ["x", "instagram", "github", "discord", "linkedin"].includes(name)
  )
  {
    const pattern =urlPatterns[name];
    if(pattern)
    {
      const isValid=validateUrl(value , pattern);
   
    if(!isValid)
    {
      error = `Invalid  ${name.charAt(0).toUpperCase()+ name.slice(1)}  URL`;
    }
  }
  }
  //Handling  multiple errors 
  setErrors((prevErrors:any)=>({
    ...prevErrors ,[name]:error
  }));


 };

 const handleSkillChange =(selected:any)=>{
  if(selected.length <=3)
  {
    const selectedValues=selected.map((option:any)=> option.value);
    setSelectedOptions(selectedValues);
    handleChange("skills",selectedValues);
  }
 }

 const customStyles ={
  control:(provided :any ,state:any)=>({
    ...provided ,
    borderColor:state.isFocused ? "#000000":"#d1d5db",
    boxShadow:state.isFocused ?"0 0 0 1px #d1d5db" : "none",
    "&:hover":{
      borderColor:"#d1d5db",
    },
    borderRadius:"0.375rem",
    paddingTop:"0.2rem",
    paddingBottom:"0.2rem",
  }),
  multiValue:(provided:any)=>({
    ...provided ,
    backgroundColor:"#e5e7eb"
  }),
  multiValueLabel:(provided:any)=>({
    ...provided ,
    color:"#374151",
  }),
  multiValueRemove:(Provided:any)=>({
    ...Provided,
    color:"#6b7280",
    "&:hover":{
      color:"#4b5563",
    },
  }),
 };

 

}