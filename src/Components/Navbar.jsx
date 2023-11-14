import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const count =  useSelector(state => state.cart)
  return (
    <div>
     <nav>
       <div className=" flex shadow-lg justify-between w-full px-5 py-3">
        <div className="left-container">
        <h1 className='text-black font-bold text-xl'>REDUX STORE</h1>
        </div>
        <div className="right-container gap-3 flex ">
    <Link to="/" className='text-black font-semibold'>Home</Link>
            <Link to="/cart" className='text-black font-semibold'>Cart</Link>
            <h3 className='font-bold'><ShoppingCartIcon/> <span className='bg-red-500 rounded-full font-normal px-[7px] absolute top-0 right-1 text-white '> {count.length}</span></h3>
        </div>
       </div>
      </nav>
    </div>
  )
}

export default Navbar
