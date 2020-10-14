
import React , { Component } from "react";

import { Line } from "react-chartjs-2";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import MypageNavbar from "components/Navbars/MypageNavbar.js";
import Footer from "components/Footer/Footer.js";
import 'pure-react-carousel/dist/react-carousel.es.css';
import bigChartData from "variables/charts.js";
import { Link } from "react-router-dom";



class Mypage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("my-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("my-page");
  }

  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      file : [],
      image : require("assets/img/smile.jpg")
    }
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.state.file.push(file)
     
     
      this.setState({image : reader.result});
    }
    reader.readAsDataURL(file);
  }
  state = {};
  render() {
    
    return (

      <>
       <MypageNavbar />
           {/* <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />

            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            /> */}
       
       <div className="wrapper">
           <div className="section">
               <div className="container">
                   <Row>
                   <Col className="col-md-3">
                    <div className="section">
                        <section className="text-center">
                            <div className="fileinput text-center">
                                {/* <input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif' 
                                  name='profile_img' onChange={this.handleFileOnChange}/> */}
                               
                            <div className="thumbnail img-circle">
                            <img src={this.state.image} alt="..."></img>
                            </div>
                            <div>
                            <label type="button" for="ex_file" className="btn-round btn btn-default">
                              
                              Add Photo
                              <input type="file" id="ex_file" style={{width:"0px",}} accept='image/jpg,impge/png,image/jpeg,image/gif' 
                                  onChange={this.handleFileOnChange}/>
                            </label>
                                 
                            </div>
                            </div>
                            <h3 className="title">Charlie Bailey</h3>
                        </section>

                        <section>
                        <br/>
                        <ul role="tablist" class="flex-column nav-tabs-info nav">
                          <li className="nav-item">
                            <a href="#pablo" className="active nav-link">
                              <i className="tim-icons icon-single-02">
                              </i>
                             &nbsp;  General 
                            </a>
                          </li>
                          <hr className="line-info" />
                          <li className="nav-item">
                            <a href="#pablo" className="nav-link">
                              <i className="tim-icons icon-credit-card">
                              </i>
                                 &nbsp;  Billing 
                            </a>
                          </li>
                          <hr className="line-info"/>
                          <li className="nav-item">
                            <a href="#pablo" className="nav-link">
                            <i className="tim-icons icon-lock-circle"></i>
                              &nbsp;  Security 
                            </a>
                          </li>

                          <hr className="line-info"/>
                          <li className="nav-item">
                            <a href="#pablo" className="nav-link">
                            <i className="tim-icons icon-volume-98"></i>
                             &nbsp;  Notifications 
                            </a>
                          </li>
                          
                        </ul>
                        </section>
                        <br/><br/><br/>
                        <section>
                          <div className="progress-container progress-info">
                            <span className="progress-badge">프로필 수정을 완료해주세요</span>
                          </div>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: "100%"}}>
                              {/* <span className="progress-value">100%</span> */}
                            </div>
                          </div>
                        </section>
                        
                    </div>
                   </Col>
                  
                  <Col className="m1-auto col-md-8">
                    <div className="section">
                      <div className="tab-content">
                        <div className="tab-pane active">
                          <div>
                            <header>
                              <h2 className="text-uppercase">General information</h2>

                            </header>
                            <hr className="line-info"/>
                            <br/>

                            <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels" for="#firstName">First Name</label>
                              </Col>
                              <Col className="align-self-center col-md-8">
                                <div className="form=group">
                                  <input id="firstName" name="firstName" type="text" className="form-control" placeholder="Charlie">

                                  </input>
                                </div>
                              </Col>
                              </Row>
                              <br/>
                           

                           <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels" for="#lastName">Last Name</label>
                                </Col>
                                <Col className="align-self-center col-md-8">
                                <div className="form=group">
                                  <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Bailey"></input>
                                </div>
                              </Col>
                              </Row>
                              <br/>

                            <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                  성별
                                </label>
                              </Col>

                              <Col className="align-self-center col-md-4">
                                <div className="form-group">


                                <select>
                                <option seleted value="Gender">Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                
                                </select>

                              
                              

                                  {/* <div className="react-select react-select-info css-2b097c-container">
                                    <div className="react-select__control css-yk16xz-control">
                                    <div className="react-select__value-container css-1hwfw3">
                                      <div className="react-select__placeholder css-1wa3eu0-placeholder">Gender</div>

                                    <div className="css-1g6gooi">
                                      <div className="react-select__input" style={{display: "inline-blcok"}}>

                                      <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" 
                                      style={{boxSizing: "content-box",width: "2px",background: "0px center",border: "0px",fontSize: "inherit",opacity: "1",outline: "0px" ,padding: "0px" ,color: "inherit"}}></input>
                                    
                                    <div style={{position: "absolute",
                            top: "0px",
                            left: "0px",
                            visibility: "hidden",
                            height: "0px",
                            overflow: "scroll",
                            whiteSpace: "pre",
                            fontSize: "14px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "400",
                            fontStyle: "normal",
                            letterSpacing: "normal",
                            textTransform: "none"}}></div>


                                      </div>
                                    </div>

                                    </div>

                                    <div className="react-select__indicators css-1wy0on6">

                                    </div>

                                    </div>
                                  </div> */}

                                  
                                 </div>
                              </Col>
                              </Row>
                              <br/>


                              <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                  Birth Date
                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="YYYY-MM-DD"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>
                                   </Row>
                                   <br/>
                              
                                   <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                  Email
                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="charile.bailey@gmail.com"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>

                                   </Row>
                                   <br/>

                                   <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                Confirm Email

                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="charile.bailey@gmail.com"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>

                                   </Row>
                                   <br/>

                                   <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                your Address

                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="서울특별시 ○○구 ○○동(번지주소 포함해서 적어주세요)"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>

                                   </Row>
                                   <br/>

                                   <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                Phone Number

                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="010-****-****(-포함)"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>

                                   </Row>
                                   <br/>

                                   <Row>
                              <Col className="align-self-center col-md-3">
                                <label className="labels">
                                Country

                                </label>
                              </Col>

                          
                              <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="Korea republic of"
                                        type="text" class="form-control"/>
                                      </div>
                                    </div>

                                   </Row>
                                   <br/>

                        <Row>


                          <Col className="col-md-9">

                          <div>
                            <Link to="Landing-page"> 
                          <button type="button" class="btn btn-info" style={{float: 'right'}}>Save Changes</button>
                          </Link>
                          </div>
                                  
                            {/* <div>    
                            <Link to="components"> 
                          <button type="button" class="btn-simple ml-1 btn btn-info" style={{float: 'right'}}>Cancel</button>
                          </Link>
                          </div> */}
                          </Col>

                          <div>    
                            <Link to="components"> 
                          <button type="button" class="btn-simple ml-1 btn btn-info" style={{float: 'right'}}>Cancel</button>
                          </Link>
                          </div> 

                          

    
                          
                        </Row>
                              

                                




                           
                            
                    
                        
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                   </Row>
               </div>
           </div>

       </div>


         

             
          <Footer />
        
        
      </>
    );
  }
}

export default Mypage;