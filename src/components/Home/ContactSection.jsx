import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactSection() {
    return (
        <>
        <section  className="bg-light py-5">
            <Container className="py-5">
            <div className="text-center mb-4">
                <p className="text-primary fw-semibold fs-5 mb-1">Book Your Appointment</p>
                <h2 className="fw-bold display-5 mb-5">
                    Contact Us
                    <hr className="mx-auto" style={{ width: 220, border: "2px solid #38b2ac", opacity: 1 }} />
                </h2>
                <p className="text-secondary fs-5 mt-3 mb-5" style={{ maxWidth: 700, margin: "0 auto" }}>
                    Ready for a fresh look? Book your appointment today or contact us for any questions.
                </p>
            </div>
            <Row className="justify-content-center g-4">
                {/* Contact Info */}
                <Col md={5}>
                    <Card className="h-100 shadow-sm border-0" style={{ borderRadius: 18 }}>
                        <Card.Body className="px-4 pt-4 gap-5">
                            <div className="mb-4 d-flex align-items-start">
                                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 44, height: 44 }}>
                                    <i className="bi bi-geo-alt fs-4"></i>
                                </span>
                                <div>
                                    <div className="fw-bold">Address</div>
                                    <div className="text-secondary small">
                                        518 Acme St unit 101, Denton, TX 76205, United States
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 d-flex align-items-start">
                                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 44, height: 44 }}>
                                    <i className="bi bi-telephone fs-4"></i>
                                </span>
                                <div>
                                    <div className="fw-bold">Phone</div>
                                    <div className="text-secondary small">+19408081569</div>
                                </div>
                            </div>
                            <div className="mb-2 d-flex align-items-start">
                                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 44, height: 44 }}>
                                    <i className="bi bi-clock fs-4"></i>
                                </span>
                                <div>
                                    <div className="fw-bold">Business Hours</div>
                                    <div className="text-secondary small">
                                        Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Contact Form */}
                <Col md={7}>
                    <Card className="h-100 shadow-sm border-0" style={{ borderRadius: 18 }}>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formService">
                                    <Form.Label>Service Interested In</Form.Label>
                                    <Form.Select>
                                        <option>Select an option</option>
                                        <option>Haircut</option>
                                        <option>Beard Trim</option>
                                        <option>Shave</option>
                                        <option>Coloring</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formDate">
                                    <Form.Label>Preferred Date</Form.Label>
                                    <Form.Control type="date" placeholder="dd-mm-yyyy" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Tell us about your style preferences or any questions you have" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="fw-bold px-4">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </section>
        </>
    );
}