import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="footer ">

                <Container>
                    <Row className="d-flex justify-content-between">
                        <Col className='d-none d-md-block'>
                            <div className="col-auto ">
                                <div className="f_logo">
                                    <img src={require("./image/logo.jpg")} alt="" />
                                </div>
                                <div className="f_content mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta possimus, odio impedit quam itaque ducimus praesentium eius temporibus, illo tempora.
                                    <br></br>
                                    <br></br>
                                    <i class="fa-solid fa-phone pe-1"></i> 123_456_789
                                    <br></br>

                                    <i class="fa-regular fa-envelope pe-1"></i> royalrich@gmail.com<br></br>
                                    <i class="fa-brands fa-facebook mt-2 border border-1 p-1"></i>
                                    <i class="fa-brands fa-twitter  border border-1 p-1 ms-2"></i>
                                    <i class="fa-brands fa-youtube border border-1 ms-2 p-1"></i>
                                    <i class="fa-brands fa-instagram border border-1 ms-1 p-1"></i>
                                    <i class="fa-brands fa-linkedin border border-1 ms-1 p-1"></i>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="col-auto ">
                                <div className="footer_qheading">
                                    <b>QUICK  LINKS</b>
                                </div>
                                <div className="footer_qcontent mt-4">
                                    <a href="#">Events</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Mentos</a>
                                    <a href="#">Galleries</a>
                                    <a href="#">Write For Us</a>
                                    <a href="#">Terms And Conditions</a>
                                </div>
                            </div>
                        </Col>
                        <Col><div className="col-auto  ps-2"><div className="footer_contact ">
                            <b>Contact Us</b>
                        </div>
                            <div className="footer_contact_info mt-4">
                                Name : &nbsp;<input type="text" name="" id="" placeholder="Enter Name" /><br></br>
                                Email : &nbsp; <input type="email" name="" id="" className="mt-2" placeholder="Enter Email" /><br></br>
                                No : &nbsp;&nbsp;  &nbsp;&nbsp;   <input type="number" name="" id="" className="mt-2" placeholder="Enter No" />
                                <br></br>
                                <div className="col-auto  mt-3 text-center">
                                </div>

                            </div>

                            <Modal show={show} onHide={handleClose}>
                                
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@email.com"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>About Us</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>

                                    <Button variant="primary" onClick={handleClose}>
                                        Submit
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                        </Col>
                    </Row>

                </Container>
            </div>

        </>

    )
}
export default Footer;
