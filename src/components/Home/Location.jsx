import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  return (
    <>
      {/* Our Location Section */}
      <section className="bg-white py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-semibold fs-5 mb-1">Visit Our Shop</p>
            <h2 className="fw-bold display-5 mb-2">
              Our Location
              <hr
                className="mx-auto"
                style={{ width: 220, border: "2px solid #38b2ac", opacity: 1 }}
              />
            </h2>
            <p
              className="text-secondary fs-5 mt-3"
              style={{ maxWidth: 700, margin: "0 auto" }}
            >
              Conveniently located in Denton, TX:
            </p>
          </div>
          <div className="row g-4 justify-content-center align-items-stretch">
            <div className="col-lg-7">
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded-4 shadow-sm"
                style={{ height: 380, minHeight: 280, position: "relative" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.4683774135283!2d-97.127037!3d33.219089499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e4261aec1%3A0xb5d271024d7890e2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e1!3m2!1sen!2sin!4v1747770520543!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div
                className="bg-white rounded-4 shadow-sm h-100 p-4 border"
                style={{ borderColor: "#dbe2ea" }}
              >
                <h4 className="fw-bold mb-4">
                  Contact Information
                  <hr
                    className="mt-2 mb-0"
                    style={{ width: 180, border: "2px solid #243e8c", opacity: 1 }}
                  />
                </h4>
                <div className="mb-4 d-flex align-items-start">
                  <span
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: 44, height: 44 }}
                  >

                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-4" />
                  </span>
                  <div>
                    <div className="fw-bold">Address</div>
                    <div className="text-secondary small">
                      518 Acme St unit 101, Denton, TX 76205, United States
                    </div>
                  </div>
                </div>
                <div className="mb-4 d-flex align-items-start">
                  <span
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: 44, height: 44 }}
                  >

                    <FontAwesomeIcon icon={faPhone} className="fs-4" />
                  </span>
                  <div>
                    <div className="fw-bold">Phone</div>
                    <div className="text-secondary small">+19408081569</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <a
                    href="https://maps.app.goo.gl/zhjQWJ9MerLs1xK48"
                    target="_blank"
                    className="btn btn-primary fw-bold"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    Get Directions
                  </a>
                  <a
                    href="tel:+19408081569"
                    className="btn btn-outline-secondary fw-bold"
                  >
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    Call Us
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

export default Location