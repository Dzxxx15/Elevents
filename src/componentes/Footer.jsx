import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";
import "../Css/FooterModule.css";

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
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Eventos">Eventos</Link></li>
          <li><Link to="/Contato">Contato</Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>Elevents ©2025</p>
      </div>
    </footer>
  );
}