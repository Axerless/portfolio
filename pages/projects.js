import bannerImg from '../public/game_screen_1.png';
import arrowRightImg from '../public/arrow_button_right.png';
import arrowLeftImg from '../public/arrow_button_left.png';

import Image from 'next/image';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

var bugImages = new Array("url('/bug_game_screen_1.png')","url('/bug_game_screen_2.png')","url('/bug_game_screen_3.png')","url('/bug_game_screen_4.png')");
var images = new Array("url('/game_screen.png')","url('/game_screen.png')","url('/game_screen_1.png')","url('/game_screen_2.png')","url('/game_screen_3.png')","url('/game_screen_3.png')");
var images2 = new Array("url('/cube_menu.png')","url('/cube_select_level.png')","url('/cube_game.png')");
var images3 = new Array("url('/ball_menu.png')","url('/ball_game_1.png')","url('/ball_game_2.png')","url('/ball_game_3.png')");
var images4 = new Array("url('/pacman_game_1.PNG')","url('/pacman_game_2.PNG')","url('/pacman_game_3.PNG')","url('/pacman_game_4.PNG')","url('/pacman_game_5.PNG')");
var x = 1;
var y = 0;
var z = 0;
var a = 0;

export default function About() {
return (
<div className="flex justify-center">
    <div className="container flex flex-col justify-between h-full item-center w-full">
    <Header>

    </Header>
    <Main>
    <div className=" mt-4 h-full p-2 ">
            <div className = "aboutTitleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black mb-10">
                  <p className="mainTitleClass flex justify-center">My projects</p>
            </div>
            <div className = "aboutTitleDiv max-w-6xl m-auto shadow-md border-opacity-70 rounded-md dark:bg-black">
                <a href="https://github.com/Axerless/Pacman3D" target="_blank" rel="noopener noreferrer">
                    <p className="mainTitleClass z-0 flex justify-center "><i>Pacman 3D</i></p>
                    <p className="pClass3 z-0 flex justify-center">It&apos;s my latest game. Aviable to download on my github.</p>
                </a>
            </div>
            <div className="projDiv mt-4 p-4 justify-center shadow-md border-opacity-70 rounded-md dark:bg-black">
                <div className="flex">
                    <button id="arrowButton" onClick={() => { if(a > 0){a--; document.getElementById("CS_proj_img5").style.backgroundImage = images4[a]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={44} height={72}/>
                    </button>
                    <div id="CS_proj_img5" className ="flex" alt="fifthProjectImage" ></div>
                    <button id="arrowButton"  onClick={() => {if(a<images4.length){ a++; document.getElementById("CS_proj_img5").style.backgroundImage = images4[a]}}}>
                        <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
                    </button>
                </div>

                <div className="flex">
                    <button id="arrowButton2" onClick={() => { if(a>0){a--; document.getElementById("CS_proj_img5").style.backgroundImage = images4[a]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={22} height={36}/>
                    </button>
                    <button id="arrowButton2"  onClick={() => {if(a<images4.length){ a++; document.getElementById("CS_proj_img5").style.backgroundImage = images4[a]}}}>
                        <Image src={arrowRightImg} alt="logo" width={22} height={36}/>
                    </button>
                </div>

            </div>
    </div>
    <div className=" mt-4 h-full p-2 ">
            <div className = "aboutTitleDiv max-w-6xl m-auto shadow-md border-opacity-70 rounded-md dark:bg-black">
                <a href="https://pixellookstudio.itch.io/cyberbug" target="_blank" rel="noopener noreferrer">
                    <p className="mainTitleClass z-0 flex justify-center "><i>Cyberbug</i></p>
                    <p className="pClass3 z-0 flex justify-center">My first participation in Game Jam. This project was made along with my friend Marcin and we created it in 3 weeks for submission in Game Off 2021.</p>
                </a>
            </div>
            <div className="projDiv mt-4 p-4 justify-center shadow-md border-opacity-70 rounded-md dark:bg-black">
                <div className="flex">
                    <button id="arrowButton" onClick={() => { if(a > 0){a--; document.getElementById("CS_proj_img4").style.backgroundImage = bugImages[a]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={44} height={72}/>
                    </button>
                    <div id="CS_proj_img4" className ="flex" alt="fourthProjImg" ></div>
                    <button id="arrowButton"  onClick={() => {if(a<bugImages.length){ a++; document.getElementById("CS_proj_img4").style.backgroundImage = bugImages[a]}}}>
                        <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
                    </button>
                </div>

                <div className="flex">
                    <button id="arrowButton2" onClick={() => { if(a>0){a--; document.getElementById("CS_proj_img4").style.backgroundImage = bugImages[a]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={22} height={36}/>
                    </button>
                    <button id="arrowButton2"  onClick={() => {if(a<bugImages.length){ a++; document.getElementById("CS_proj_img4").style.backgroundImage = bugImages[a]}}}>
                        <Image src={arrowRightImg} alt="logo" width={22} height={36}/>
                    </button>
                </div>

            </div>
            
        </div>
        <div className=" mt-4 h-full p-2 ">
            <div className = "aboutTitleDiv max-w-6xl m-auto shadow-md border-opacity-70 rounded-md dark:bg-black">
                  <p className="mainTitleClass z-0 flex justify-center "><i>Crawler Souls - rising hero adventure</i></p>
                  <p className="pClass3 z-0 flex justify-center">It&apos;s my biggest project yet, on which It&apos;m working since summer 2020. It&apos;s also made in Unity, but this time 2D style with pixel art assets.</p>
            </div>
            <div className="projDiv mt-4 p-4 justify-center shadow-md border-opacity-70 rounded-md dark:bg-black">
                <div className="flex">
                    <button id="arrowButton" onClick={() => { if(x>1){x--; document.getElementById("CS_proj_img").style.backgroundImage = images[x]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={44} height={72}/>
                    </button>
                    <div id="CS_proj_img" className ="flex" alt="thirdProjImg" ></div>
                    <button id="arrowButton"  onClick={() => {if(x<images.length){ x++; document.getElementById("CS_proj_img").style.backgroundImage = images[x]}}}>
                        <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
                    </button>
                </div>

                <div className="flex">
                    <button id="arrowButton2" onClick={() => { if(x>1){x--; document.getElementById("CS_proj_img").style.backgroundImage = images[x]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={22} height={36}/>
                    </button>
                    <button id="arrowButton2"  onClick={() => {if(x<images.length){ x++; document.getElementById("CS_proj_img").style.backgroundImage = images[x]}}}>
                        <Image src={arrowRightImg} alt="logo" width={22} height={36}/>
                    </button>
                </div>

            </div>
            
        </div>
        <div className=" mt-4 h-full p-2 ">
            
            <div className = "aboutTitleDiv max-w-6xl m-auto shadow-md border-opacity-70 rounded-md dark:bg-black">
                  <p className="mainTitleClass z-0 flex justify-center"><i>Cube3D</i></p>
                  <p className="pClass3 z-0 flex justify-center">It&apos;s my second project made in Unity3D. I&apos;ve created this to learn more about unity with help of Brackeys Tutorials.</p>
            </div>
            <div className="projDiv mt-4 p-4 justify-center shadow-md border-opacity-70 rounded-md dark:bg-black">
                <div className="flex">
                    <button id="arrowButton"  onClick={() => { if(y>0){y--; document.getElementById("CS_proj_img2").style.backgroundImage = images2[y]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={44} height={72}/>
                    </button>
                    <div id="CS_proj_img2" className ="flex " alt="secondProjImg" ></div>
                    <button id="arrowButton"  onClick={() => {if(y<images2.length){ y++; document.getElementById("CS_proj_img2").style.backgroundImage = images2[y]}}}>
                        <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
                    </button>
                </div>

                <div className="flex">
                    <button id="arrowButton2"  onClick={() => { if(y>0){y--; document.getElementById("CS_proj_img2").style.backgroundImage = images2[y]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={22} height={36}/>
                    </button>
                    <button id="arrowButton2"  onClick={() => {if(y<images2.length){ y++; document.getElementById("CS_proj_img2").style.backgroundImage = images2[y]}}}>
                        <Image src={arrowRightImg} alt="logo" width={22} height={36}/>
                    </button>
                </div>

            </div>
        </div>
        <div className=" mt-4 h-full p-2 ">
            <div className = "aboutTitleDiv max-w-6xl m-auto shadow-md  border-opacity-70 rounded-md dark:bg-black">
                  <p className="mainTitleClass z-0 flex justify-center"><i>Hit the ball</i></p>
                  <p className="pClass3 z-0 flex justify-center">My first project made in Unity. It was released on Andorid system.</p>
            </div>
            <div className="projDiv mt-4 p-4 justify-center shadow-md border-opacity-70 rounded-md dark:bg-black mb-4">
                <div className="flex">
                    <button id="arrowButton"  onClick={() => { if(z>0){z--; document.getElementById("CS_proj_img3").style.backgroundImage = images3[z]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={44} height={72}/>
                    </button>
                    <div id="CS_proj_img3" className ="flex" alt="secondProjImg" ></div>
                    <button id="arrowButton"  onClick={() => {if(z<images3.length){ z++; document.getElementById("CS_proj_img3").style.backgroundImage = images3[z]}}}>
                        <Image src={arrowRightImg} alt="logo" width={44} height={72}/>
                    </button>
                </div>

                <div className="flex">
                    <button id="arrowButton2"  onClick={() => { if(z>0){z--; document.getElementById("CS_proj_img3").style.backgroundImage = images3[z]}}}>
                        <Image src={arrowLeftImg} alt="logo" width={22} height={36}/>
                    </button>
                    <button id="arrowButton2"  onClick={() => {if(z<images3.length){ z++; document.getElementById("CS_proj_img3").style.backgroundImage = images3[z]}}}>
                        <Image src={arrowRightImg} alt="logo" width={22} height={36}/>
                    </button>
                </div>
                
            </div>
        </div>
        <style jsx>
            {`
            
                @media (max-width: 500px){
                    #arrowButton{
                        display:none;
                    }
                    #arrowButton2{
                        display: block;
                    }
                    .projDiv
                    {
                        max-height: 350px;
                    }
                    #CS_proj_img{
                        max-height: 165px;
                        background-size: 290px;
                        
                        background-repeat: no-repeat;
                    }
                    #CS_proj_img2{
                        
                        max-height: 165px;
                        background-size: 290px;
                        
                        background-repeat: no-repeat;
                    }
                    #CS_proj_img3{
                        
                        max-height: 165px;
                        background-size: 290px;
                       
                        background-repeat: no-repeat;
                    }
                    #CS_proj_img4{
                        
                        max-height: 165px;
                        background-size: 290px;
                       
                        background-repeat: no-repeat;
                    }
                    #CS_proj_img5{
                        
                        max-height: 165px;
                        background-size: 290px;
                       
                        background-repeat: no-repeat;
                    }
                }
                
            `}
        </style>
  
    </Main>

    <Footer>

    </Footer>
        
    </div>

</div>
        
        
)
    
}
