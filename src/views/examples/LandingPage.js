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
import React ,{ Component }  from "react";
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
import ExamplesNavbar2 from "components/Navbars/ExamplesNavbar2.js";
import Footer from "components/Footer/Footer.js";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ImageButton from "components/UIComponents/imageButton2"

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
        <ExamplesNavbar2 />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
              <Row>
          <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>
          <Col className="item"><h1>OLD PRODUCT</h1></Col>
          <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>
        </Row>
        {/* <Row>
          <Col className="item"><hr style={{width: '100%', height: 2, Align: "center"}}/></Col>
          <video loop="loop" autoPlay="autoplay" muted="muted" webkit-playsInline="webkit-playsinline" playsInline="playsinline" >
                  <source src ={require("assets/video/videoplayback.mp4")}></source>
                </video>
          <Col className="item"><hr style={{width: '100%', height: 2, Align: "center"}}/></Col>
        </Row> */}
         <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We keep your coin <br />
                    <span className="text-white">secured</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/etherum.png")}
                  />
                </Col>
              </Row>
        <Row>
                <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/>
                  <div button class="btn-simple btn btn-success" style={{float: 'right'}}>
                    <Link to="register-old"> 
                    <font color="cyan">등록</font></Link></div>
                </Col>
              </Row>
              <Row>
              <font size="150" color="white" > &nbsp; &nbsp; &nbsp; ★</font>
              </Row>
        <Row>
        <font size="150" color="white " > &nbsp; &nbsp; TOP 8</font>
        </Row>


        <Row>
        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Product-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/air jordan old.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Product-page"
            />
          </button>
            <p>Air Jordan shoes</p>
            <h5>33 ETH</h5>
        </Col>

        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/monc old.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
            <p>Moncler padding</p>
            <h5>44 ETH</h5>
        </Col>


              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/rolex old.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
            <p>rolex watch</p>
            <h5>102 ETH</h5>
        </Col>

        <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/chanel old.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
                  <p>chanel bag</p>
                  <h5>37 ETH</h5>

              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/1111.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
                  <p>SAINT LAURENT pouch</p>
                  <h5>29 ETH</h5>
              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/bal.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
                  <p>balenciaga wallet</p>
                  <h5>49 ETH</h5>
              </Col>

              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/Register-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/kenzo.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/Register-page"
            />
          </button>
                  <p>kenzo hood</p>
                  <h5>22 ETH</h5>
              </Col>

              
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
          <button type="button" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='/landing-page';
          }}>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/bale.jpg")}
              style={{ width: "250px" }}
              Link tag={Link} to="/landing-page"
            />
          </button>
                  <p>valentino padding</p>
                  <h5>107 ETH</h5>
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


                
                {/* <div className="register-bg" /> */}
                {/* <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                /> */}
               { <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />}
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
