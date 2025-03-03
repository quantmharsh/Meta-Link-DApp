"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar/navbar"
import UserProfile from "./user-profile"

const Profile =({params}:{params:{
    id:any
}})=>{

    return(
        <div>
            <Navbar/>
            <UserProfile param={params.id}/>
            <Footer/>
        </div>
    )
}
export default Profile ;