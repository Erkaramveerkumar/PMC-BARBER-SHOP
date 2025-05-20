import staff1 from '../../assets/images/staff1.webp';
import staff2 from '../../assets/images/staff2.webp';
import staff3 from '../../assets/images/gallery1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Testimonials = () => {
    return (
        <>
            <section className="bg-white py-5">
                {/* Testimonials Section */}

                {/* Meet Our Barbers Section */}
                <div className="container py-5">
                    <div className="text-center mb-5">
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
                                    src= {staff1}
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
                                            <FontAwesomeIcon icon={faInstagram}  />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <FontAwesomeIcon icon={faFacebook}  />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Barber 2 (Highlighted) */}
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-primary"
                                style={{ borderRadius: 18, border: "3px solid #243e8c" }}
                            >
                                <img
                                    src={staff2}
                                    className="card-img-top"
                                    alt="Marcus Williams"
                                    style={{
                                        borderTopLeftRadius: 15,
                                        borderTopRightRadius: 15,
                                        height: 260,
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body text-center">
                                    <hr
                                        className="mx-auto mb-2"
                                        style={{
                                            width: 60,
                                            border: "3px solid",
                                            borderImage:
                                                "linear-gradient(90deg, #243e8c 60%, #38b2ac 100%) 1"
                                        }}
                                    />
                                    <h5 className="fw-bold mb-1 text-primary">Marcus Williams</h5>
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
                                            <FontAwesomeIcon icon={faInstagram}  />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <FontAwesomeIcon icon={faFacebook}  />
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
                                    src= {staff3}
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
                                            <FontAwesomeIcon icon={faInstagram}  />
                                        </a>
                                        <a href="#" className="btn btn-light btn-sm rounded-circle">
                                            <FontAwesomeIcon icon={faFacebook}  />
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

export default Testimonials