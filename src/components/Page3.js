import React from "react";
import { Row, Col } from 'react-bootstrap';

class Page3 extends React.Component {
 render() {
    return (
        <div class="container" style={{marginTop: "5%", marginBottom: "4%"}}>
        <br/>
             <Row>   
               <Col xs lg="4">
                <img src="/Page2/brand_valution_logo_text.png" alt="shutter"></img>
                <br/><br/>
                <img src="/Page2/database_button.png" alt="shutter"></img>
                <img src="/Page2/database_text.png" alt="shutter"></img>
                <br/><br/>
                <img src="/Page2/choose_method_button.png" alt="shutter"></img>
                <img src="/Page2/choose_method_text.png" alt="shutter"></img>
                <br></br>
                <img src="/Page2/get_brand_valuation_button.png" alt="shutter"></img>
                <img src="/Page2/get_brand_valuation_text.png" alt="shutter"></img><br/><br/><br/>             
               </Col>
            </Row>
            </div>
                
    );
 }
}

export default Page3;
