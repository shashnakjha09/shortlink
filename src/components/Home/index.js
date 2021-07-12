import React from 'react'
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap"
import "./Homestyle.css"
import Homepageimage from "../../Images/Home_image.svg"
import Shortedlink from "../../Utils/shortedlink";
import Advancestatics from "../../Utils/AdvanceStatics"
import Footer1 from "../../Utils/footerSection1"
import Footer from "../../Utils/footer2"
function Home() {
    return (
        <>
        <br></br>
        <Container>
            <Container className="main">
                <Container>
                     <h1 id="heading">More then just shorter Links</h1>
                     <p id="paragraph">Build your brand's recogination and get detailed insights on how your links are performing</p>
                     <Button variant="dark" id="button">Get Started</Button>{' '}
                </Container>

                <Container className="homemainimage">
                      <img src={Homepageimage} alt="homeimage" />
                </Container>
            </Container>
            
            <Container className="linksearchbox">
                <Container>
                <input
                type="placeholder" 
                className="searchfield"/>
                </Container>
                <Container>
                <Button type="button" id="button2">Shorten it</Button>
                </Container>
            </Container>
        </Container>
        <br></br>
        <Container>
            <Shortedlink/>
        </Container>
        
        <Container>
            <Advancestatics/>
        </Container>
        <Container fluid>
            <Footer1/>
        </Container>
        
        <Container fluid>
            <Footer/>
        </Container>

        </>
        
    )
}

export default Home
