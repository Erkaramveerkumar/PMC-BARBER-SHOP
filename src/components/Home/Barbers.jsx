
const Barbers = () => {
    return (
        <>
            <section>
                {/* Meet Our Barbers Section */}
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <p className="text-primary fw-semibold fs-5 mb-1">Expert Stylists</p>
                        <h2 className="fw-bold display-5 mb-2">
                            Meet Our Barbers
                            <hr
                                className="mx-auto"
                                style={{ width: 320, border: "2px solid #38b2ac", opacity: 1 }}
                            />
                        </h2>
                        <p
                            className="text-secondary fs-5 mt-3"
                            style={{ maxWidth: 900, margin: "0 auto" }}
                        >
                            Our team of skilled barbers is dedicated to providing you with the
                            perfect cut and grooming experience.
                        </p>
                    </div>
                    <div className="row justify-content-center g-4">
                        {/* Barber 1 */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-0"
                                style={{ borderRadius: 18 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                                    className="card-img-top"
                                    alt="Jason Rodriguez"
                                    style={{
                                        borderTopLeftRadius: 18,
                                        borderTopRightRadius: 18,
                                        height: 260,
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body text-center">
                                    <hr
                                        className="mx-auto mb-2"
                                        style={{ width: 60, border: "3px solid #243e8c", opacity: 1 }}
                                    />
                                    <h5 className="fw-bold mb-1">Jason Rodriguez</h5>
                                    <p
                                        className="text-info mb-2 fw-semibold"
                                        style={{ marginTop: "-8px" }}
                                    >
                                        Owner &amp; Master Barber
                                    </p>
                                    <p className="text-secondary small">
                                        With over 15 years of experience, Jason founded PMC Barbershop to
                                        bring premium men's grooming services to Denton. Specializing in
                                        classic cuts and...
                                    </p>
                                    <div>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle me-2">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <i className="bi bi-facebook" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Barber 2 */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-0"
                                style={{ borderRadius: 18 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
                                    className="card-img-top"
                                    alt="Marcus Williams"
                                    style={{
                                        borderTopLeftRadius: 18,
                                        borderTopRightRadius: 18,
                                        height: 260,
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body text-center">
                                    <hr
                                        className="mx-auto mb-2"
                                        style={{ width: 60, border: "3px solid #243e8c", opacity: 1 }}
                                    />
                                    <h5 className="fw-bold mb-1">Marcus Williams</h5>
                                    <p
                                        className="text-info mb-2 fw-semibold"
                                        style={{ marginTop: "-8px" }}
                                    >
                                        Senior Barber
                                    </p>
                                    <p className="text-secondary small">
                                        Marcus brings 8 years of experience to PMC Barbershop. His
                                        expertise in fades, beard sculpting, and precision lineup work has
                                        earned him a loyal...
                                    </p>
                                    <div>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle me-2">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <i className="bi bi-facebook" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Barber 3 */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-0"
                                style={{ borderRadius: 18 }}
                            >
                                <img
                                    src="https://i.imgur.com/0y8Ftya.jpg"
                                    className="card-img-top"
                                    alt="Terrence Jackson"
                                    style={{
                                        borderTopLeftRadius: 18,
                                        borderTopRightRadius: 18,
                                        height: 260,
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body text-center">
                                    <hr
                                        className="mx-auto mb-2"
                                        style={{ width: 60, border: "3px solid #243e8c", opacity: 1 }}
                                    />
                                    <h5 className="fw-bold mb-1">Terrence Jackson</h5>
                                    <p
                                        className="text-info mb-2 fw-semibold"
                                        style={{ marginTop: "-8px" }}
                                    >
                                        Barber &amp; Stylist
                                    </p>
                                    <p className="text-secondary small">
                                        Terrence specializes in modern men's styling, textured cuts, and
                                        hair designs. With his creative approach and technical skill, he
                                        excels at transforming your look...
                                    </p>
                                    <div>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle me-2">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <i className="bi bi-facebook" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Barbers