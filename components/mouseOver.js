import { useEffect, useState } from "react";
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
        
        <div className="aboutDescriptionDiv">
          <button className="flex" onClick={() => navigator.clipboard.writeText("lukaszsurma73@gmail.com")} onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/mail_portrait.png')"}>
                <p className="copyIcon pClass3 z-0 flex justify-left">E-mail: lukaszsurma73@gmail.com</p>
          </button>
          <button className="flex" onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/yt_portrait.png')"}>
          <Link href="https://youtube.com/"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Youtube: https://youtube.com/</p></a></Link>
          </button>
          <button className="flex" onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/twitter_portrait.png')"}>
          <Link href="https://twitter.com/"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Twitter: https://twitter.com/</p></a></Link>
          </button>

          <button className="flex" onMouseOver={() => document.getElementById("ytImg").style.backgroundImage = "url('/git_portrait.png')"}>
          <Link href="https://github.com/Axerless"><a target="_blank"><p className="pClass3 z-0 flex justify-left">Github: https://github.com/Axerless</p></a></Link>
          </button>
          <style jsx>
            {`
               @media (max-width: 900px){
                #aboutConainer {
                    
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                }
                .pClass3{
                  font-size: 0.7rem;
                }
                .aboutDescriptionDiv
                {
                    width: 85%;
                    
                }
                .aboutImg
                {
                    display: flex;
                    justify-content: center;
                }
              }
              @media (max-width: 1535px){
                .aboutDescriptionDiv
                {
                    width: 82%;
                    
                    
                }
                .aboutImg
                {
                    display: flex;
                    justify-content: center;
                }
              }
              @media (max-width: 1280px){
                .aboutDescriptionDiv
                {
                    width: 77%;
                    
                    
                }
                .aboutImg
                {
                    display: flex;
                    justify-content: center;
                }
              }
              @media (max-width: 1025px){
                .aboutDescriptionDiv
                {
                    width: 70%;
                    
                    
                }
                .aboutImg
                {
                    display: flex;
                    justify-content: center;
                }
              }
                
                
            `}
        </style>
        </div>
        
      );
    };
  
export default Page;
  
