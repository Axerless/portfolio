import { useEffect, useState } from "react";
import copyIcon from '../public/copy_icon.png';
import Link from 'next/link'


export async function changeBackground(e) {
      console.log("najechano");
      return { props: {} };
  }

  const Page = () => {

    useEffect(() => {
      const handleScroll = () => {

      };
      handleScroll();
      
    }, []);

    return (
        
        <div className="flex flex-col aboutDescriptionDiv">
          <button onClick={() => navigator.clipboard.writeText("lukaszsurma73@gmail.com")} onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/mail_portrait.png')"}>
                <p className="copyIcon pClass3 z-0 flex justify-left">E-mail: lukaszsurma73@gmail.com</p>
          </button>
          <button onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/yt_portrait.png')"}>
          <Link href="https://youtube.com/"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Youtube: https://youtube.com/</p></a></Link>
          </button>
          <button onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/twitter_portrait.png')"}>
          <Link href="https://twitter.com/"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Twitter: https://twitter.com/</p></a></Link>
          </button>

          <button onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/git_portrait.png')"}>
          <Link href="https://github.com/Axerless"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Github: https://github.com/Axerless</p></a></Link>
          </button>
        </div>
      );
    };
  
export default Page;
  
