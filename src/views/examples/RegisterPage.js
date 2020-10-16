
import React , { Component } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ImageButton from "components/UIComponents/imageButton"

class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>
                  <Col className="item"><h1>NEW PRODUCT</h1></Col>
                  <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>
                </Row>
                <Row>
                  <Col className="item"><hr style={{width: '100%', height: 2, Align: "center"}}/></Col>
                  <video loop="loop" autoPlay="autoplay" muted="muted" webkit-playsInline="webkit-playsinline" playsInline="playsinline" >
                          <source src ={require("assets/video/newproduct_nike_video.mp4")}></source>
                        </video>
                  <Col className="item"><hr style={{width: '100%', height: 2, Align: "center"}}/></Col>
                </Row>

          
                <Row>
                  <font size="150" color="white" > &nbsp; &nbsp; &nbsp; ★</font>
                </Row>
                <Row>
                  <font size="150" color="white " > &nbsp; &nbsp; TOP 8</font>
                </Row>

                {/* top1-4 */}
                  {/* <ImageButton imagePath="assets/img/guccci.jpg" linkPage="/Product-page" itemName="GUCCI Snake wallet" itemPrice="41 ETH"></ImageButton> */}
                <Row>
                    <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                      <button type="button" onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href='/Product-page';
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
                                                    window.location.href='/product-page';
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
                
                {/* top5-8 */}
                <Row>
                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <button type="button" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='/product-page';
                    }}>
                      <img
                        alt="..."
                        className="img-fluid rounded shadow-lg"
                        src={require("assets/img/tagheuer.jpg")}
                        style={{ width: "250px" }}
                        
                      />
                    </button>
                      <p>TAGHeuer watch</p>
                      <h5>78 ETH</h5>
                  </Col>

                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <button type="button" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='/product-page';
                    }}>
                      <img
                        alt="..."
                        className="img-fluid rounded shadow-lg"
                        src={require("assets/img/Maison.jpg")}
                        style={{ width: "250px" }}
                        
                      />
                    </button>
                      <p>maison tshirts</p>
                      <h5>12 ETH</h5>
                  </Col>

                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <button type="button" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='/product-page';
                    }}>
                      <img
                        alt="..."
                        className="img-fluid rounded shadow-lg"
                        src={require("assets/img/prada.jpg")}
                        style={{ width: "250px" }}
                        
                      />
                    </button>
                      <p>prada backpack</p>
                      <h5>28 ETH</h5>
                  </Col>

                  <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                    <button type="button" onClick={(e) => {
                                                  e.preventDefault();
                                                  window.location.href='/product-page';
                    }}>
                      <img
                        alt="..."
                        className="img-fluid rounded shadow-lg"
                        src={require("assets/img/Lui.jpg")}
                        style={{ width: "250px" }}
                        
                      />
                    </button>
                      <p>Louis vuitton clutch</p>
                      <h5>97 ETH</h5>
                  </Col>
                </Row>

                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />

                  </Col>
                </Row>
                
                {/* 보라색상자 씌우기 */}
                <div>
                    {/* <div className="register-bg" /> */}
                    {/* <div
                      className="square square-1"
                      id="square1"
                      style={{ transform: this.state.squares1to6 }}
                    /> */}
                    {/* <div
                      className="square square-2"
                      id="square2"
                      style={{ transform: this.state.squares1to6 }}
                    /> */}
                    
                    <div
                      className="square square-3"
                      id="square3"
                      style={{ transform: this.state.squares1to6 }}
                    />
                    {/* <div
                      className="square square-4"
                      id="square4"
                      style={{ transform: this.state.squares1to6 }}
                    /> */}
                    <div
                      className="square square-5"
                      id="square5"
                      style={{ transform: this.state.squares1to6 }}
                    />
                    <div
                      className="square square-6"
                      id="square6"
                      style={{ transform: this.state.squares1to6 }}
                      />
                  </div>
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default RegisterPage;
