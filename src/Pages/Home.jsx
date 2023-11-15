import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add,remove } from '../Redux/createSlice'
import { STATUES, fetchProducts } from '../Redux/productSlice'

const Home = () => {
    const dispatch = useDispatch()
    // const[product,setProduct] = useState([])
    const {data :product,status} = useSelector(item=> item.product)
    console.log(product)
    useEffect(()=>{

        dispatch(fetchProducts()) 

        // const fetchData = async()=>{
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data= await res.json()
        //     console.log(data)
        //     setProduct(data)

        // }
        // fetchData()
    },[])

    const handleCart =(item)=>{
        dispatch(add(item))
    }

    if(status ===  STATUES.LOADING){
        return <h1 className='font-bold mx-3 my-5'>Loading....</h1>
    }
    else if(status  === STATUES.ERROR){
        return <h1 className='font-bold mx-3 my-5'>Something went wrong!...</h1>
    }
  return (
    <div>
    <div className="main-container px-3 py-2 mt-4">
    <h1 className='text-xl font-semibold '>Products Items</h1>
    <div className="inline-flex card flex-wrap w-full md:justify-start justify-center ">
       {
        product.map((item,index)=>{
            return(
                <div className="card shadow-md border-2 md:w-44 w-36 min-h-[300px]  h-auto  p-2 m-2 relative  " key={index}>
                    <img src={item.image} className= 'relative mx-auto h-1/2 object-contain  object-center'  alt="" />
                    <div className="card-body m-auto absolute bottom-1  ">
               <span className='text-sm font-semibold  text-center'>
               {item.title}
               </span>
                {item.price}
              <div className="button mt-5 text-center mb-2">
              <button type='button' onClick={()=>handleCart(item)} className='bg-indigo-600 text-white rounded-sm px-3 w-25'>Add to Cart</button>
              </div>
</div>
                </div>
            )
        })
       }
</div>
    </div>
    </div>
  )
}

export default Home
