import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background mt-5">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-6 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">RAJASREE TOWNSHIPS</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              <a
                href="https://youtube.com/@rajasreetownships-dm?si=kyQqkNtDm58us4p9"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/share/p/S5bAGYD3YMBZshE3/?mibextid=xfxF2i"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/rajasreetownships/profilecard/?igsh=cHh3Ymxnem1lZ3dk"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaInstagram />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Hyderabad corporate office, Address Corp Off: Plot number 130,
              1st Floor, GSK Arcade, Beside Shilparamam, Bhagayath
            </p>
            <p>Phase 2, Uppal, Hyderabad, Telangana 500039.</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91 6262666999</span>
            </p>
            <p>
              <strong>Email:</strong> <span>Info@rajasreetownships.in</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Rajasree Township</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed & Developed by{" "}
          <span className="text-success fw-bold">RAJASREE FUTURE TECH</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
