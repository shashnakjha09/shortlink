import React from 'react'
import "./style.css"
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap";
function Footer1() {
    return (
        <>
            <Container fluid className="footer1">
                <Container>
                     <p className="Boost">Boost your link today</p>
                </Container>

                <Container>
                      <Button id="button4">Get Started</Button>
                </Container>
            </Container>
        </>
    )
}

export default Footer1
