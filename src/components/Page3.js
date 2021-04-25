import React from "react";
import { Row, Col } from 'react-bootstrap';

class Page3 extends React.Component {
 render() {
    return (
        <div class="container" style={{marginTop: "5%", marginBottom: "4%"}}>
        <br/>
             <Row>   
               <Col xs lg="5">
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
               <Col xs lg="7">
               <iframe title="page3" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0HdWHK_b4EvQRHPXQwOow3XGlNC6zHRPBITmjysYVZdJvvubCtmuonUXIbeU1wKhcTScT2mOlqVGm/pubhtml?widget=true&amp;headers=false" width="640" height="100%" frameborder="1" marginheight="1" marginwidth="1"></iframe>
               </Col>
               </Row>
            </div>
                
    );
 }
}

export default Page3;
