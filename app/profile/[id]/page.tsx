"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar/navbar"

const Profile =({params}:{params:{
    id:any
}})=>{

    return(
        <div>
            <Navbar/>
            <Footer/>
        </div>
    )
}
export default Profile ;