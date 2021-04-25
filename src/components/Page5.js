import React from "react";
import {Row, Col} from 'react-bootstrap';

class Page5 extends React.Component {
 render() {
    return (
        <div id="Page5" class="container" style={{marginTop: "5%", marginBottom: "4%"}}>
        <br/>
             <Row>   
             <Col xs lg="5">    
             <img style={{height: "60%", width: "80%", marginTop: "40%"}} src="/HomePage/homepage_logo.png" alt="maze"></img> 
             <br/><br/>             
            </Col>
            <Col xs lg="7">
                <h2>CONTACT</h2>   
                <iframe title="page5" src="https://docs.google.com/forms/d/e/1FAIpQLSc5MaBzrHmyDR7LBhTVC3kA2gqtgCzllkw13abkwH4OlytFNQ/viewform?embedded=true" width="640" height="200%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>         
            </Col>
            </Row>            
        </div>        
    );
 }
}

export default Page5;
