import React, { useState } from 'react'
import './Cart.css'
import { IoArrowBack } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";

const index = ({ opencart, data, toggle, title }) => {

    if (opencart) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'auto'
    }

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className={opencart ? "Cart open-cart" : 'Cart'}>
            <div className='hide-cart'>
                <div className='cart-heading'>
                    <IoArrowBack className='back-icon' onClick={toggle} />
                    <h2>{title}</h2>
                </div>
                <div className='cart-menu-info'>
                    <p>Item</p>
                    <div>
                        <p>Qty</p>
                        <p>Price</p>
                    </div>
                </div>
                {data.map((item) => (
                    <div>
                        <div className='cart-food'>
                            <div className='cart-img-name'>
                                <img src={item.image} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p className='cart-price'>{item.price}</p>
                                </div>
                            </div>
                            <div>
                                <div className='count-gethered'>
                                    <div className="button-group">
                                        <button onClick={decrement} className="btn-count">-</button>
                                        <p className=''>{count}</p>
                                        <button onClick={increment} className="btn-count">+</button>
                                    </div>
                                    <p className='gathered'>$ 9,16</p>
                                </div>
                                <div className='order-note-delete'>
                                    <input type="text" placeholder='Order Note...' />
                                    <div className='cart-trash'>
                                        <FaTrash className='trash-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default index