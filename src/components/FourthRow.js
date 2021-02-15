import React, { Component } from "react";
import "../FourthRow.css";
import "../Cards.css";
import revenue from "../images/revenue.svg";
import Salesforce from "../images/salesforce.png";
import Stripe from "../images/Stripe.png";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import Xero from "../images/xero.png";
class FourthRow extends Component {
  render() {
    return (
      <div className="fr">
        <p className="small-strip"></p>
        <div className="fourth-row">
          <h1 className="article-title">
            Works with Your
            <br /> Revenue Management Stack
          </h1>
          <p className="detail">
            Managing sales, payments, customer experience or your books: <br />
            if it affects your revenue cycle, Chargebee works with it.
          </p>
          <img src={revenue} className="img-revenue"></img>
          <div className="feature-cards">
            <div className="card-one">
              <h3 className="org-head">Quote-to-Cash Automation</h3>
              <h2 className="main-head">Powers Sales and Marketing CRM</h2>
              <img src={Salesforce} className="card-image-sales"></img>
              <p className="card-para">
                Handle quotes, approvals, acceptance, and collections seamlessly
                from within the CRM
              </p>
              <a className="button  button-card link-icon">Learn More</a>
            </div>
            <div className="card-one">
              <h3 className="org-head">Offer More Payment Methods</h3>
              <h2 className="main-head">25+ Payment Gateways</h2>
              <div className="pref-head">
                <p className="pref">Preffered Partners</p>
              </div>
              <img src={Stripe} className="card-image-stripe"></img>
              <p className="card-para">
                Accept payments across a wide array of gateways, geographies,
                and currencies.
              </p>
              <a className="button button-card link-icon">Learn More</a>
            </div>
          </div>
          <div className="feature-cards-two">
            <div className="card-one">
              <h3 className="org-head">Streamline Finance Operations</h3>
              <h2 className="main-head">Syncs with Accounting Software</h2>
              <img src={Xero} className="card-image-stripe"></img>
              <p className="card-para">
                Reconcile books in seconds, handle compliance, and recognize
                revenue painlessly.
              </p>
              <a className="button button-card link-icon">Learn More</a>
            </div>
          </div>
          <div className="revenue-wf">
            <p className="revenue-wf-text">
              Talk to us today about your revenue workflow
            </p>
            <a className="button button-demo">Schedule a Demo</a>
          </div>
          <h1 className="cb-big-head">
            Great Products Deserve Hyper Growth. Chargebee Makes it Easy.
          </h1>
        </div>
      </div>
    );
  }
}
export default FourthRow;
