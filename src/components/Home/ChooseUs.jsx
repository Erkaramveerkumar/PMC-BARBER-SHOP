
const ChooseUs = () => {
    return (
        <>
            <section className="bg-light py-5">
                {/* Why Choose Us Section */}
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <p className="text-primary fw-semibold fs-5 mb-1">Our Commitment</p>
                        <h2 className="fw-bold display-5 mb-2">
                            Why Choose PMC Barbershop?
                            <hr
                                className="mx-auto"
                                style={{ width: 340, border: "2px solid #38b2ac", opacity: 1 }}
                            />
                        </h2>
                        <p
                            className="text-secondary fs-5 mt-5 mb-5"
                            style={{ maxWidth: 800, margin: "0 auto" }}
                        >
                            What makes us the premier barbershop in Denton, TX.
                        </p>
                    </div>
                    <div className="row justify-content-center g-4">
                        {/* Expert Barbers */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100  shadow-sm border-2"
                                style={{ borderRadius: 18, borderLeft: "4px solid #243e8c" }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-5">
                                        <span
                                            className="d-inline-block bg-light text-primary rounded-3 p-3 fs-5 fw-semibold"
                                            style={{ minWidth: 70, textAlign: "center" }}
                                        >
                                            User
                                        </span>
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-5">Expert Barbers</h5>
                                    <p className="card-text text-secondary fs-6">
                                        Our team consists of certified barbers with years of experience in
                                        classic and modern cutting techniques, beard grooming, and men's
                                        styling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Premium Tools & Products */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18, borderLeft: "4px solid #243e8c" }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-3">
                                        <span
                                            className="d-inline-block bg-light text-primary rounded-3 p-3 fs-5 fw-semibold"
                                            style={{ minWidth: 70, textAlign: "center" }}
                                        >
                                            Scissors
                                        </span>
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-5">
                                        Premium Tools &amp; Products
                                    </h5>
                                    <p className="card-text text-secondary fs-6">
                                        We use only high-quality barbering tools and premium men's
                                        grooming products to ensure the best results for your hair and
                                        skin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Classic Barbershop Experience */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18, borderLeft: "4px solid #243e8c" }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-3">
                                        <span
                                            className="d-inline-block bg-light text-primary rounded-3 p-3 fs-5 fw-semibold"
                                            style={{ minWidth: 70, textAlign: "center" }}
                                        >
                                            Home
                                        </span>
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-5">
                                        Classic Barbershop Experience
                                    </h5>
                                    <p className="card-text text-secondary fs-6">
                                        Enjoy a comfortable, clean shop with a classic barbershop
                                        atmosphere where you can relax while getting a great cut or shave.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ChooseUs