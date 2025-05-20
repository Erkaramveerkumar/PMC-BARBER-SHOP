import about from '../../assets/images/about.webp';
const AboutUs = () => {
    return (
        <>
        <section className="bg-white py-5 mt-5 mb-5"> 
            {/* About Section */}
            <div className="container  py-5">
                <div className="text-center mb-4">
                    <p className="text-primary fw-semibold fs-5 mb-1">Our Story</p>
                    <h2 className="fw-bold display-5 mb-2">About PMC Barbershop</h2>
                    <hr
                        className="mx-auto"
                        style={{ width: 300, border: "2px solid #38b2ac", opacity: 1 }}
                    />
                    <p
                        className="text-secondary fs-5 mt-3"
                        style={{ maxWidth: 900, margin: "0 auto" }}
                    >
                        Established in 2018, PMC Barbershop has been providing premium grooming
                        services to the men of Denton, TX. Our mission is to deliver exceptional
                        haircuts and grooming services in a welcoming, classic barbershop
                        environment.
                    </p>
                </div>
                <div className="row align-items-center g-5">
                    {/* Image with badge */}
                    <div className="col-lg-6">
                        <div className="position-relative shadow rounded-4 overflow-hidden bg-white">
                            <img
                                src={about}
                                alt="PMC Barbershop"
                                className="img-fluid rounded-4"
                            />
                            <span
                                className="position-absolute bottom-0 end-0 m-3 px-4 py-2 bg-primary text-white fw-bold rounded-3 fs-5"
                                style={{ opacity: "0.95" }}
                            >
                                5+ years
                            </span>
                        </div>
                    </div>
                    {/* Text content */}
                    <div className="col-lg-6">
                        <div className="mb-4 ps-3 border-start border-4 border-primary">
                            <p className="fs-5 text-secondary mb-0">
                                Established in 2018, PMC Barbershop has been providing premium
                                grooming services to the men of Denton, TX. Our mission is to
                                deliver exceptional haircuts and grooming services in a welcoming,
                                classic barbershop environment.
                            </p>
                        </div>
                        <div className="bg-light rounded-3 p-4">
                            <span className="fs-3 text-primary" style={{ verticalAlign: "top" }}>
                                “
                            </span>
                            <span className="fs-6 mt-3 text-secondary">
                                We take pride in our attention to detail and personalized service,
                                ensuring each client leaves looking and feeling their best. Our
                                skilled barbers combine traditional techniques with modern trends to
                                create custom styles that suit each individual's personality and
                                lifestyle.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>

    )
}

export default AboutUs