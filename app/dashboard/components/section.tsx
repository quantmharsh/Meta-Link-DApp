"use client"

import { useToast } from "@/components/ui/use-toast";
import { getUserByAddress, getUsernameByAddress } from "@/utils/queries";
import { useWallets } from "@privy-io/react-auth";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Section=()=>{
    const[formData , setFormData]=useState<any>({
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
        github: "",
        discord: "",
        linkedin: "",
        info: "",
        imageUrl: "",
        skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
    })
    const {toast}=useToast();
    const[countryCode , setCountryCode]=useState("");
    //privy-auth
    const {ready , wallets}=useWallets();
    useEffect(() => {
        const fetchCountryCode=async()=>{
            try {
                const response=await axios.get("https://ipapi.co/json/");
                setCountryCode(response.data.country_code);
                
            } catch (error) {
                             console.error("Error fetching country code",error);              
            }
        };
        fetchCountryCode();
     
    }, []);

    //fetch userInformation
    useEffect(()=>{
const getUserInfo=async()=>{
try {
     console.log("wallets address" , wallets[0]?.address);
    let userInfo=(await getUserByAddress(ready ?wallets[0]?.address:"0x0") as any);
    let username=(await getUsernameByAddress(ready ? wallets[0]?.address:"0x0")as any);
    setFormData({
        first_name:userInfo?.basicInfo?.firstName ,
  last_name:userInfo?.basicInfo?.lastName,
  username:username ,
  email:userInfo?.basicInfo?.email,
  home_address:userInfo?.basicInfo?.homeAddress,
  date_of_birth:userInfo?.basicInfo?.date_of_birth,
        education: userInfo?.professionalInfo?.education,
        work_history: userInfo?.professionalInfo?.workHistory,
        phone_number: userInfo?.basicInfo?.phoneNumber,
        job_title: userInfo?.professionalInfo?.jobTitle,
        x: userInfo?.socialLinks?.x,
        instagram: userInfo?.socialLinks?.instagram,
        github: userInfo?.socialLinks?.github,
        discord: userInfo?.socialLinks?.discord,
        linkedin: userInfo?.socialLinks?.linkedin,
        info: userInfo?.professionalInfo?.info,
        skills: userInfo?.professionalInfo?.skills,
        imageUrl: userInfo?.professionalInfo?.imageURL,
    })
    console.log("got user details" , userInfo);
    console.log("got userName", username);
} catch (error) {
      toast({
        title:"Error",
        description:"User Doesn't exist",
      });
}

}
getUserInfo();

    },[]);

    const ref= useRef(null);

    


    return(
        <div>
           {formData.username}
           {formData.email}
        </div>
    )
}
export default Section;