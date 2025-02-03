"use client"
import {defineChain} from "viem";
import {Outfit} from "next/font/google";
import "./global.css";
import  {PrivyProvider} from  "@privy-io/react-auth";
const font= Outfit({subsets:["latin"]});


const BitTorrent=defineChain({
    id:1029,
    name:"BitTorrent Chain Donau",
    network:"BitTorrent Chain Donau",
    nativeCurrency:{
        decimals:18,
        name:"BitTorrent Chain Donau",
        symbol:"BTTC"
    },
    rpcUrls:{
        default:{
            http:["https://pre-rpc.bt.io/"],
        },
    } as any,
    blockExplorers:{
        default:{
            name:"Explorer",
            url:"https://testnet.bttcscan.com"
        }
    }
}) as any;

export default function RootLayout({
    children ,
}:{
    children:React.ReactNode;
})
{
    return (
        <html lang="en">
            <body  className={font.className}>
                <PrivyProvider
                appId="cm6oq3fre000l4f3as9l7de0t"
                config={{
                    appearance:{
                        theme:"light",
                        accentColor:"#676FFF",
                        logo:"https://your-logo-url",

                    },
                    defaultChain:BitTorrent,
                    supportedChains:[BitTorrent],
                }}
                
                >

{children}               
 </PrivyProvider>

            </body>

        </html>
    )
}