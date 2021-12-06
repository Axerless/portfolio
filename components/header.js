import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Header(props) {
    const { children, ...customMeta } = props;

    return (
        
        <header id="headerBg" className="sticky top-0 w-full justify-between flex z-40">
        <style jsx>
            {`
               @media (max-width: 540px){
                #headerBg {
                  height: 216px;
                }
                #homeButton{
                    margin: 20px;
                }
                #projButton{
                    margin: 20px;
                }
              }
                
            `}
        </style>
        <nav className="justify-start mt-8">
            <ul className="menu h-10 w-full">
                <Link href="/"><li id="homeButton" className="ml-2">Home</li></Link>
                <Link href="/projects"><li id="projButton" className="ml-2 ">Projects</li></Link>
                <Link href="/gallery"><li id="homeButton" className="ml-2">Gallery</li></Link>
                <Link href="/about"><li id="homeButton" className="ml-2">About</li></Link>
            </ul> 
        </nav>
       </header>
    )
}
