import React from "react";
import {
    Button,
    Card,
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



class ImageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: props.imagePath,
            linkPage : props.linkPage,
            itemName: props.itemName,
            itemPrice: props.itemPrice
        };
    }

    render() {
        return(
            <>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href=this.state.linkPage;
                }}>
                    <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/gucci4.jpg")}
                    style={{ width: "250px"}}
                    />
                </button>
                <p>{this.state.itemName}</p>
                <h5>{this.state.itemPrice}</h5>
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href=this.state.linkPage;
                }}>
                    <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/ballpen.jpg")}
                    style={{ width: "250px"}}
                    />
                </button>
                <p>MONTBLAC ballpen</p>
                  <h5>9 ETH</h5>
            </Col>

            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href=this.state.linkPage;
                }}>
                    <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/dior.jpg")}
                    style={{ width: "250px"}}
                    />
                </button>
                <p>Dior belt</p>
                  <h5>17 ETH</h5>
            </Col>

            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <button type="button" onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href=this.state.linkPage;
                }}>
                    <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/patek.jpg")}
                    style={{ width: "250px"}}
                    />
                </button>
                <p>patekphilippe watch</p>
                  <h5>555 ETH</h5>
            </Col>

            
            </>

                
        )

    }
}
export default ImageButton;