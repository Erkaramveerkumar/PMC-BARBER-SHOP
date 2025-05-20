import '../../assets/css/hero.css';
import hero from '../../assets/images/hero.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
    return (
        <>
            <section className='bg-light py-5'>
                <div className="container py-5 ">
                    <div className="row align-items-center">
                        {/* Left Side */}
                        <div className="col-lg-6">
                            <p className="text-primary fw-semibold mb-2">
                                Premium Barber Services in Denton
                            </p>
                            <h1 className="fw-bold display-4 mb-0">Classic Cuts, Modern Style</h1>
                            <h2 className="fw-bold display-5 mb-3">
                                <span className="highlight">Premium Barber Shop</span>
                            </h2>
                            <p className="text-secondary fs-5 mt-2 mb-4">
                                At PMC Barbershop, we combine traditional barbering techniques with
                                modern styling to give you the perfect look. Our experienced barbers
                                deliver precision cuts, beard grooming, and relaxing hot towel shaves in
                                a classic barbershop atmosphere.
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-light text-dark fs-6">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-2" size="lg" />
                                    Denton, TX
                                </span>
                            </div>
                            <div className="d-flex flex-column  gap-2 mb-2">
                                <a
                                    href="#"
                                    className="btn btn-outline-success shadow d-flex align-items-center justify-content-center flex-grow-1"
                                >
                                    <FontAwesomeIcon icon={faPhone} className="me-2" /> Our Services
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-primary flex-grow-1 shadow d-flex align-items-center justify-content-center"
                                >
                                    <FontAwesomeIcon icon={faPhone} className="me-2" /> Book Now
                                </a>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="col-lg-6 text-center">
                            <img
                                src={hero} alt="Barber Team"
                                className="img-fluid rounded shadow-lg"
                                style={{ maxHeight: 500 }}
                            />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Hero