import React, { Component, useState, useEffect } from 'react';
import { Button, Row, Col, Label, Modal, ModalHeader, ModalBody, Card } from 'reactstrap';
import { LocalForm } from 'react-redux-form';

function handleSubmit(values){
    return(
        alert("The Files you Uploaded are: "+ (values))
    )
}

// function handleAdd(values) {
//     return(
//         <div class="card bg-warning">
//             <div class="card-body text-center">
//                 <p class="card-text">Some text inside the ${} card</p>
//             </div>
//         </div>
//     )
// }

function Certificate(props){
    const [ isOpenModal, setOpenModal] = useState(false);
    
    return(
        <div>
            <div class="card-deck m-5 bg-info">
                <div class="card m-3">
                    <div class="card-heading ml-5" style={{textDecoration: "underline"}}><h2 style={{fontWeight:"none"}}>Certificates:</h2></div>
                    <div class="card-body text-center">
                        <input style={{alignItems: "center", width: "auto", border: "1px solid black"}} placeholder="Search Certificate..."></input><hr /><br/>
                        <Button className=" m-5 text-dark bg-primary" outline dark onClick={() => setOpenModal(!isOpenModal)}>
                                <span className="fa fa-pencil fa-lg mr-2" aria-hidden="true"></span>Upload Certificate
                        </Button>
                        <Button className=" m-5 text-dark bg-primary" outline dark >
                                <span className="fa fa-pencil fa-lg mr-2" aria-hidden="true"></span>Manage Certificate
                        </Button><hr class="bg-secondary" style={{height:"0.2px"}}/>
                        {/* //Cards-deck just for a show purpose */}
                       <div class="card-deck">
                            <div class="card bg-warning">
                                <div class="card-body text-center">
                                <p class="card-text">Some text inside the second card</p>
                                </div>
                            </div>
                            <div class="card bg-success">
                                <div class="card-body text-center">
                                <p class="card-text">Some text inside the third card</p>
                                </div>
                            </div>
                            <div class="card bg-danger">
                                <div class="card-body text-center">
                                <p class="card-text">Some text inside the fourth card</p>
                                </div>
                            </div>
                            <div class="card bg-info">
                                <div class="card-body text-center">
                                <p class="card-text">Some text inside the fourth card</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <Modal isOpen={isOpenModal} toggle={() => setOpenModal(!isOpenModal)}>
                <ModalHeader toggle={() => setOpenModal(!isOpenModal)}>Upload Certificate</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row class="ml-5">
                            <Label>Select File :</Label>
                            <Col md={8}>
                            <input type="file" name="upload"></input></Col>
                            <Button className=" m-5 text-dark bg-primary" outline dark onClick={() => setOpenModal(!isOpenModal)}>Done!</Button>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default Certificate;