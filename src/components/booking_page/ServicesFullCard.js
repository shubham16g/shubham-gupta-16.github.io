import React from 'react'
import { useFireStore } from '../../contexts/FirestoreContext';

import {  } from "../../css/services.css";

export default function ServicesFullCard({ id, category }) {

    const { updateCart, cart } = useFireStore()
    const count = (cart.hasOwnProperty(id)) ? cart[id] : 0

    const handleCart = async (value) => {
        updateCart(id, value)
    }
    
    return (
        <div className="service-card booking-card">
            <h4>{category.name}</h4>
            <div>
                <div><span>{category.duration}</span>
                    {/* format price */}
                    <h5 className="price">{(category.price)}</h5>
                </div>
                <div className="add-btn-group">
                    <div className="counter-group">
                        <button onClick={() => { handleCart(count - 1) }} className="b-btn hard inverse minus-btn">-</button>
                        <div>{ count }</div>
                        <button onClick={() => { handleCart(count + 1) }} className="b-btn hard inverse plus-btn">+</button>
                    </div>
                    <button onClick={() => { handleCart(1) }} className="b-btn hard inverse add-btn" style={{ visibility: count > 0 ? "hidden" : "visible"}}>ADD</button>
                </div>
            </div>
        </div>

    )
}
