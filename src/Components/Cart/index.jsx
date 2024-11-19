import React, { useState } from 'react'
import './Cart.css'
import { IoArrowBack } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import NoOrderImg from '../../assets/NoOrderImg.png'
const index = ({ openCart, HandleOpenCart, setAddedCount, addedCount }) => {
    const dataObj = JSON.parse(localStorage.getItem('orders')) || [];

    let data = dataObj;
    function updateLocalStorage(value) {
        localStorage.setItem('orders', JSON.stringify(value));
    }

    function addCount() {
        setAddedCount(addedCount + 1);
    }

    function removeCountFunc() {
        setAddedCount(addedCount - 1);
    }

    const increment = (index) => {
        data[index].number += 1
        updateLocalStorage(data)
        addCount()
    };

    const decrement = (index) => {
        if (data[index].number == 1) {
            return;
        }
        else {
            data[index].number -= 1
            updateLocalStorage(data)
            removeCountFunc()
        }
    };
    let total = 0
    data.map((item) => {
        total += item.number * item.price
    })

    if (openCart) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'auto'
    }

    function deleteFood(index) {
        setAddedCount(addedCount - data[index].number)
        data.splice(index, 1);
        updateLocalStorage(data)
    }

    function calculationPrice(item) {
        let allPrice = item.number * item.price
        return allPrice.toFixed(2)
    }

    return (
        <div className={openCart ? "Cart open-cart" : 'Cart'}>
            <div className='hide-cart'>
                {data.length > 0 ? <><div className='cart-heading'>
                    <IoArrowBack className='back-icon' onClick={HandleOpenCart} />
                    <h2></h2>
                </div>
                    <div className='cart-menu-info'>
                        <p>Item</p>
                        <div>
                            <p>Qty</p>
                            <p>Price</p>
                        </div>
                    </div>
                    {data.map((item, index) => (
                        <div key={index}>
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
                                            <button onClick={() => decrement(index)} className="btn-count">-</button>
                                            <p>{item.number}</p>
                                            <button onClick={() => increment(index)} className="btn-count">+</button>
                                        </div>
                                        <p className='gathered'>$ {calculationPrice(item)}</p>
                                    </div>
                                    <div className='order-note-delete'>
                                        <input type="text" placeholder='Order Note...' />
                                        <div className='cart-trash' onClick={() => { deleteFood(index) }}>
                                            <FaTrash className='trash-icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='total-price'>
                        <p>Discount <span>$0</span></p>
                        <p>Sub total
                            <span>
                                ${total.toFixed(2)}
                            </span>
                        </p>
                    </div>
                    <button className='cartButton buy-button'>Continue to Payment</button>

                </> : <div className='no-orders'>
                    <h2>Orders</h2>
                    <div>
                        <img src={NoOrderImg} alt="no order" />
                        <h3>No Order</h3>
                        <p>Go find the products you like</p>
                    </div>
                    <button className='cartButton' onClick={HandleOpenCart}>To Order</button>
                </div>}
            </div>
        </div>
    )
}

export default index