import { useState } from 'react';
import React from 'react'
import SideBar from './components/SideBar'
import { RiBarChartHorizontalLine, RiShieldUserFill, RiAddCircleFill, RiLightbulbLine, RiPieChartFill, RiCloseLine, RiMenuFill, RiSearchLine, RiArrowDownSFill } from "react-icons/ri";
import {BsFillTrashFill} from "react-icons/bs";
import Teclado1 from '../public/Teclado1.jpg'
import auris1 from '../public/auris1.jpg'
import auris2 from '../public/auris2.jpg'
import monitor1 from '../public/monitor1.jpg'
import monitor2 from '../public/monitor2.jpg'
import mouse1 from '../public/mouse1.jpg'
import mouse2 from '../public/mouse2.jpg'
import pad1 from '../public/pad1.jpg'
import pad2 from '../public/pad2.jpg'

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  }

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false)
  }



  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <SideBar showMenu={showMenu} />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex justify-between items-center rounded-tl-xl rounded-tr-xl">
        <button className='p-2'><RiPieChartFill/></button>
        <button className='p-2'><RiShieldUserFill/></button>
        <button onClick={toggleOrders}  className='p-2'><RiAddCircleFill/></button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenuFill />}
        </button>
        
      </nav>
      <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4 pb-2'>
        <div className='lg:col-span-6 p-2  '>

          <header className='p-4'>
            <div className='flex flex-col gap-2 mb-6'>
              <form>
              <div className='w-full relative'>
                <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
              <input placeholder='Buscar por producto' type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 rounded-lg text-gray-300 outline-none"  />
              </div>
              
              </form>
            </div>
            <nav className='text-gray-300 flex items-center justify-between mb-6 '>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>Teclados</a>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>Mouses</a>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>Pads</a>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>Monitores</a>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>Auriculares</a>
              <a href="#" className='border-b py-2 px-4 hover:border-[#ec7c6a] hover:text-[#ec7c6a]'>PCs</a>
            </nav>
            </header>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl text-gray-300 pl-4'>Nuestros destacados</h2>
            </div>
            <div className="p-8 grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-16">
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400'>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className='w-60  pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
              <div className='bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 border'>
                <img className=' w-60 pt-12 h-40 object-cover -mt-20 ' src="Teclado1.jpg" alt=""  />
                <p className='text-gray-300 items-center'>Teclado Gamer HyperX RGB Switch red</p>
                <span className='text-lime-400 hover:border-[#ec7c6a] '>$26.362</span>
                <button className='text-gray-300 bg-[#4d4c4b] py-2 px-4 rounded-lg mt-2
                 hover:bg-[#ec7c6a]'>Sumar al carrito</button>
              </div>
            </div>
            
            
          
        </div>
        <div className={`lg:col-span-2 fixed lg:right-0 lg:w-96
          right-0 top-0 w-full h-full bg-[#1F1D2B] transition-all ${showOrder ? "right-0" : "-right-full" }  `}>
         <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
         <RiCloseLine
          onClick={toggleOrders} 
          className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
         <h1 className='text-2xl mt-4 my-4'>Carrito</h1>

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
      </main>
    </div>
  )
}

export default App