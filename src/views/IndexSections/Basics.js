/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
import { Link } from "react-router-dom";
import ImageButton from "components/UIComponents/imageButton3"

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Basics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {

  }
  render() {
    return (
        <Container>
          
         
          
          <div id="images">

          <Row>
            <Col md="1">
            <h1>
              NEW
            </h1>
            </Col>
            <Col md="9">
              <Button
                className="btn-simple btn-round"
                color="primary"
                type="button"
                Link tag={Link} to="/register-page"
              >
                + More
              </Button>
            </Col>
          </Row>
          
            <Row>

            <Row>
          {/* <ImageButton imagePath="assets/img/gucci.jpg" linkPage="/product-page" itemName="GUCCI Snake wallet" itemPrice="41 ETH"></ImageButton> */}
         
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/gucci4.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
            <p>GUCCI Snake wallet</p>
            <h5>41 ETH</h5>
        </Col>

        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page2';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/ballpen.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
            <p>MONTBLAC ballpen</p>
            <h5>9 ETH</h5>
        </Col>

        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page2';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/dior.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
            <p>Dior belt</p>
            <h5>17 ETH</h5>
        </Col>

        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/patek.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
            <p>patekphilippe watch</p>
            <h5>555 ETH</h5>
        </Col>

        </Row>

        
      
            </Row>

          {/* ---------------------------------------- */}
          <div class="space-70"></div>
          <Row>
            <Col md="1">
            <h1>
              OLD
            </h1>
            </Col>
            <Col md="9">
              <Button
                className="btn-simple btn-round"
                color="info"
                type="button"
                Link tag={Link} to="/landing-page"
              >
                + More
              </Button>
            </Col>
          </Row>


            <Row>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/air jordan old.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
            <p>Air Jordan shoes</p>
            <h5>33 ETH</h5>
        </Col>
              
        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/chanel old.jpg")}
              style={{ width: "250px" }}
             
            />
          </button>
                  <p>chanel bag</p>
                  <h5>37 ETH</h5>

              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/1111.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
                  <p>SAINT LAURENT pouch</p>
                  <h5>29 ETH</h5>
              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/bal.jpg")}
              style={{ width: "250px" }}
              
            />
          </button>
                  <p>balenciaga wallet</p>
                  <h5>49 ETH</h5>
              </Col>
            </Row>

          </div>

          <div class="space-70"></div>


        
        </Container>
      
    );
  }
}

export default Basics;
