
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
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("mypage");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("mypage");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar4 />
        <div className="wrapper">
            <div className="section">
                <div className="container">
                    <Row>
                        <Col className="col-md-3">
                            <section className="text-center">
                              <div class="fileinput text-center">
                                <input type="file"/>
                                <div className="thumbnail img-circle">
                                  <img src={require("assets/img/smile.jpg")} alt="..."/>
                                </div>
                                <div>
                                  <button type="button" class="btn-round btn btn-default">Add Photo</button>
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