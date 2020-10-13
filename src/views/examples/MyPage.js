
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar4 from "components/Navbars/ExamplesNavbar4.js";
import Footer from "components/Footer/Footer.js";




let ps = null;

class MyPage extends React.Component {
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
        <ExamplesNavbar4 />
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

                               <h3 class="title">Charlie Bailey</h3>
                            </section>
                            <section>
                              <br/>
                              <ul role="tablist" class="flex-column nav-tabs-info nav">
                                <li class="nav-item">
                                  <a href="#pablo" class="active nav-link">
                                   <i class="tim-icons icon-single-02"/>
                                    "General"
                                  </a>
                                </li>
                                <hr class="line-info"/>
                                <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                    <i class="tim-icons icon-credit-card"/>
                                    "Billing"
                                  </a>
                                </li>
                                <hr class="line-info"/>
                                <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                   <i class="tim-icons icon-lock-circle"/>
                                    "Security"
                                  </a>
                                </li>
                                <hr class="line-info"/>
                                <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                   <i class="tim-icons icon-volume-98"/>
                                    "Notifications"
                                  </a>
                                </li>
                              </ul>
                            </section>
                            <br/>
                            <br/>
                            <br/>
                            <section>
                              <div class="progress-container progress-info">
                                <span class="progress-badge">Profile Completion</span>
                                <div class="progress">
                                  <div class="progress-bar" role="progressbar" 
                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                                    style={{width: "60%"}}>
                                    <span class="progress-value">60%</span>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div> 
                        </Col>
                        <Col className="ml-auto col-md-8">
                          <div className="section">
                            <div className="tab-content">
                              <div className="tab-pane active">
                                <div>
                                  <header>
                                    <h2 class="text-uppercase">General information</h2>
                                  </header>
                                  <hr className="line-info"/>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#firstName">First Name
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="firstName" name="firstName" required=""
                                        type="text" class="form-control" placeholder="Charlie"/>
                                    </div>
                                    </div>
                                  </Row>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#firstName">Last Name
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="firstName" name="firstName" required=""
                                        type="text" class="form-control" placeholder="Charlie"/>
                                      </div>
                                    </div>
                                  </Row>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels">I'm</label>
                                    </div>
                                    <Col>
                                    <select>
                                      <option selected value="gender">Gender</option>
                                      <option value="male">Male</option>                                                
                                      <option value="female">Female</option>
                                    </select>
                                    </Col>
                                    {/* <div className="align-self-center col-md-4">
                                      <div className="form-group">
                                        <div className="react-select react-select-info css-2b097c-container">
                                          <div className="react-select__control css-yk16xz-control">
                                            <div className="react-select__value-container css-1hwfws3">
                                              <div classNam="react-select__placeholder css-1wa3eu0-placeholder"></div>
                                              <div className="css-1g6gooi"> */}
                                              {/* <select>
                                                <option selected value="gender">Gender</option>
                                                <option value="male">Male</option>                                                
                                                <option value="female">Female</option>
                                              </select> */}
                                              {/* <div className="react-select__input" style={{display: "inline-block"/>
                                                <input autocapitalize="none" autocomplete="off" 
                                                autocorrect="off" id="react-select-2-input" spellcheck="false"
                                                tabindex="0" type="text" aria-autocomplete="list" value="" 
                                                style={{box-sizing: "content-box" width: "2px" background: "0px" center 
                                                border: "0px" font-size: "inherit" opacity: "1" outline: "0px" padding: "0px" color: "inherit"}}/>
                                                <div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px;
                                                overflow: scroll; white-space: pre; font-size: 14px; 
                                                font-family: Poppins, sans-serif; font-weight: 400; font-style: normal; 
                                                letter-spacing: normal; text-transform: none;"></div>
                                                </div> */}
                                              {/* </div>
                                            </div>
                                            <div class="react-select__indicators css-1wy0on6">
                                              <span class="react-select__indicator-separator css-1okebmr-indicatorSeparator">
                                              </span>
                                              <div aria-hidden="true" class="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer">
                                                <svg height="20" width="20" viewBox="0 0 20 20"
                                                aria-hidden="true" focusable="false" class="css-19bqh2r">
                                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 
                                                  3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 
                                                  0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 
                                                  0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 
                                                  0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div> 
                                      </div>
                                    </div> */}
                                  </Row>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels">Birth Date</label>
                                    </div>
                                    
                                    <div className="align-self-center col-md-8">
                                      <div className="form-group">
                                        <input placeholder="YYYY-MM-DD" type="text" class="form-control"/>
                                      </div>
                                    </div>
                                   
                                    {/* <Col>
                                      <select>
                                        <option selected value="month">Month</option>
                                        <option value="January">Male</option>                                                
                                        <option value="female">Female</option>
                                      </select>
                                    </Col>
                                    <Col>
                                      <select>
                                        <option selected value="gender">Gender</option>
                                        <option value="male">Male</option>                                                
                                        <option value="female">Female</option>
                                      </select>
                                    </Col>
                                    <Col>
                                      <select>
                                        <option selected value="gender">Gender</option>
                                        <option value="male">Male</option>                                                
                                        <option value="female">Female</option>
                                      </select>
                                    </Col> */}
                                  </Row>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#email">Email
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="email" name="email" required=""
                                        type="text" class="form-control" placeholder="aaa@gmail.com"/>
                                      </div>
                                    </div>
                                  </Row>
                                  <br/>
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#confirm email">Confirm Email
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="confirm email" name="confirm email" required=""
                                        type="text" class="form-control" placeholder=""/>
                                      </div>
                                    </div>
                                  </Row>
                                  <br/>
                                                                  
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#address">Your Address
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="address" name="address" required=""
                                        type="text" class="form-control" placeholder="서울특별시 구로구 "/>
                                      </div>
                                    </div>
                                  </Row>
                                  <br/> 

                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#phone">Phone Number
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="phone" name="phone" required=""
                                        type="text" class="form-control" placeholder="010-####-####"/>
                                      </div>
                                    </div>
                                  </Row>
                                  <br/>    
                                  
                                  <Row>
                                    <div className="align-self-center col-md-3">
                                      <label className="labels" for="#Nation">Nation
                                      </label>
                                    </div>
                                    <div className="align-self-center col-md-9">
                                      <div className="form-group">
                                        <input id="nation" name="nation" required=""
                                        type="text" class="form-control" placeholder="Republic Of Korea"/>
                                      </div>
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

export default MyPage;