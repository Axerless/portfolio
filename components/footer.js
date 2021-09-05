import Link from 'next/link'
import ytLogo from '../public/yt_logo.png';
import Image from 'next/image';
import React, { useEffect, useState } from "react";


export default function Footer(props) {
    const { children, ...customMeta } = props;

    return (
        <footer id="footerBg" className="flex-col flex items-center justify-between h-1/6 w-full bottom-0">

            <div className="flex h-30 justify-end mb-2 mt-8 m-auto">
            <Link href="#" className="icon">
                <svg aria-hidden="true" className="mr-2 h-8 icon" target="_blank" data-icon="github" data-prefix="fab" viewBox="0 0 496 512"><path fill="currentColor" d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 000 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 01126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 00168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8l3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"/></svg>
            </Link>
            <Link href="#" target="_blank">
                <Image src={ytLogo} alt="logo" className="yticon" width={42} height={30} />
            </Link>
            <Link href="#">
                <svg viewBox="0 0 24 24"  className="ml-2 h-8 icon" target="_blank"><path d="M24 5h-3l2-2-3 1a5 5 0 00-8 4C8 8 4 6 2 3c-2 2-1 5 1 7L1 9c0 2 2 5 4 5H3c0 2 2 3 4 3-2 2-4 3-7 3l8 2c9 0 14-8 14-15l2-2z"/></svg>
            </Link>

            </div>
                <Link href="/"><div id="myLogo" className="my-2">
            </div></Link>
        </footer> 
    )
}
