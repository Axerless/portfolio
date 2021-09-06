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

            <div className="flex justify-between mb-4">
                    <div className="aboutImg portrait">

                    </div>

                    <div className="aboutDescriptionDiv">
                        <p className="pClass3 z-0 flex justify-left">Name: Łukasz Surma</p>
                        <p className="pClass3 z-0 flex justify-left">Age: 20</p>
                        <p className="pClass3 z-0 flex justify-left">Nationality: Poland</p>
                        <p className="pClass3 z-0 flex justify-left">Occupation: IT College Graduate - Unemployed</p>
                    </div>
            </div>
            <div className = "titleDiv">
                  <p className="pClass z-0 flex justify-center">Cotact and Media</p>
            </div>
            <div className="flex justify-between">
                    <div id="ytImg" className="aboutImg ytPortrait">

                    </div>
                    <ChangeBackground></ChangeBackground>
            </div>
        </div>
  
    </Main>

    <Footer>

    </Footer>
        
    </div>

</div>
        
        
)
    
}