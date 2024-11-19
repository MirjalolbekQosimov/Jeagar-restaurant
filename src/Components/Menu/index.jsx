import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import './Menu.css'
import FoodImg1 from '../../assets/Image1.png';
import FoodImg2 from '../../assets/Image2.png';
import FoodImg3 from '../../assets/Image3.png';
import FoodImg4 from '../../assets/Image4.png';

const index = ({ addCountFunc }) => {
    const [currentDate, setCurrentDate] = useState('');
    const [foodActive, setFoodActive] = useState('hod')
    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        setCurrentDate(formattedDate);
    }, []);

    function handleActive(event) {
        const newActiveMenu = event.target.getAttribute('values');
        setFoodActive(newActiveMenu);
    }


    const data = [
        {
            id: 1,
            image: FoodImg1,
            name: 'Spicy seasoned seafood noodles',
            price: 2.29,
            residue: 20,
        },
        {
            id: 2,
            image: FoodImg2,
            name: 'Salted Pasta with mushroom sauce',
            price: 2.69,
            residue: 11,
        },
        {
            id: 3,
            image: FoodImg3,
            name: 'Beef dumpling in hot and sour soup',
            price: 2.99,
            residue: 16,
        },
        {
            id: 4,
            image: FoodImg4,
            name: 'Healthy noodle with spinach leaf',
            price: 3.29,
            residue: 22,
        },
        {
            id: 5,
            image: FoodImg1,
            name: 'Spicy seasoned seafood noodles',
            price: 2.29,
            residue: 20,
        },
        {
            id: 6,
            image: FoodImg2,
            name: 'Salted Pasta with mushroom sauce',
            price: 2.69,
            residue: 11,
        },
        {
            id: 7,
            image: FoodImg3,
            name: 'Beef dumpling in hot and sour soup',
            price: 2.99,
            residue: 16,
        },
        {
            id: 8,
            image: FoodImg4,
            name: 'Healthy noodle with spinach leaf',
            price: 3.29,
            residue: 22,
        },

    ]

    return (
        <div>
            <div className='menu-navbar'>
                <div className='menu-logo-data'>
                    <a href="#">
                        <h1>Jaegar Resto</h1>
                    </a>
                    <p>{currentDate}</p>
                </div>
                <form className='search-eat'>
                    <input type="text" name="" id="" className='search-input' placeholder='Search for food, coffe, etc..' />
                    <CiSearch className='search-icon' />
                </form>

            </div>
            <div className='food-type'>
                <ul className='food-type-list'>
                    <li className={foodActive === "hod" ? "food-type-active" : null} onClick={handleActive} values='hod'>Hot Dishes</li>
                    <li className={foodActive === "cold" ? "food-type-active" : null} onClick={handleActive} values='cold'>Cold Dishes</li>
                    <li className={foodActive === "soup" ? "food-type-active" : null} onClick={handleActive} values='soup'>Soup</li>
                    <li className={foodActive === "grill" ? "food-type-active" : null} onClick={handleActive} values='grill'>Grill</li>
                    <li className={foodActive === "appetizer" ? "food-type-active" : null} onClick={handleActive} values='appetizer'>Appetizer</li>
                    <li className={foodActive === "dessert" ? "food-type-active" : null} onClick={handleActive} values='dessert'>Dessert</li>
                </ul>
                <div className='choose-dishes'>
                    <p>Choose Dishes</p>
                    <select className='choose-price'>
                        <option about='Price'>Price</option>
                        <option value="cheap">Cheap</option>
                        <option value="expensive">Expensive</option>
                    </select>
                </div>
            </div>
            <div className='menu'>
                {data.map((item) => (
                    <div key={item.id} className='menu-item'>
                        <div className='menu-item-img'>
                            <img src={item.image} alt={item.name} className='food-image' />
                        </div>
                        <div className='menu-item-details'>
                            <p className='product-name'>{item.name}</p>
                            <p className='product-price'>$ {item.price}</p>
                            <p className='product-residue'>{item.residue} Bowls available</p>
                            <button className='product-button' onClick={() => addCountFunc(item)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index