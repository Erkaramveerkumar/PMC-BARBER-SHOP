
const Service = () => {
    return (
        <>
            <section className="bg-light py-5">
                {/* Services Section */}
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <p className="text-primary fw-semibold fs-5  mb-1">Premium Grooming</p>
                        <h2 className="fw-bold display-5 mb-2">
                            Our Barber Services
                            <hr
                                className="mx-auto"
                                style={{ width: 220, border: "2px solid #38b2ac", opacity: 1 }}
                            />
                        </h2>
                        <p
                            className="text-secondary fs-5 mt-3"
                            style={{ maxWidth: 800, margin: "0 auto" }}
                        >
                            Professional barbering services to keep you looking sharp for everyday
                            confidence or special occasions.
                        </p>
                    </div>
                    <div className="row justify-content-center g-4 py-4">
                        {/* Haircuts */}

                        <div className="col-md-6 col-lg-4 ">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18 }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-3">
                                        <img
                                            src="https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg"
                                            alt="Beard Icon"
                                            className="bg-light rounded-3 p-1"
                                            style={{ width: 64 }}
                                        />
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-4">Haircuts</h5>
                                    <p className="card-text text-secondary ">
                                        Our skilled barbers deliver precision haircuts tailored to your
                                        style and face shape. From classic cuts to modern fades, we ensure
                                        you leave looking sharp and confident.
                                    </p>
                                    <ul className="text-secondary ps-3 mt-2 ">
                                         <li>Classic Cuts</li>
                                        <li>Modern Styles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        {/* Beard Services */}
                        <div className="col-md-6 col-lg-4 ">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18 }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-3">
                                        <img
                                            src="https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg"
                                            alt="Beard Icon"
                                            className="bg-light rounded-3 p-1"
                                            style={{ width: 64 }}
                                        />
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-4">Beard Services</h5>
                                    <p className="card-text text-secondary ">
                                        Maintain your facial hair with our premium beard services. Our
                                        barbers specialize in perfect beard shaping, precise trims, and
                                        luxurious hot towel shaves for the ultimate gooming experience.
                                    </p>
                                    <ul className="text-secondary ps-3 mt-2 ">
                                        <li>Beard Trims</li>
                                        <li>Beard Shaping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Premium Services */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-2"
                                style={{ borderRadius: 18 }}
                            >
                                <div className="card-body py-5">
                                    <div className="mb-3">
                                        <img
                                            src="https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg"
                                            alt="Premium Icon"
                                            className="bg-light rounded-3 p-1"
                                            style={{ width: 64 }}
                                        />
                                    </div>
                                    <h5 className="card-title fw-bold text-dark mb-4">Premium Services</h5>
                                    <p className="card-text text-secondary ">
                                        Enhance your look with our premium barbering services including
                                        expert hair coloring, revitalizing scalp treatments, and styling
                                        for special occasions when you need to look your absolute best.
                                    </p>
                                    <ul className="text-secondary ps-3 mt-2 ">
                                        <li>Hair Coloring</li>
                                        <li>Scalp Treatments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Service