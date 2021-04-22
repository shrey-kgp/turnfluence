import React from "react";
import { Col, Row} from "react-bootstrap";
class Page1 extends React.Component {
    render() {
        return (
        <div class="container" style={{marginTop: "5%", marginBottom: "4%", width: "100%"}}>
            <br/>           
                <Row >
                <Col xs lg="2">
                <br/><br/><br/>
                <img  src="/Page1/page1_logo.png" alt="shutter"></img><br></br>
                <Col lg={{  offset: 3 }}><img  src="/Page1/page1_logo_text.png" alt="shutter"></img></Col>
                </Col>
                <Col xs lg="2">
                <br/><br/><br/><br/>
                <img  src="/Page1/page1_arrow_up.png" alt="shutter"></img><br></br>
                <img  src="/Page1/page1_arrow_down.png" alt="shutter"></img>
                </Col>
                <Col xs lg="2">
                <img  src="/Page1/page1_brand_valuation_logo.png" alt="shutter"></img><br/>
                <Col lg={{  offset: 4 }}><img  src="/Page1/page1_brand_valuation_logo_text.png" alt="shutter"></img></Col><br/>
                <img  src="/Page1/page1_brand_equity_logo.png" alt="shutter"></img><br/>
                <Col lg={{  offset: 4 }}><img  src="/Page1/page1_brand_equity_logo_text.png" alt="shutter"></img></Col>
                </Col>
                <Col xs lg="2">
                <br/><br/><br/><br/>
                <img  src="/Page1/page1_arrow.png" alt="shutter"></img><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <img  src="/Page1/page1_arrow.png" alt="shutter"></img>
                </Col>
                <Col xs lg="4">
                <img  src="/Page1/page1_cost_based.png" alt="shutter"></img>
                <img  src="/Page1/page1_cost_based_text.png" alt="shutter"></img>
                <br/>
                <img  src="/Page1/page1_market_based.png" alt="shutter"></img>
                <img  src="/Page1/page1_market_based_text.png" alt="shutter"></img>
                <br/>
                <img  src="/Page1/page1_income_based.png" alt="shutter"></img>
                <img  src="/Page1/page1_income_based_text.png" alt="shutter"></img>
                <br/><br/><br/>
                <img  src="/Page1/page1_brand_image.png" alt="shutter"></img>
                <img  src="/Page1/page1_brand_image_text.png" alt="shutter"></img>
                <br/>
                <img  src="/Page1/page1_team_image.png" alt="shutter"></img>
                <img  src="/Page1/page1_team_image_text.png" alt="shutter"></img>
                <br/>
                <img  src="/Page1/page1_brand_logo.png" alt="shutter"></img>
                <img  src="/Page1/page1_brand_logo_text.png" alt="shutter"></img>
                <br/>
                <img  src="/Page1/page1_brand_awareness.png" alt="shutter"></img>
                <img  src="/Page1/page1_brand_awareness_text.png" alt="shutter"></img>
                </Col>    
                </Row>
        </div>            
        );
    }
}

export default Page1