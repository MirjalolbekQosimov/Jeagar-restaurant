import './App.css'
import StickyBar from './Components/StickyBar';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const localData = JSON.parse(localStorage.getItem('orders')) || []
  const allOrders = localData.reduce((acc, obj) => acc + (obj.number || 0), 0);
  const [addedCount, setAddedCount] = useState(allOrders);
  function HandleOpenCart() {
    setOpenCart(!openCart);
  }
  function HandleCloseCart() {
    setOpenCart(false);
  }

  function addCountFunc(value) {
    setAddedCount(addedCount + 1);
    let resultCart = localData.findIndex(obj => obj.id === value.id);
    if (resultCart > -1) {
      const updatedCard = [...localData];
      updatedCard[resultCart].number += 1;
      localStorage.setItem('orders', JSON.stringify(updatedCard));
    } else {
      const newValue = value;
      newValue.number = 1;
      const updatedCard = [...localData, newValue];
      localStorage.setItem('orders', JSON.stringify(updatedCard));
    }
  }

  return (
    <div className='App'>
      <StickyBar HandleOpenCart={HandleOpenCart} addedCount={addedCount} HandleCloseCart={HandleCloseCart} />
      <div className='menu-container'>
        <Menu addCountFunc={addCountFunc} />
      </div>
      <Cart openCart={openCart} HandleOpenCart={HandleOpenCart} setAddedCount={setAddedCount} addedCount={addedCount} />
    </div>
  )
}

export default App