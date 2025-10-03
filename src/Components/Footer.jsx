import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>

        <div className="footer-col">
          <h4>Communities</h4>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>

        <div className="footer-col">
          <h4>Useful links</h4>
          <p>Support</p>
          <p>Free Mobile App</p>
          <p>Popular by Country</p>
          <p>Import your music</p>
        </div>

        <div className="footer-col">
          <h4>Spotify Plans</h4>
          <p>Premium Individual</p>
          <p>Premium Duo</p>
          <p>Premium Family</p>
          <p>Premium Student</p>
          <p>Spotify Free</p>
        </div>
      </div>

      <div className="footer-social">
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaFacebookF className="icon" />
      </div>
    </footer>
  );
}

export default Footer;

