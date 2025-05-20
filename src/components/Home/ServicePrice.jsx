
const ServicePrice = () => {
    return (
        <>
            <section className="bg-white py-5">
                {/* Pricing Section */}
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <p className="text-primary fw-semibold fs-5 mb-1">
                            Quality Barbering at Fair Prices
                        </p>
                        <h2 className="fw-bold display-5 mb-5">
                            Our{" "}
                            <span style={{ textDecoration: "underline #38b2ac 4px" }}>
                                Service {" "}
                            </span> 
                            Prices
                            
                        </h2>
                        <p
                            className="text-secondary fs-5 mt-2 mb-5"
                            style={{ maxWidth: 800, margin: "0 auto" }}
                        >
                            Choose from our range of professional barbering services.
                        </p>
                    </div>
                    <div className="row justify-content-center g-4">
                        {/* Classic Services */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-2 position-relative"
                                style={{ borderRadius: 18, borderTop: "4px solid #243e8c" }}
                            >
                                <span
                                    className="position-absolute top-0 end-0 translate-middle-y mt-3 me-3 px-3 py-1 bg-success text-white fw-semibold rounded-pill"
                                    style={{ zIndex: 2 }}
                                >
                                    Most Popular
                                </span>
                                <div className="card-body pb-0">
                                    <h5 className="card-title fw-bold mb-3">Classic Services</h5>
                                    <div className="mb-3">
                                        <span className="fs-4 align-middle">$</span>
                                        <span
                                            className="fw-bold display-5 text-success align-middle"
                                            style={{ fontSize: "2.5rem" }}
                                        >
                                            25
                                        </span>
                                        <span className="text-secondary fs-6 align-middle">/mo</span>
                                    </div>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Men's Haircut
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Kids Haircut (12
                                            &amp; under)
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Senior Haircut
                                            (65+)
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Military/First
                                            Responder Cut
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Basic Beard Trim
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Neck &amp; Line
                                            Cleanup (between cuts)
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0 pb-4">
                                    <a href="#" className="btn btn-primary w-100 fw-bold">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Premium Services */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18 }}
                            >
                                <div className="card-body pb-0">
                                    <h5 className="card-title fw-bold mb-3">Premium Services</h5>
                                    <div className="mb-3">
                                        <span className="fs-4 align-middle">$</span>
                                        <span
                                            className="fw-bold display-5 text-success align-middle"
                                            style={{ fontSize: "2.5rem" }}
                                        >
                                            35
                                        </span>
                                        <span className="text-secondary fs-6 align-middle">/mo</span>
                                    </div>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Haircut &amp; Beard
                                            Combo
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Hot Towel Shave
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Full Beard Shaping
                                            &amp; Design
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Color Camo (Gray
                                            Blending)
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Hair &amp; Scalp
                                            Treatment
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Head Shave with Hot
                                            Towel
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0 pb-4">
                                    <a href="#" className="btn btn-outline-primary w-100 fw-bold">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Packages */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-0"
                                style={{ borderRadius: 18, background: "#fcfcfd" }}
                            >
                                <div className="card-body pb-0">
                                    <h5 className="card-title fw-bold mb-3">Packages</h5>
                                    <div className="mb-3">
                                        <span className="fs-4 align-middle">$</span>
                                        <span
                                            className="fw-bold display-5 text-success align-middle"
                                            style={{ fontSize: "2.5rem" }}
                                        >
                                            50
                                        </span>
                                        <span className="text-secondary fs-6 align-middle">/mo</span>
                                    </div>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> The Works (Cut,
                                            Shave, Treatment)
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Father &amp; Son
                                            Combo
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Groom's Package
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Monthly Membership
                                            (2 cuts/mo)
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> First-Time Client
                                            Special
                                        </li>
                                        <li className="mb-2">
                                            <span className="text-primary me-2">✓</span> Loyalty Program
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0 pb-4">
                                    <a href="#" className="btn btn-outline-secondary w-100 fw-bold">
                                        Inquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ServicePrice