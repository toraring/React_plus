import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import ExamplesNavbar2 from "components/Navbars/ExamplesNavbar2.js";
// import TextareaAutosize from 'react-textarea-autosize';
// import MultiSelect from "react-multi-select-component";
// import ReactDOM from "react-dom";




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



class RegisterOld extends React.Component {
  
  // 여러 이미지 업로드 및 미리보기
  constructor(props) {
    super(props);
    this.state = {
      file : [],
      previewURL : []
    }
  }

  
  handleFileOnChange = (event) => {
    event.preventDefault();
    if(this.state.previewURL.length >=3){
      alert("더 이상은 무리데쓰");
      return;
    }
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.state.file.push(file)
      this.state.previewURL.push(reader.result)
      /*this.setState({
        file : file,
        previewURL : reader.result
      })*/
      console.log(this.state.previewURL)
      this.forceUpdate()
    }
    reader.readAsDataURL(file);
  }

  state = {};
  render() {
    let profile_preview =[];
      let i = 0;
      for(let i=0 ;i<3;i++){
        const element = this.state.previewURL[i];
        profile_preview.push(<img style={{maxWidth:'200px'}}  src={element}></img>)
        
      }
      

        
    // if(this.state.file.length > 0){
    //   for (let i = 0; i < this.state.previewURL.length; i++) {
    //     const element = this.state.previewURL[i];
    //     profile_preview.push(<img className='profile_preview' src={element}></img>)
    //   }
    // }else if (this.state.file.length == 3){
    //   break;
    // style={{maxWidth:'200px'}} 
    // }
  //   const options = [
  //     { label: "Grapes 🍇", value: "grapes" },
  //     { label: "Mango 🥭", value: "mango" },
  //     { label: "Strawberry 🍓", value: "strawberry" }
  //   ];
      
  // const [selected, setSelected] = useState([]);
      return (
      <>
        <ExamplesNavbar2/>
        <div className="section section-signup">
          <Container>
            <Row>
                  <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>
                  <Col className="item"><h2>OLD PRODUCT REGISTER</h2></Col>
                  <Col className="item"><hr style={{width: '100%', color: "white", backgroundColor:"white", height: 2, Align: "center"}}/></Col>                
            </Row>
            <Row className="row-grid justify-content-between align-items-center">
              {/* <Col lg="6"> */}
                {/* <h3 className="display-3 text-white">
                  중고품 등록 {" "}<br/>
                  <span className="text-white">complete your form</span>
                </h3>
                <p className="text-white mb-3">
                  당신의 물건을 파세요.. 설명설명
                </p>
                <div className="btn-wrapper">
                  <Button color="primary" to="register-page" tag={Link}>
                    Register Page
                  </Button>
                </div> */}


                <Card className="card-register">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/square-purple-1.png")}
                    />
                    <CardTitle tag="h4">register</CardTitle>
                  </CardHeader>
                  
                  <CardBody>
                    <Form className="form">
                    
                      <Input
                            placeholder="Title"
                            type="text"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                      />
                   
                      {/* <div>
                        <h1>Select Fruits</h1>
                        <pre>{JSON.stringify(selected)}</pre>
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy={"Select"}
                        />
                      </div> */}
                
                      {/* <DropboxChooser 
                          appKey={'your-uniq-app-key'}
                          success={files => this.onSuccess(files)}
                          cancel={() => this.onCancel()}
                          multiselect={true}
                          extensions={['.mp4']} >
                          <div className="dropbox-button">Click me!</div>        
                      </DropboxChooser> */}
<Row>
    <Col>
    <div>
    <br/>

    </div>
    </Col>
</Row>

<div>
<select>
<option selected value="TokenBox">TokenBox &nbsp;&nbsp; </option>
  <option value="Nike">Nike</option>
  <option value="Gucci">Gucci</option>
  <option value="Rolex">Rolex</option>
  <option value="PRADA">PRADA</option>
</select>
<br/>
</div>
<br/>
                 
                      <Input
                            placeholder="price"
                            type="text"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                            
                      />
                   

                      <br/>
                      {/* product 체크박스로 */}
                      
                      <Input
                            cols="100" rows="1000"
                            placeholder="descriptions"
                            type="textarea"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                      />
                    
                      


                      {/* 여러 이미지 업로드 및 미리보기 출력 */}

                      <div class="profile_img">                      
                        <input type='file' 
                            accept='image/jpg,impge/png,image/jpeg,image/gif' 
                            name='profile_img' 
                            
                            onChange={this.handleFileOnChange}>
                        </input>
                        {profile_preview}
                      </div>

                      
                      <FormGroup check className="text-left">
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />I agree to the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            terms and conditions
                          </a>
                          .
                        </Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <div Button className="btn-round btn btn-primary" size="lg">
                    <Link to="Landing-page"> 
                    <font color="white">구매하기 &nbsp;</font>
                      </Link>
                      </div>  
                  </CardFooter>
                </Card>
            </Row>          
          </Container>
        </div>
        </>
      )

                    
  }
}
export default RegisterOld;