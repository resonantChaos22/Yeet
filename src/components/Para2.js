//  IMPORTING LIBRARIES AND COMPONENTS
import React from "react";

import "../styles/para2.css";

//  DEFINING AND EXPORTING COMPONENT
export default class Para2 extends React.Component {
  render() {
    return (
      <div className="para2">
        <div class="ui container">
          <div className="cardss">
            <div class="card_n">
              <div class="stuff">
                <h1>1</h1>
              </div>
              <div class="stuff">
                <img src="https://www.grxstatic.com/d4fuqqd5l3dbz/static/img/rx-homepage/3step-compare-imac.png?auto=webp" />
              </div>
              <div class="stuff">
                <h2>Compare Prices</h2>
              </div>
              <div class="stuff">
                <p>
                  GoodRx collects prices & discounts from over 60,000 U.S.
                  pharmacies
                </p>
              </div>
            </div>

            <div class="card_n">
              <div class="stuff">
                <h1>2</h1>
              </div>
              <div class="stuff">
                <img src="https://www.grxstatic.com/d4fuqqd5l3dbz/static/img/rx-homepage/3step-printer.png?auto=webp" />
              </div>
              <div class="stuff">
                <br />
                <h2>Print Free Coupons</h2>
              </div>
              <div class="stuff">
                <p>Or send coupons to your phone by email or text message</p>
              </div>
            </div>

            <div class="card_n">
              <div class="stuff">
                <h1>3</h1>
              </div>
              <div class="stuff">
                <img src="https://www.grxstatic.com/d4fuqqd5l3dbz/static/img/rx-homepage/3step-redeem-cash-register.png?auto=webp" />
              </div>
              <div class="stuff">
                <h2>Save up to 80%</h2>
              </div>
              <div class="stuff">
                <p>
                  Show the coupon to your pharmacist for massive savings on your
                  meds
                </p>
              </div>
            </div>
          </div>

          <div className="subscriber">
            <div>
              <b>Don’t miss out on savings!</b>
              <p>
                The best ways to save on your prescriptions, delivered to your
                inbox
              </p>
            </div>
            <div>
              <form className="ui form">
                <div className="field">
                  <input type="text" placeholder="Enter your email address" />
                  <button className="ui primary button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
