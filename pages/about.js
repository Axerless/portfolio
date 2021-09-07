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
            <div className = "titleDiv">
                  <p className="pClass z-0 flex justify-center">About me</p>
            </div>
            <div id="aboutConainer" className="mb-4">
                    <div className="aboutImg portrait">

                    </div>

                    <div className="aboutDescriptionDiv justify-end">
                        <p className="pClass3 z-0 flex justify-left">Name: Łukasz Surma</p>
                        <p className="pClass3 z-0 flex justify-left">Age: 20</p>
                        <p className="pClass3 z-0 flex justify-left">Nationality: Poland</p>
                        <p className="pClass3 z-0 flex justify-left">Occupation: IT College Graduate - Unemployed</p>
                    </div>
            </div>
            
        </div>
        
        <div className=" mt-4 h-full p-2 ">
            <div className = "titleDiv">
                <p className="pClass z-0 flex justify-center">Cotact and Media</p>
            </div>
            <div id="aboutConainer" className="mb-4">
                <div id="ytImg" className="aboutImg ytPortrait">
                    
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