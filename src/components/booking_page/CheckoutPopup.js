import React from 'react'

export default function CheckoutPopup({onClose, state}) {
  return (
      <div className={state ? 'popup-page active' : 'popup-page'} id="checkout-area">
          <div id="checkout-data">
              <div className="cart-heading-container checkout-heading-container">
                  <h3 className="cart-heading">Checkout</h3>
                  <span onClick={onClose} className="close-btn" id="checkout-close"><i className="fa fa-times" aria-hidden="true" /></span>
              </div>
              <div className="checkout-process">
                  <div>
                      <div className="flex-heading">
                          <div className="heading">Location:</div>
                          <span id="location-selector">
                              <select name="location-selected">
                                  <option>Select Location</option>
                                  <option>Pandaypur</option>
                                  <option>Lohta</option>
                              </select>
                          </span>
                      </div>
                      <div className="date-and-time">
                          <div className="form-input sign-in-input-mobile">
                              <input id="date-picker" name="date-picker" placeholder="Pick Date" autoComplete="off" required />
                          </div>
                          <div className="form-input sign-in-input-mobile">
                              <input id="time-picker" name="time-picker" placeholder="Pick Time" autoComplete="off" required />
                          </div>
                      </div>
                  </div>
                  <div className="cart-button-area">
                      {/* <div className="cart-card-price grand-total-price"> */}
                      {/* <div>Grand Total</div> */}
                      {/* <div id="checkout-grand-total"></div> */}
                      {/* </div> */}
                      <div id="book-now-btn" className="b-btn checkout-btn">BOOK NOW</div>
                  </div>
              </div>
          </div>
      </div>
  )
}
