import Link from "next/link"
import { PiDiscordLogoDuotone, PiGithubLogoDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi"

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
    <a
      href="https://www.linkedin.com/in/harsh-srivastava2001/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PiLinkedinLogoDuotone className="text-2xl text-gray-500 hover:text-pink-500 transition-all duration-300" />
    </a><a
      href="https://github.com/quantmharsh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PiGithubLogoDuotone className="text-2xl text-gray-500 hover:text-pink-500 transition-all duration-300" />
    </a>
    <a
      href="https://discord.com/users/532855998390599681"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PiDiscordLogoDuotone className="text-2xl text-gray-500 hover:text-pink-500 transition-all duration-300" />
    </a>

                    </div>
                </div>
                <div className="flex-col space-y-6 ">
          <div className="pt-10 font-medium">PRODUCT</div>
          <div className="font-light space-y-4 text-sm">
            <div>Home</div>
            <div>Jobs</div>
            <div>Verify Identity</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex ">
          <div className="pt-10 font-medium">USE CASES</div>
          <div className="font-light space-y-4 text-sm">
            <div>Secure Digital Identity</div>
            <div>Manage Your Profile</div>
            <div>Authenticate with Ease </div>

            <div>Verify Credentials</div>
          </div>
        </div>
            </div>
        </div>
    )
}
export default   Footer;