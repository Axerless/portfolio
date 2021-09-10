import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import ChangeBackground from '../components/mouseOver'


export default function About() {
return (
<div className="flex justify-center">
    <div className="container flex flex-col justify-between h-full item-center w-full">
    <Header>

    </Header>
    <Main>
        <div className=" mt-4 h-full p-2 ">
            <div className = "titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                  <p className="pClass z-0 flex justify-center">About me</p>
            </div>
            <div id="aboutConainer" className="mb-4">
                    <div className="aboutImg portrait shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">

                    </div>

                    <div className="aboutDescriptionDiv justify-end shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                        <p className="pClass3 z-0 flex justify-left">Name: Łukasz Surma</p>
                        <p className="pClass3 z-0 flex justify-left">Age: 20</p>
                        <p className="pClass3 z-0 flex justify-left">Nationality: Poland</p>
                        <p className="pClass3 z-0 flex justify-left">Occupation: IT College Graduate - Unemployed</p>
                    </div>
                    
            </div>
            <div className = "titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                <p className="pClass3 z-0 flex justify-left p-2 ">Making Games: since 2010, when I was 10 I did my first ever 2D platform game, it was simple and made in multimedia fusion 2, but I really liked it, not only game but the whole procces, when you take your idea and it&apos;s becoming real: from code programming to the texture design, assets and music. Back then I wanted to create more games but the only thing that held me back from larger projects was my lack of programming skills so after several years I started learning C++, Java,JS, HTML, CSS etc. and after getting acquainted in programming, I started creating my own game in C# languange using Unity</p>
            </div>
            
        </div>
        
        <div className=" mt-4 h-full p-2 ">
            <div className = "titleDiv shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                <p className="pClass z-0 flex justify-center">Cotact and Media</p>
            </div>
            <div id="aboutConainer" className="mb-4">
                <div id="ytImg" className="aboutImg ytPortrait shadow-md bg-white border-opacity-70 rounded-md dark:bg-black">
                    
                </div>
                <ChangeBackground></ChangeBackground>
            </div>
            
        </div>

        <style jsx>
            {`
               @media (max-width: 900px){
                #aboutConainer {
                    
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
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
  
    </Main>

    <Footer>

    </Footer>
        
    </div>

</div>
        
        
)
    
}