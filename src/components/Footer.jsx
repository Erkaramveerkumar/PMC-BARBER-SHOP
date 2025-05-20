import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-white pt-5 py-5 border-top">
      <Container>
        <Row className="gy-4">
          {/* Logo & Social */}
          <Col md={3}>
            <div className="mb-2">
              <img
                src="https://via.placeholder.com/40x40?text=Logo"
                alt="Company Logo"
                style={{ width: 40, height: 40, marginRight: 8, verticalAlign: "middle" }}
              />
              <span className="fw-bold align-middle">Company<br />Logo</span>
            </div>
            <div className="mb-3 text-secondary">Classic cuts with modern style</div>
            <div>
              <a href="#" className="btn btn-light btn-lg rounded-circle me-2" style={{ background: "#e7eaf3" }}>
                <i className="bi bi-instagram fs-4 text-primary"></i>
              </a>
              <a href="#" className="btn btn-light btn-lg rounded-circle" style={{ background: "#e7eaf3" }}>
                <i className="bi bi-facebook fs-4 text-primary"></i>
              </a>
            </div>
          </Col>
          {/* Quick Links */}
          <Col md={2}>
            <div className="fw-bold mb-2">Quick Links</div>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">About</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Services</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Gallery</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          {/* Contact Us */}
          <Col md={3}>
            <div className="fw-bold mb-2">Contact Us</div>
            <div className="mb-2">
              <i className="bi bi-geo-alt text-primary me-2"></i>
              <span className="text-secondary">
                518 Acme St unit 101, Denton, TX 76205, United States
              </span>
            </div>
            <div>
              <span className="text-secondary">+19408081569</span>
            </div>
          </Col>
          {/* Newsletter */}
          <Col md={4}>
            <div className="fw-bold mb-2">Newsletter</div>
            <div className="mb-2 text-secondary">
              Subscribe to our newsletter to receive updates and news.
            </div>
            <Form className="d-flex flex-column gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="mb-2"
                style={{ maxWidth: 350 }}
              />
              <Button
                variant="primary"
                type="submit"
                className="fw-bold"
                style={{ maxWidth: 350, borderRadius: 12, background: "#243e8c" }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="align-items-center">
          <Col md={6} className="text-secondary small">
            © 2023 PMC Barbershop. All rights reserved.
          </Col>
          <Col md={6} className="text-end">
            <a href="#" className="text-secondary text-decoration-none me-3">Home</a>
            <a href="#" className="text-secondary text-decoration-none me-3">About</a>
            <a href="#" className="text-secondary text-decoration-none">Services</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}