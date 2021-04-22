import React from "react";
import { Container } from 'react-bootstrap';

class HomePage extends React.Component {
 render() {
    return (
        <Container> 
            <br/>           
            <img style={{height: "40%", width: "40%"}} src="/HomePage/homepage_logo.png" alt="maze"></img> 
            <h2>A complete brand index calculator</h2>
            <br/><br/><br/>
            <img style={{height: "15%", width: "15%"}} src="/HomePage/homepage_polygon.png" alt="maze"></img> 
            <br/>
            <h3 style={{fontSize: "100%"}}>Start exploring your brand now!</h3>
        </Container>                
    );
 }
}

export default HomePage;