import Link from "next/link"
import { PiInstagramLogoDuotone } from "react-icons/pi"

const Footer=()=>{

    return(

        <div className="flex lg:items-center pb-10 flex-col px-8 l:px-0 xl:w-4/4 mx-auto 2xl:w-[55%]">
            <div className=" lg:flex lg:space-x-32 md:px-0">
                <div className="pt-4">
                    <span className="mr-2 text-xl font-bold ">Meta<span className="text-purple-500">Link</span>

                    </span>
                    <div className="flex space-x-2">
                    <a
      href="https://www.instagram.com/harsh_srivastava.ig/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PiInstagramLogoDuotone className="text-2xl text-gray-500 hover:text-pink-500 transition-all duration-300" />
    </a>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default   Footer;