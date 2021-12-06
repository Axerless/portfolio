import Link from 'next/link'
import React, { useEffect, useState } from "react";
import img1 from '../public/bug_game_screen_1.png';
import Image from 'next/image';


export default function ImageButton(props) {
    const { children, ...customMeta } = props;

    return (
        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
          <button id="imageButton"  onClick={() => {i = 0, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i]}}>
                <Image src={img1} alt="logo" width={240} height={135}/>
          </button>
        </div>
        
    )
}
