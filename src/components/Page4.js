import React from "react";
import {Row, Col} from 'react-bootstrap';

class Page4 extends React.Component {
 render() {
    return (
        <div class="container" style={{marginTop: "5%", marginBottom: "4%"}}>
        <br/>
             <Row>   
             <Col xs lg="5">
                <img style={{ marginTop: "15%"}} src="/Page2/brand_equity_logo_text.png" alt="shutter"></img><br/>
                <br/><br/>
                <img src="/Page2/glassdoor_logo.png" alt="shutter"></img>
                <img src="/Page2/twitter_logo.png" alt="shutter"></img>
                <img src="/Page2/facebook_logo.png" alt="shutter"></img>
                <br></br>
                <br/><br/>
                <img src="/Page2/enter_name_button.png" alt="shutter"></img>
                <span><img  src="/Page2/enter_name_text.png" alt="shutter"></img></span>
                <br/><br/><br/>
                <span><img src="/Page2/upload_button.png" alt="shutter"></img></span>
                <img  src="/Page2/upload_text.png" alt="shutter"></img>
                <br/><br/><br/>
                <img src="/Page2/get_brand_equity_button.png" alt="shutter"></img>
                <img  src="/Page2/get_brand_equity_text.png" alt="shutter"></img><br/><br/><br/>             
            </Col>
            <Col xs lg="7">
                <iframe title="page4" src="https://docs.google.com/forms/d/e/1FAIpQLScuZscBXVjCjUNMPvEBe7LYdew495tGMKak3sWt-TJ-uPj40Q/viewform?embedded=true" width="550" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Col>
            </Row>            
        </div>        
    );
 }
}

export default Page4;
