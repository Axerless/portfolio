import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../public/logo.png'
import bannerImg from '../public/banner_test.png'
import ytLogo from '../public/yt_logo.png'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className=" mx-96">
    <div class="container" className="flex flex-col justify-between h-full item-center">
      <Head>
        <title>tytul strony</title>
        <meta name="description" content="yooooooooooo" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/fontello.css"></link>
      </Head>
      
      <header id="headerBg" className="sticky top-0 w-full border-b-2 border-black justify-between h-32 mb-5 flex z-10">
       <nav className="justify-start items-center flex">
           <ul className="menu h-10 w-full flex">
              <li id="homeButton" className=" pb-2 flex-center flex ml-4"><a href="#">Home</a></li>
              <li id="projButton" className="flex-center ml-2 flex"><a href="#">Projects</a></li>
              <li id="homeButton" className="flex-center ml-2 flex"><a href="#">About</a></li>
           </ul> 
       </nav>
       
        
      </header>
      <main className="main h-full">
        <p className="pClass z-0 flex justify-center">Welcome here!</p>
        
        <div className="img z-0">
          
          </div>
          <div className="img z-0">
          <Image src={bannerImg} alt="logo" width={900} height={459} />
          </div>

        <div className="h-1/3 p-2 flex-center">
            <p>I started programming in the fall of 2016 when me and my friends banded together to make an Indie game on local Game Jam in Rzeszów, we made the &quot;JSSC a game about surviving the tsunami , and got second place. It was written in GDScript in Godot engine and was a start to my little hobby which revolves around making indie games.</p>
            <p>I started programming in the fall of 2016 when me and my friends banded together to make an Indie game on local Game Jam in Rzeszów, we made the &quot;JSSC a game about surviving the tsunami , and got second place. It was written in GDScript in Godot engine and was a start to my little hobby which revolves around making indie games.</p>
        </div>

        <div className="h-1/3 p-2 flex-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        <div className="h-1/3 p-2 flex-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        <div className="h-1/3 p-2 flex-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="h-1/3 p-2 flex-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        
        <nav className="justify-start items-center flex" id="topnav">
            <ul className="downMenu flex justify-center">
                <li><a className="ml-2" href="#">Home</a></li>
                <li><a className="ml-2" href="#">About</a></li>
                <li><a className="ml-2" href="#">Projects</a></li>
            </ul>
        </nav>
      </main>
      

      
      <footer id="headerBg" className=" border-black bg-white flex-col flex items-center justify-between h-1/6 w-full bottom-0">
        <hr className="w-full border-1 border-black dark:border-gray-800 mb-8" />
        
        <div className="h-30 justify-end mb-2 flex mr-2">
        <a href="#" className="icon" target="_blank">
            <svg aria-hidden="true" className="h-8" data-icon="github" data-prefix="fab" viewBox="0 0 496 512"><path fill="currentColor" d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 000 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 01126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 00168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8l3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"/></svg>
        </a>
        <a href="#" className="icon" target="_blank">
            <svg viewBox="0 0 24 24" className="h-8"><path d="M24 5h-3l2-2-3 1a5 5 0 00-8 4C8 8 4 6 2 3c-2 2-1 5 1 7L1 9c0 2 2 5 4 5H3c0 2 2 3 4 3-2 2-4 3-7 3l8 2c9 0 14-8 14-15l2-2z"/></svg>
        </a>
        <a href="#" className="yticon" target="_blank">
            <Image src={ytLogo} alt="logo" width={42} height={30} />
        </a>
      </div>
         <div className=" my-2">
          <Image src={logoImg} alt="logo" width={97} height={48} />
          </div>
          
      </footer>

    </div>
    </div>
  )
}
