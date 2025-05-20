import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CtaSection() {
    return (
        <>
            <section className="bg-light py-5 mt-5 mb-5">
                <div style={{
                    background: "#243e8c",
                    position: "relative",
                    width: "100%",
                    minHeight: "600px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                }}>
                    {/* Background Circles */}
                    <div style={{
                        position: "absolute",
                        top: "-120px",
                        left: "-120px",
                        width: "400px",
                        height: "400px",
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "50%",
                        zIndex: 1
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-120px",
                        left: "20%",
                        width: "250px",
                        height: "250px",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "50%",
                        zIndex: 1
                    }} />
                    <div style={{
                        position: "absolute",
                        top: "20%",
                        right: "-120px",
                        width: "320px",
                        height: "320px",
                        background: "rgba(255,255,255,0.12)",
                        borderRadius: "50%",
                        zIndex: 1
                    }} />
                    {/* Content */}
                    <Container className="text-center" style={{ position: "relative", zIndex: 2 }}>
                        <h1 className="fw-bold text-white mb-4" style={{ fontSize: "3rem" }}>
                            Ready for a Fresh Cut?
                        </h1>
                        <p className="text-white fs-4 mb-4" style={{ maxWidth: 900, margin: "0 auto" }}>
                            Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Button variant="light" size="lg" className="fw-bold px-4">
                                Book an Appointment
                            </Button>
                            <Button variant="light" size="lg" className="fw-bold px-4">
                                View Our Services
                            </Button>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}