import React from "react";
import {Row, Col} from 'react-bootstrap';

class Page5 extends React.Component {
 render() {
    return (
        <div class="container" style={{marginTop: "5%", marginBottom: "4%"}}>
        <br/>
             <Row>   
             <Col xs lg="4">
             <img style={{height: "100%", width: "80%"}} src="/HomePage/homepage_logo.png" alt="maze"></img> 
             <br/><br/>             
            </Col>
            <Col xs lg="8">
                <h2>CONTACT</h2>            
            </Col>
            </Row>            
        </div>        
    );
 }
}

export default Page5;
