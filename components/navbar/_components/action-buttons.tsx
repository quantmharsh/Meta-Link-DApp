"use client";
import React, { useState, useEffect } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { getUserByAddress } from "@/utils/queries.js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import DropdownMenu from "./drop-down-menu";
const ActionButtons = () => {
	const { ready, authenticated, login, logout } = usePrivy();
	const disabledLogin = !ready || (ready && authenticated);
	const { wallets } = useWallets();

	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [UserInfo, setUserInfo] = useState("");
	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};
	const closeDropdown = () => {
		setDropdownVisible(false);
	};

	useEffect(() => {
		const getUserInfo = async () => {
			
				if (!ready || !wallets[0]?.address) {
					console.log("Wallet is not ready or address is undefined.");
					console.log("Wallet address =",wallets[0]?.address);
					return;
				}
			
				
			
			let userInfo = (await getUserByAddress(
				ready ? wallets[0]?.address : "0x0"
			)) as any;
			setUserInfo(userInfo);
		};
		getUserInfo();
	}, [ready, authenticated]);

	console.log(UserInfo == "user does not exist with this username");
	console.log(UserInfo);
	console.log(authenticated);

	return (
		<div className="pr-2">
			<div className="items-center justiify-center  flex">
				<div className="flex xl:space-x-4">
					{authenticated && UserInfo !== "user does not exist with this username" ? (
						<>
							<Link
								href={"/dashboard"}
								className="lg:flex items-center hidden ">
								<div>Dashboard</div>
							</Link>
							<div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
								|
							</div>
						</>
					) : authenticated && UserInfo == "user does not exist with this username" ? (
						<>
							<Link href={"/onboard"} className="lg:flex items-center hidden ">
								<div className="">Get DID</div>
							</Link>
							<div
								className="font-thin     
      lg:flex
          items-center
          ml-4 mr-0
          hidden">
								|
							</div>
						</>
					) : (
						""
					)}
				</div>
				<div className="flex lg:space-x-2 items-center pr-4">
					<Link href={"/free"}>
						<Button
							variant={"outline"}
							className="
            lg:flex
            items-center
            hidden
                border-none 
                text-md
                
                "></Button>
					</Link>
					{authenticated ? (
						<Button className="hidden lg:block " onClick={logout}>
							Disconnect
						</Button>
					) : (
						<Button className="hidden lg:block" onClick={login}>
							Connect
						</Button>
					)}
				</div>
			</div>
			{isDropdownVisible && (
				<div
					onClick={toggleDropdown}
					className="
             rounded-full
             xl:hidden">
					<X className="h-5 w-5  items-center justify-center rounded-full" />
				</div>
			)}
			{!isDropdownVisible && (
				<div onClick={toggleDropdown} className="flex lg:hidden">
					<AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
				</div>
			)}

			{isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
		</div>
	);
};
export default ActionButtons;