import React,{ Component } from 'react';
import { Row, Col, Label, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(val);

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModelOpen: false,
            isLoginOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModelLoginOpen = this.handleModelLoginOpen.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleSubmit(values){
        alert("Entered Information: " + (values));
    }
    handleLogin(values){
        alert("Logined Values: "+ values);
    }
    handleModalOpen(){
        this.setState({
            isModelOpen : !this.state.isModelOpen
        })
    }
    handleModelLoginOpen(){
        this.setState({
            isLoginOpen : !this.state.isLoginOpen
        })
    }
    render(){
        return(
            <div>
                <div class="card-deck m-5" >
                    <div class="card bg-primary">
                        <div class="card-body text-center">
                        <img src="assert/images/avtar.jpg" width="200px" height="250px"/>
                        <p class="card-text mt-3">Some text inside the first card</p>
                        </div>
                    </div>
                    <div class="card bg-secondary">
                        <div class="card-body text-center">
                        <h3 class="card-heading mt-5">Welcome to Skill World</h3>
                        <p class="card-text">Here is your choices to proceed further</p><br/><br/>
                        <Button className=" m-5 text-dark bg-primary" outline dark onClick = {this.handleModalOpen}>
                                <span className="fa fa-pencil fa-lg" aria-hidden="true"></span> Sign Up
                        </Button>
                        <Button className=" m-5 text-dark bg-primary" outline dark onClick = {this.handleModelLoginOpen}>
                                <span className="fa fa-pencil fa-lg" aria-hidden="true"></span> Login
                        </Button>
                        </div>
                    </div>
                </div>
            
            <Modal isOpen={this.state.isModelOpen} toggle={this.handleModalOpen}>
            <ModalHeader toggle={this.handleModalOpen}>Sign Up</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label for="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength:minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                    className="text-danger" 
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be > 2 char',
                                        maxLength: 'Must be < 16 char'
                                    }} 
                                />
                                
                        </Col>
                        </Row>
                    <Row className="form-group">
                        <Label for="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength:minLength(3), maxLength: maxLength(15)
                                }}
                                    />
                                <Errors
                                    className="text-danger" 
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be > 2 char',
                                        maxLength: 'Must be < 16 char'
                                    }} 
                                />
                        </Col>
                        </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnun" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                placeholder="Tel. Number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                    />
                                <Errors
                                    className="text-danger" 
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be > 2 char',
                                        maxLength: 'Must be < 16 char',
                                        isNumber: 'Must be Number'
                                    }} 
                                />
                        </Col>
                        </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                                    />
                                <Errors
                                    className="text-danger" 
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid Email Address'

                                    }} 
                                />
                        </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="email" md={2}>Password</Label>
                        <Col md={10}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required,
                                    validPassword
                                }}
                                    />
                                <Errors
                                    className="text-danger" 
                                    model=".password"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validPassword: 'Minimum eight characters, at least one letter, one number and one special character'
                                    }} 
                                />
                        </Col>
                        </Row>
                    <Row className="form-group">
                        <Col md={{size:6, offset: 2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                    className="form-check-input"
                                            /> {' '}
                                        <strong>Remember Me?</strong>
                                </Label>
                            </div>
                        </Col>
                        <Col md={{size:3, offset: 1}}>
                            <Control.select model=".contactType" name="contactType"
                            className="form-control"
                                    >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                        </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset:2}}>
                            <Button type="submit" color="primary" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isLoginOpen} toggle={this.handleModelLoginOpen}>
            <ModalHeader toggle={this.handleModelLoginOpen}>Login</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                    <Row className="form-group">
                        <Label for="username" md={2}>Username or EmailId</Label>
                        <Col md={10}>
                            <Control.text model=".username" id="username" name="username"
                                placeholder="Enter Username or Email Id"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                />
                                <Errors
                                    className="text-danger" 
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="email" md={2}>Password</Label>
                        <Col md={10}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required
                                    }}
                                />
                                <Errors
                                    className="text-danger" 
                                    model=".password"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }} 
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:15, offset:5}}>
                                <Button type="submit" color="primary" onClick={this.handleLogin}>
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
        )
    }
}
export default Login;