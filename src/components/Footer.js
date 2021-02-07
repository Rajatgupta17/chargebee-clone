import React, { Component } from "react";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import "../Footer.css";
import CGLogo from "../images/cg-logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="text-button">
          <div className="text-left">
            Still unsure? Step Inside and See
            <br /> What The Future Looks Like.
          </div>
          <div className="button-right">
            <a className="button button-demo">
              Schedule a Demo
              <ArrowForwardSharpIcon className="arrow-icon-demo" />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <div className="list-footer">
            <div className="list-footer-whole">
              <div className="list-header">
                Product <ArrowForwardSharpIcon className="arr-icon" />
              </div>
              <ul className="list-items">
                <li>Subscription Management</li>
                <li>Recurring Billing and Invoicing</li>
                <li>Recurring Payments</li>
                <li>Accounting and Taxes</li>
                <li>SaaS Reporting</li>
                <li>Enterprise Billing</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div className="list-footer-whole">
              <div className="list-header">
                Help & Support <ArrowForwardSharpIcon className="arr-icon" />
              </div>
              <ul className="list-items">
                <li>Security</li>
                <li>FAQs</li>
                <li>Status</li>
                <li>Product Documentation</li>
                <li>API Documentation</li>
                <li>Supporting Payment Gateways</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="list-footer-whole">
              <div className="list-header">
                Resources <ArrowForwardSharpIcon className="arr-icon" />
              </div>
              <ul className="list-items">
                <li>Blogs</li>
                <li>Compare Payment Gateways</li>
                <li>Tackling Payment Faliures</li>
                <li>Enterprise Billing Guides</li>
                <li>Webinars</li>
                <li>Glossaries</li>
              </ul>
            </div>
            <div className="list-footer-whole">
              <div className="list-header">
                Company <ArrowForwardSharpIcon className="arr-icon" />
              </div>
              <ul className="list-items">
                <li>Customers</li>
                <li>Partners</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="cb-image">
            <img src={CGLogo}></img>
          </div>
          <div className="social-links">
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    );
  }
}
