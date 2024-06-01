import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className="footer__useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p>
          <a href="/privacy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
