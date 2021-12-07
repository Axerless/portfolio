import galleryImg1 from '../public/gallery_img_1.png';
import galleryImg2 from '../public/gallery_img_2.png';
import galleryImg3 from '../public/gallery_img_3.png';
import galleryImg4 from '../public/gallery_img_4.png';
import galleryImg5 from '../public/gallery_img_5.png';
import galleryImg6 from '../public/gallery_img_6.png';
import galleryImg7 from '../public/gallery_img_7.png';
import galleryImg8 from '../public/gallery_img_8.png';
import galleryImg9 from '../public/gallery_img_9.png';
import galleryImg10 from '../public/gallery_img_10.png';

import arrowRightImg from '../public/arrow_button_right.png';
import arrowLeftImg from '../public/arrow_button_left.png';
import Image from 'next/image';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

var galleryImages = new Array("url('/gallery_img_1.png')","url('/gallery_img_2.png')","url('/gallery_img_3.png')","url('/gallery_img_4.png')","url('/gallery_img_5.png')","url('/gallery_img_6.png')","url('/gallery_img_7.png')","url('/gallery_img_8.png')","url('/gallery_img_9.png')","url('/gallery_img_10.png')");
var i = 0;


export default function About() {
return (
<div className="flex justify-center">
    <div className="container flex flex-col justify-between h-full item-center w-full">
    <Header>

    </Header>
    <Main>

            <div id="imageUnder" className="imageUnderHide">
                  <div id="mainImageContainer" className="flex h-full">
                        <div className="flex m-auto">
                                    <button id="arrowButton" className="arrowButtonContainerHide" onClick={() => { if(i>0){i--; document.getElementById("imageOver").style.backgroundImage = galleryImages[i]}}}>
                                          <Image src={arrowLeftImg} alt="arrowButtonLeft" width={22} height={36}/>
                                    </button>
                        </div>
                        <div id ="imageOver" className = "optionA sticky m-auto w-full h-full">
                              
                        </div>
                        <div className="flex m-auto">
                              <button id="arrowButton1" className="arrowButtonContainerHide" onClick={() => { if(i<galleryImages.length-1){i++; document.getElementById("imageOver").style.backgroundImage = galleryImages[i]}console.log("iks "+i);}}>
                                    <Image src={arrowRightImg} alt="arrowButtonRight" width={22} height={36}/>
                              </button>
                        </div>
                  </div>
                  <div className="flex justify-start mt-4 h-full p-2 z-0 ">
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 0, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg1} alt="galleryImg1" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 1, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg2} alt="galleryImg2" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 2, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg3} alt="galleryImg3" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 3, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg4} alt="galleryImg4" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 4, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg5} alt="galleryImg5" width={240} height={135}/>
                              </button>
                        </div>
                        
                  </div>

                  <div className="flex justify-start mt-4 h-full p-2 z-0 ">
                        
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 5, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg6} alt="galleryImg6" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 6, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg7} alt="galleryImg7" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 7, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg8} alt="galleryImg8" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 8, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg9} alt="galleryImg9" width={240} height={135}/>
                              </button>
                        </div>
                        <div className ="titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black w-64 h-40 m-auto pt-2.5">
                              <button id="imageButton"  onClick={() => {i = 9, document.getElementById("imageOver").className = "optionB p-max sticky m-auto",document.getElementById("imageUnder").className = "imageUnderShow", document.getElementById("imageOver").style.backgroundImage = galleryImages[i], document.getElementById("arrowButton").className = "arrowButtonContainerShow", document.getElementById("arrowButton1").className = "arrowButtonContainerShow", document.getElementById("TransparentBox").className = "TransparentBoxOff"}}>
                                    <Image src={galleryImg10} alt="galleryImg10" width={240} height={135}/>
                              </button>
                        </div>
                  </div>
                  <div id="TransparentBox" className="TransparentBoxOn">
                        
                  </div>
                  
            </div>

            <style jsx>
            {`
                @media (max-width: 500px){ 
                  .titleDiv{
                        max-height: 60px;
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