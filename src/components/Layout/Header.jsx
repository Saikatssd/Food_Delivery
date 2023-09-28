import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Header() {
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <nav className='navbar h-20 flex items-center bg-orange-800 justify-around sticky top-0'>

        <Link to="/">
          <img src="/images/logo.webp" className="logo" alt="logo" />
        </Link>
        <div className={`w-1/3 h-1/2 p-3 text-sm rounded-full bg-gray-200 px-5 flex text-gray-600 space-x-3 items-center ${isInputFocused ? "border border-white" : ""}`}>


          <input type="text" placeholder='Enter your favourite restaurant....' className='bg-gray-200  rounded-sm w-full outline-none'
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                searchSong();
              }
            }}
          />
          <Icon icon="ic:outline-search" className='text-lg text-gray-600 cursor-pointer' />
        </div>
        <div className='flex items-center space-x-10'>
          <Link to="/cart" style={{textDecoration:"none"}}>
            <div className='text-2xl text-white cursor-pointer hover:bg-red-100 hover:text-black p-4'>
              Cart
              <span id='cart_count'>{cartItems.length}</span>
            </div>
          </Link>

          <div className='text-2xl text-white cursor-pointer hover:bg-red-100 hover:text-black p-4'> Login</div>

        </div>
      </nav>

    </>

  )
}
