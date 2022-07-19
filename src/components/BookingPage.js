import React, { useState } from 'react'
import "../css/booking.css";
import { useFireStore } from "../contexts/FirestoreContext";
import ServicesFullCard from './booking_page/ServicesFullCard';
import Collapsible from './booking_page/Collapsible';
import CartCard from './booking_page/CartCard';
import CheckoutPopup from './booking_page/CheckoutPopup';


export default function BookingPage() {
    const { services, cart } = useFireStore()

    const [isCartVisible, setIsCartVisible] = useState(window.innerWidth > 900);
    const [isCheckoutVisible, setCheckoutVisible] = useState(false);

    let cartCount = 0
    let totalCartPrice = 0
    
    if (services == null) {
        return <div style={{ marginTop: 100 }}>Some Error Occurred!</div>
    }
    let allServices = Object.assign({}, ...Object.keys(services).map(e => {
        return services[e].children
    }))
    return (
        <div>
            <div>
                <div style={{ marginTop: 100 }} />
                <div className="booking-grid page-container">
                    <div id="services-section">
                        {
                            Object.keys(services).map((key) => {
                                let value = services[key];
                                return (<Collapsible title={value.name} key={ key }>
                                    {Object.keys(value.children).map((k) => {
                                        let v = value.children[k];
                                        return (<ServicesFullCard key={k} id={k} category={v} />)
                                    })
                                    }
                                </Collapsible>)
                            })}
                    </div>
                    <div id="cart-area" className={isCartVisible? 'active' : ''}>
                        <div className="cart-heading-container">
                            <span onClick={()=>{setIsCartVisible(false)}} className="close-btn" id="cart-close"><i className="fa fa-arrow-left" aria-hidden="true" /></span>
                            <h3 className="cart-heading">CART</h3>
                        </div>
                        <div id="cart-data">
                            <div className="cart-process">
                                <div id="cart-section">
                                    {Object.keys(cart).map(k => {
                                        let value = cart[k];
                                        const service = allServices[k]
                                        cartCount += value
                                        totalCartPrice += value * service.price
                                        return (<CartCard service={service} count={value} id={k} />)
                                     }) }
                                    {/* <CartCard service={{ name: 'Ha', duration: 600, price: 80 }} count={5} id={ 'bkey4' }/> */}
                                </div>
                                <div style={{ display: totalCartPrice > 0 ? 'block' : 'none' }} className="cart-button-area">
                                    <div className="cart-card-price grand-total-price">
                                        <div>Grand Total</div>
                                        <div id="cart-grand-total">{totalCartPrice}</div>
                                    </div>
                                    <div onClick={()=>{setCheckoutVisible(true)}} id="book-continue-btn" className="b-btn checkout-btn">CONTINUE</div>
                                </div>
                            </div>
                        </div>
                        <div id="cart-empty" style={{ display: totalCartPrice <= 0 ? 'flex' : 'none' }}>
                            <h3>Cart is Empty</h3>
                        </div>
                    </div>
                </div>
                <CheckoutPopup state={isCheckoutVisible} onClose={() => { setCheckoutVisible(false) } }/>
                <div id="cart-summary">
                    <div>
                        <div id="summary-total-services">{cartCount } SERVICES</div>
                        <h3 id="summary-grand-total">{(totalCartPrice)}</h3>
                    </div>
                    <button onClick={()=>{setIsCartVisible(true)}} id="summary-btn" className="b-btn hard inverse summary-btn">Summary</button>
                </div>
            </div>

        </div>
    )
}
