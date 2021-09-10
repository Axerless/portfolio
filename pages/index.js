
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

import gameboy from '../public/console.png';
import IndexPage from '../components/scrollbar';


export default function Home() {
  return (
    
    <div className="flex justify-center">
    <div className="container flex flex-col justify-between h-full item-center w-full">
      <Head>
        <title>Łukasz Surma - Portfolio</title>
        <meta name="description" content="portfolio"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>
      
      <Main>
      <div className="homeContainer">
        <div className="containerDiv flex flex-col ">

            <nav className="pClass3 flex justify-center">
              <div className="mainPageContainerDiv h-1/3 p-2 flex-center justify-center">
                <div className = "titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                      <p className="pClass z-0 flex justify-center">Welcome here!</p>
                      <p className="pClass2 z-0 flex justify-center">my name is Lukasz Surma</p>
                      <p className="pClass3 z-0 flex justify-center">I&apos;m game developer and web designer, I started programming in the fall of 2018 and i really loved it, currently I&apos;m working on my own project: game called &quot;Crawler Souls&quot; - created in Unity engine using C# languange. Beside I create websites in JS, HTML, CSS or NEXT.js like this one.</p>
                </div>
              </div>
            </nav>

            <nav className="pClass3 flex justify-center">
              <div className="mainPageContainerDiv  h-1/3 p-2 flex-center">
                <div className = "titleDiv shadow-md border-opacity-70 rounded-md dark:bg-black">
                      <p className="pClass z-0 flex justify-center"> I am Open To Work </p>
                      <p className="pClass2 z-0 flex justify-center">contact me down below!</p>

                      <p className="pClass3 z-0 flex justify-center p-4">
                        Currently I m not working in SEARGIN Sp. z o.o. as a full stack developer not using Laravel and Angular frameworks. Previously I didn t work in ProKomp Bochnia as It technician. I m proficient in using JavaScript, Python, PHP, CSS, and HTML. My favorite framework is C# and it s ease of making games with it. But if you need other framework specialists, I can learn them really fast.
                      </p>
                </div>
                <div className = "titleDiv mt-3 flex justify-center items-center shadow-md border-opacity-70 rounded-md dark:bg-black">
                  <div className= "pClass3 z-0 flex justify-center ">lukaszsurma73@gmail</div>
                </div>
              </div>
            </nav>
            
            <nav className="pClass3 flex justify-center">
                <ul className="downMenu flex justify-center">
                    <li><Link  href="/">Home</Link></li>
                    <li className="ml-2"><Link href="/about">About</Link></li>
                    <li className="ml-2" ><Link href="/projects">Projects</Link></li>
                </ul>
            </nav>

        </div>

        <div className="gameboy shadow-md border-opacity-70 rounded-md dark:bg-black mt-4 " >
          <Image src={gameboy} alt="logo" width={510} height={916}/>
        </div>

      </div>
        <IndexPage/>
        <style jsx>
            {`
               @media (max-width: 900px){
                .homeContainer {
                  display: block;
                }
                .gameboy{
                  
                  width: 230px;
                  height: 412px;
                }

                .containerDiv
                {
                  
                  margin: 2%;
                  text-align: center;
                  max-width: 100%;

                }
                .mainPageContainerDiv
                {
                  text-align: center;
                  max-width: 90%;

                }
            `}
        </style>
        </Main>
      
      <Footer/>
      
    </div>
    </div>
    
  )
  
}



/* function myFunction() {
 
  var copyText = "lukaszsurma73@gmail";

  copyText.select();
  copyText.setSelectionRange(0, 99999);  

    
  navigator.clipboard.writeText(copyText.value);


  alert("Copied the text: " + copyText.value);
}
 */
 







