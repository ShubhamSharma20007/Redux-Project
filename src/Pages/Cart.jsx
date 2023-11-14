import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {remove} from "../Redux/createSlice"
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=> state.cart)


  const handleDelete = (productId) => {
    dispatch(remove(productId));
  };
  
  return (
    <div>
      <h3 className='text-center font-bold text-2xl mt-4'>Cart Items</h3>
      <div className="crt-wrapper">
        {
products.map((item,index)=>(
    <div className="cartCart flex justify-between  w-full items-center px-5" key={item.id}  >
      <img src={item.image} alt=""  className='w-20 my-5' />
      <h5>{item.title}</h5>
      <h5>{item.price}</h5>
      <div className="button mt-5 text-center mb-2">
              <button type='button' onClick={()=>handleDelete(item.id)}  className='bg-red-500 text-white rounded-sm px-3 w-25'>Remove</button>
              </div>

    </div>
))
        }
      </div>
    </div>
  )
}

export default Cart
