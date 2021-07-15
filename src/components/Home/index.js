import React , {useState} from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap"
import "./Homestyle.css"
import Homepageimage from "../../Images/Home_image.svg"
import Advancestatics from "../../Utils/AdvanceStatics"
import Footer1 from "../../Utils/footerSection1"
import Footer from "../../Utils/footer2"

import {getShorteddata} from "../../Getdata"
function Home() {
       const[input , setInput] = useState('');
       const[output , setOutput] = useState('');
       const [isCopied, setIsCopied] = useState(false);

       const onCopyText = () => {
         setIsCopied(true);
         setTimeout(() => {
           setIsCopied(false);
         }, 1000);
       };

    const getData = async () => {
        try{
            const data1 = await getShorteddata(input);
            setOutput(data1.result);
            // setInput('');

        }catch(err){
            console.log(err.message);
        }
    }

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
                className="searchfield"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
                </Container>
                <Container>
                <Button type="button" id="button2" onClick={() => getData()}>Shorten it</Button>
                </Container>
            </Container>
        </Container>
        <br></br>
        <Container>
        <Container className="outputmain">
                <Container className="input">
                     <p>{output ? input : "facebook.com"}</p>
                     <hr className="hr"></hr>
                </Container>
                
                   <Container className="output">
                    <Container className="outputlink">
                        <p id="Linktobecopy">{output.short_link ? output.short_link : "shrtco.de/pNz1io" }</p>
                    </Container>
                    <Container className="outputcopybutton">
                    <CopyToClipboard text={output.short_link} onCopy={onCopyText}>
                    <div className="copy-area">
                        <Button id="button3">Copy</Button>
                        <span className={`copy-feedback ${isCopied ? "active" : "d-none"}`}>
                          Copied!
                        </span>
                        </div>
                        </CopyToClipboard>
                    </Container>
                </Container>
                
            </Container>
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
