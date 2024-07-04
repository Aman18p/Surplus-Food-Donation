import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-link">
          <div className="sb_footer-link_div">
            <h4>For Bussiness</h4>
            <a href="/employer"> <p>Employer</p></a>
            <a href="/healthplans"><p>Health Plans</p></a>
            <a href="/individuals"><p>Individuals</p></a>
          </div>

          <div className="sb_footer-link_div">
            <h4>Resources</h4>
            <a href="/resource"><p> Resource Center</p></a>
            <a href="/resource"><p>Testimonials</p></a>
            <a href="/resource"><p>STV</p></a>
          </div>

          <div className="sb_footer-link_div">
            <h4>Partners</h4>
            <a href="/employer"><p>Swing Tech</p></a>
          </div>

          <div className="sb_footer-link_div">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/press">Press</a>
            <a href="/career">Career</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="sb_footer-link_div">
            <h4>Comming Soon On</h4>
            <div className="socialmedia">
              <ul>
                <li>
                  <FaFacebookSquare />
                </li>
                <li>
                  <FaSquareInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-link">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privicy"><div><p>Privicy</p></div></a>
                <a href="/terms"><div><p>Securuty</p></div></a>
                <a href="/cookie"><div><p>Cookie</p></div></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
