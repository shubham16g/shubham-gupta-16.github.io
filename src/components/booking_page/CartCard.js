import React from 'react'
import { useFireStore } from '../../contexts/FirestoreContext'

export default function CartCard({ id, service, count }) {

    const { updateCart } = useFireStore()

    const handleCart = async (value) => {
        updateCart(id, value)
    }

    if (service == null) {
        return 'wtf'
    }

    return (
            <div className='service-card booking-card'>
                <h4>{service.name}</h4>
                <div>
                    <div><span>{service.duration}</span>
                        <h5 className="price">{(service.price)}</h5>
                    </div>
                    <div className="add-btn-group">
                        <div className="counter-group">
                            <button onClick={() => { handleCart(count - 1) }} className="b-btn hard inverse minus-btn">-</button>
                            <div>{count}</div>
                            <button onClick={() => { handleCart(count + 1) }} className="b-btn hard inverse plus-btn">+</button>
                        </div>
                    </div>
                </div>
                <div className="cart-card-price">
                    <div>Total</div>
                    <div>{(service.price * count)}</div>
                </div>
            </div>
    )
}
