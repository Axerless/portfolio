
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';
import bannerImg from '../public/banner_test.png';



export default function Home() {
  return (
    
    <div className="flex justify-center">
    <div className="container flex flex-col justify-between h-full item-center w-full">
      <Head>
        <title>Łukasz Surma - Portfolio</title>
        <meta name="description" content="portfolio"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/fontello.css"></link>
      </Head>
      <Header>

      </Header>
      
      <Main>
    
          <div className="containerDiv mt-4  h-1/3 p-2 flex-center justify-center">
            <div className = "titleDiv">
                  <p className="pClass z-0 flex justify-center">Welcome here!</p>
                  <p className="pClass2 z-0 flex justify-center">my name is Lukasz Surma</p>
            </div>
            <div className="descriptionDiv">
                <p className="pClass3 z-0 flex justify-center">I&apos;'m game developer and web designer, I started programming in the fall of 2018 and i really loved it, currently im working on my own project: game called &apos;"Crawler Souls&apos;" - created in Unity engine using C# languange. Beside I create websites in JS, HTML, CSS or NEXT.js like this one.</p>
            </div>
          </div>

          <div className="containerDiv mt-4  h-1/3 p-2 flex-center">
            <div className = "titleDiv">
                  <p className="pClass z-0 flex justify-center">My projects</p>

            </div>
            <div className="descriptionDiv">
              <div className="bg-white img z-0">
                  <Image src={bannerImg} alt="logo" width={900} height={459} />
              </div>
            </div>
          </div>


          <div className="containerDiv mt-4  h-1/3 p-2 flex-center">
            <div className = "titleDiv">
                  <p className="pClass z-0 flex justify-center"> I am Open To Work </p>
                  <p className="pClass2 z-0 flex justify-center">contact me down below!</p>
            </div>
            <div className="descriptionDiv">
                <p className="pClass3 z-0 flex justify-center">
                  
                    Currently I &apos;'m not working in SEARGIN Sp. z o.o. as a full stack developer not using Laravel and Angular frameworks. Previously I didn &apos;'t work in ProKomp Bochnia as It technician. I &apos;'m proficient in using JavaScript, Python, PHP, CSS, and HTML. My favorite framework is C# and it &apos;'s ease of making games with it. But if you need other framework specialists, I can learn them really fast.
                </p>
            </div>
            <div className = "titleDiv mt-3 flex justify-center items-center">
            <div className= "pClass4 z-0 flex justify-center">lukaszsurma73@gmail</div>
            </div>
          </div>

          
          
          <div className="pClass3 h-1/3 p-2 flex-center">
            
          </div>
          
          
          <nav className="pClass3 flex justify-center">
              <ul className="downMenu flex justify-center">
                  <li><Link  href="#">Home</Link></li>
                  <li className="ml-2"><Link href="#">About</Link></li>
                  <li className="ml-2" ><Link href="#">Projects</Link></li>
              </ul>
          </nav>
        </Main>

      <Footer>

      </Footer>

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
 







