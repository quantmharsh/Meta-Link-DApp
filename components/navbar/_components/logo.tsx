import Link from "next/link"

const  Logo=()=>{
    return(
        <>
      <Link href={"/"}>
      <span className="ml-3 mr-2 text-xl font-bold">
     Meta<span className="text-violet-500">Link</span>        
       
      </span>
      </Link>

        </>
    );
};
export default Logo;