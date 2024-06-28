/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";



const myLoader=({src, width, height})=>{
    return `https://github.com/damarkrisnandi.png`;
  }

const Header = () => {
    return ( 
        <Fragment >
            <div className="text-black text-lg font-semibold flex flex-row justify-start items-center h-20 py-7 pb-1 container mx-auto max-w-5xl px-4">
                <Link href="/1">
                        <span className="flex flex-row justify-start items-center">
                            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                            <Image 
                            src="/pixel_me_removedbg.png"
                            alt="Picture of the author"
                            width={72}
                            height={72}
                            />
                            ngeblog, blog
                        </span>
                </Link>
            </div>
            
        </Fragment>
    );
}

 
export default Header;