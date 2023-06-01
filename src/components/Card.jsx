import React from 'react'
import { useState } from 'react';
import { RiBarChartHorizontalLine, RiShieldUserFill, RiAddCircleFill, RiLightbulbLine, RiPieChartFill, RiCloseLine, RiMenuFill, RiSearchLine, RiArrowDownSFill } from "react-icons/ri";
import {BsFillTrashFill} from "react-icons/bs";
import Teclado1 from '../assets/Teclado1.jpg'
import auris1 from '../assets/auris1.jpg'
import auris2 from '../assets/auris2.jpg'
import monitor1 from '../assets/monitor1.jpg'
import monitor2 from '../assets/monitor2.jpg'
import mouse1 from '../assets/mouse1.jpg'
import mouse2 from '../assets/mouse2.jpg'
import pad1 from '../assets/pad1.jpg'
import pad2 from '../assets/pad2.jpg'

const Card = (props) => {
    const {showOrder, setShowOrder} = props
return (
    <div>
        <div className={`lg:col-span-2 fixed lg:right-0 lg:w-96
        right-0 top-0 w-full h-full bg-[#1F1D2B] transition-all ${showOrder ? "right-0" : "-right-full" }  `}>
        <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
        <RiCloseLine
        onClick={() => setShowOrder(false)}
        className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
        <h1 className='text-2xl mt-4 my-4'>Order#nashe</h1>

         <div className='flex items-center gap-4 flex-wrap mb-8 '>
          <button className='bg-[#4d4c4b]  text-white py-2 px-4 rounded-xl hover:bg-[#ec7c6a] border border-gray-500'>Comprar</button>
          <button className='bg-[#4d4c4b]  text-white py-2 px-4 rounded-xl hover:bg-[#ec7c6a] border border-gray-500'>Local</button>
          <button className='bg-[#4d4c4b]  text-white py-2 px-4 rounded-xl hover:bg-[#ec7c6a] border border-gray-500'>Delivery</button>
         </div>
         <div>
          <div className='grid grid-cols-6 mb-4 p-4'>
            <h5 className='col-span-4'>Producto</h5>
            <h5 className=''>Cant.</h5>
            <h5>Precio</h5>
          </div>
          <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
            <div className='col-span-4 flex items-center gap-3'>
              <img src="./auris1.jpg" className='w-10 h-10 object-cover rounded-full'/>
              <div>
              <h5 className='text-sm'>Producto...</h5>
              <p className='text-xs text-gray-500'>$26.362</p>
              </div>
            </div>
            <div className='text-center'>
              <span>1</span>            
              </div>
              <span className='text-center'>$26.362</span>
            </div>
            <div className='grid grid-cols-6 items-center gap-2 justify-center '>
            <form className='col-span-5'>
              <input type="text" className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none' placeholder='Dejanos una nota...' />
            </form>
            <div>
              <button className='border border-red-900 p-2 rounded-lg'>
              <BsFillTrashFill className='text-red-500' />
              </button>
            </div>
          </div>
          </div>
          <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
            <div className='col-span-4 flex items-center gap-3'>
              <img src="./auris1.jpg" className='w-10 h-10 object-cover rounded-full'/>
              <div>
              <h5 className='text-sm'>Producto...</h5>
              <p className='text-xs text-gray-500'>$26.362</p>
              </div>
            </div>
            <div className='text-center'>
              <span>1</span>            
              </div>
              <span className='text-center'>$26.362</span>
            </div>
            <div className='grid grid-cols-6 items-center gap-2 justify-center '>
            <form className='col-span-5'>
              <input type="text" className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none' placeholder='Dejanos una nota...' />
            </form>
            <div>
              <button className='border border-red-900 p-2 rounded-lg'>
              <BsFillTrashFill className='text-red-500' />
              </button>
            </div>
          </div>
          </div>
          <div className='bg-[#262837] p-4 rounded-xl mb-4'>
            <div className='grid grid-cols-6 mb-4'>
            <div className='col-span-4 flex items-center gap-3'>
              <img src="./auris1.jpg" className='w-10 h-10 object-cover rounded-full'/>
              <div>
              <h5 className='text-sm'>Producto...</h5>
              <p className='text-xs text-gray-500'>$26.362</p>
              </div>
            </div>
            <div className='text-center'>
              <span>1</span>            
              </div>
              <span className='text-center'>$26.362</span>
            </div>
            <div className='grid grid-cols-6 items-center gap-2 justify-center '>
            <form className='col-span-5'>
              <input type="text" className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none' placeholder='Dejanos una nota...' />
            </form>
            <div>
              <button className='border border-red-900 p-2 rounded-lg'>
              <BsFillTrashFill className='text-red-500' />
              </button>
            </div>
          </div>
          <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-gray-400' >Descuento</span>
            <span>$0</span>
          </div>
          <div className='flex items-center justify-between mb-6'>
            <span className='text-gray-400'>Sub-total</span>
            <span className=''>$26.362</span>
          </div>
          <div>
            <button className='bg-[#ec7c6a] rounded-lg py-2 px-4 w-full'>Continuar al pago...</button>
          </div>
         </div>
          </div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default Card