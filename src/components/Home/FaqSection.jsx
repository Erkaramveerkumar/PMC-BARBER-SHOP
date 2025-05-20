import React, { useState } from "react";
import { Accordion, Button, Form, InputGroup, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const faqData = [
    {
        key: "0",
        question: "Do I need an appointment or can I walk in?",
        answer:
            "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp.",
        category: "General",
    },
    {
        key: "1",
        question: "How long does a typical haircut take?",
        answer:
            "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
        category: "Services",
    },
    {
        key: "2",
        question: "What form of payment do you accept?",
        answer:
            "We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and Venmo for your convenience.",
        category: "Pricing",
    },
    {
        key: "3",
        question: "Do you offer any loyalty programs or discounts?",
        answer:
            "Yes, we offer a loyalty program where your 10th haircut is free. We also offer discounts for military personnel, first responders, seniors, and students with valid ID.",
        category: "Support",
    },
    {
        key: "4",
        question: "What hair products do you use and sell?",
        answer:
            "We use and sell premium men's grooming products from brands like Uppercut Deluxe, Layrite, and American Crew. Our barbers can recommend the best products for your hair type and style.",
        category: "Services",
    },
];

const categories = [
    "All Questions",
    "General",
    "Services",
    "Pricing",
    "Support",
];

export default function FaqSection() {
    const [activeCategory, setActiveCategory] = useState("All Questions");
    const [search, setSearch] = useState("");

    const filteredFaqs = faqData.filter(
        (faq) =>
            (activeCategory === "All Questions" ||
                faq.category === activeCategory) &&
            (faq.question.toLowerCase().includes(search.toLowerCase()) ||
                faq.answer.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <>
            <section className="bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <p className="text-primary fw-semibold fs-5 mb-1">Common Questions</p>
                        <h2 className="fw-bold display-5 mb-2">
                            Frequently <span style={{ textDecoration: "underline #38b2ac 4px" }}>Asked</span> Questions
                        </h2>
                        <p className="text-secondary fs-5 mt-4" style={{ maxWidth: 700, margin: "0 auto" }}>
                            Answers to common questions about our barbershop services.
                        </p>
                    </div>
                    {/* Search Bar */}
                    <div className="d-flex justify-content-center mb-3">
                        <InputGroup style={{ maxWidth: 600 }}>
                            <InputGroup.Text>
                                <i className="bi bi-search"></i>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Search for questions..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                    {/* Category Buttons */}
                    <div className="d-flex justify-content-center gap-2 mb-5 mt-5 flex-wrap">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "primary" : "outline-secondary"}
                                className={activeCategory === cat ? "fw-bold" : ""}
                                onClick={() => setActiveCategory(cat)}
                                style={{ borderRadius: 20, minWidth: 120 }}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                    {/* Accordion */}
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        {filteredFaqs.map((faq) => (
                            <Accordion.Item
                                eventKey={faq.key}
                                key={faq.key}
                                className="mb-3"
                                style={{
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "none",
                                    boxShadow: "0 2px 8px rgba(44,62,80,0.07)",
                                }}
                            >
                                <Accordion.Header>
                                    <span className="fw-bold fs-5">{faq.question}</span>
                                </Accordion.Header>
                                <Accordion.Body className="text-secondary fs-6">
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
}