import { useEffect, useState } from "react";
import arrowRightImg from '../public/arrow_button_right.png';

import Image from 'next/image';


export async function arrowButtonClick(e) {
      console.log("najechano");
      return { props: {} };
  }

  const Page = () => {

    useEffect(() => {
      const handleScroll = () => {
        var x = 0;
        var images = new Array("../public/game_screen_2.png","../public/game_screen_2.png");
        var i = setInterval(auto, 3000);

        function auto()
        {
            x++;
            if (x == images.length)
            x=0;
            document.getElementById('CS_proj_img').style.backgroundImage = images[x];
        }
      };
      handleScroll();
      
    }, []);

    return (

        {/* <button id="arrowButton" className=" flex bg-white" onClick={() => document.getElementById("CS_proj_img").style.backgroundImage = "url('/game_screen_2.png')" }>
            <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
        </button> */}
        
           
      );
    };
  
export default Page;
  
