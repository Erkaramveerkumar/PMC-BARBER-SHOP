import {
    Navbar,
    Nav,
    Container,
    Button,
    Offcanvas,
    ListGroup,
} from 'react-bootstrap';
import { FaPhoneAlt, FaGlobe, FaPalette } from 'react-icons/fa';
import logo from '../assets/images/logo.webp'; // Replace with your logo path
import '../assets/css/Navbar.css'; // Add this CSS file for smooth animation

const CustomNavbar = () => {
    return (
        <>
            <Navbar expand="lg"  className="shadow py-3 sticky-top bg-white">
                <Container>
                    {/* Logo */}
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            alt="PMC Logo"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    {/* Toggle only visible on small devices */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

                    {/* Nav items for large screens only */}
                    <div className="d-none d-lg-flex align-items-center justify-content-between  gap-4 ">
                        <Nav className="me-5 d-flex align-items-center gap-4">
                            <Nav.Link href="/" className="fw-medium">Home</Nav.Link>
                            <Nav.Link href="/about-us" className="fw-medium">About</Nav.Link>
                            <Nav.Link href="/service" className="fw-medium">Services</Nav.Link>
                            <Nav.Link href="#gallery" className="fw-medium">Gallery</Nav.Link>
                            <Nav.Link href="#contact" className="fw-medium">Contact</Nav.Link>
                        </Nav>

                        <FaPalette size={18} className="text-dark" />
                        <FaGlobe size={18} className="text-dark" />
                        <FaPhoneAlt size={18} className="text-primary" />
                        <span className="text-dark fw-medium">+1 940-612-9127</span>
                        <Button variant="primary" className="fw-bold px-3">
                            Book an Appointment
                        </Button>
                    </div>

                    {/* Offcanvas for small devices */}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                        className="offcanvas-slide d-lg-none" // custom class for smooth slide
                    >
                        <Offcanvas.Header closeButton>
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src={logo}
                                    alt="PMC Logo"
                                    height="40"
                                />
                                
                            </div>
                        </Offcanvas.Header>

                        <Offcanvas.Body className="d-flex flex-column justify-content-between">
                            {/* Nav Links */}
                            <Nav className="flex-column gap-3 text-start fw-semibold px-2">
                                <Nav.Link href="/" className="fs-5">Home</Nav.Link>
                                <Nav.Link href="/about-us" className="fs-5">About</Nav.Link>
                                <Nav.Link href="/service" className="fs-5">Services</Nav.Link>
                                <Nav.Link href="#gallery" className="fs-5">Gallery</Nav.Link>
                                <Nav.Link href="#contact" className="fs-5">Contact</Nav.Link>
                            </Nav>

                            {/* Bottom Contact */}
                            <div className="mt-4 px-2">
                                <ListGroup className="mb-3 rounded shadow-sm">
                                    <ListGroup.Item className="d-flex align-items-center gap-2">
                                        <FaPhoneAlt className="text-primary" />
                                        <span className="fw-medium">+1 940-612-9127</span>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup className="rounded shadow-sm">
                                    <ListGroup.Item className="d-flex align-items-center gap-3">
                                        Preferences
                                        <span className="ms-auto d-flex gap-2">
                                            <FaPalette className="text-secondary" />
                                            <FaGlobe className="text-secondary" />
                                        </span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
