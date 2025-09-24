import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";
import "../Css/FooterModule.css"; // caminho relativo: componentes -> ../Css

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-icons">
          <Link to="#" aria-label="facebook"><FaFacebookF /></Link>
          <Link to="#" aria-label="instagram"><FaInstagram /></Link>
          <Link to="#" aria-label="twitter"><FaTwitter /></Link>
          <Link to="#" aria-label="google"><FaGooglePlusG /></Link>
          <Link to="#" aria-label="youtube"><FaYoutube /></Link>
        </div>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/team">Our Team</Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2022; Designed by <span>FAHEEM</span></p>
      </div>
    </footer>
  );
}