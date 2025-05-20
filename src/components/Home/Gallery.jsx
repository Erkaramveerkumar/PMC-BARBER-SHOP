import gallery1 from '../../assets/images/gallery1.webp';
import gallery2 from '../../assets/images/about.webp';
import gallery3 from '../../assets/images/gallery3.webp';
const Gallery = () => {
    return (
        <>
            <section className="bg-white py-5">
                {/* Gallery Section */}
                <div className="container py-5">
                    <div className="text-center mb-4">
                        <p className="text-primary fw-semibold fs-5 mb-1">Our Work &amp; Shop</p>
                        <h2 className="fw-bold display-5 mb-4">
                            Our Barbershop Gallery
                            <hr
                                className="mx-auto"
                                style={{ width: 340, border: "2px solid #38b2ac", opacity: 1 }}
                            />
                        </h2>
                        <p
                            className="text-secondary fs-5 mt-5 mb-5"
                            style={{ maxWidth: 900, margin: "0 auto" }}
                        >
                            Take a look at our shop atmosphere and the quality cuts we deliver to
                            our clients.
                        </p>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="rounded-4 overflow-hidden shadow-sm">
                                <img
                                    src={gallery1}
                                    alt="Gallery 1"
                                    className="img-fluid w-100"
                                    style={{ height: 300, objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="rounded-4 overflow-hidden shadow-sm">
                                <img
                                    src={gallery2}
                                    alt="Gallery 2"
                                    className="img-fluid w-100"
                                    style={{ height: 300, objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="rounded-4 overflow-hidden shadow-sm">
                                <img
                                    src={gallery3}
                                    alt="Gallery 3"
                                    className="img-fluid w-100"
                                    style={{ height: 300, objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Gallery