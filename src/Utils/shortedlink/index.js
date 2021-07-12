import React from 'react'
import "./style.css"
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap"
function Shortedlink() {
    return (
        <>
            <Container className="outputmain">
                <Container className="input">
                     <p>https://facebook.com/shashank09/story.php/highlights/id_894038478308489409</p>
                     <hr className="hr"></hr>
                </Container>
                <Container className="output">
                    <Container className="outputlink">
                        <p id="Linktobecopy">https://rel.link/k4lwo5md</p>
                    </Container>
                    <Container className="outputcopybutton">
                        <Button id="button3">Copy</Button>
                    </Container>
                </Container>
            </Container>
            
        </>
    )
}

export default Shortedlink
