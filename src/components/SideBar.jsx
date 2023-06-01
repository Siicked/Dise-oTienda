import React from 'react';
import { RiHome6Line, RiLogoutCircleRLine} from "react-icons/ri";
import {AiFillPieChart} from "react-icons/ai"
import {TbBrandDaysCounter} from "react-icons/tb";
import {AiTwotoneMail} from 'react-icons/ai'
import {IoIosNotifications, IoMdSettings, IoLogoOctocat} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import App from '../App.jsx'

const SideBar = (props) => {
    const { showMenu } = props;
return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"}
    `}>
        <div>
        <ul className='pl-4'>
            <li className='mb-10'>
        <h1 className='text-5xl text-white uppercase font-bold flex justify-center text-center my-3 hover:text-[#ec7c6a]'><IoLogoOctocat/></h1>
            </li>
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                <a className="bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-white" href="#">
                <RiHome6Line className='text-xl '/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-2'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <TbBrandDaysCounter className='text-xl '/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-2'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <AiFillPieChart className='text-xl '/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-2'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <AiTwotoneMail className='text-xl '/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-2'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <IoIosNotifications className='text-xl '/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-2'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <IoMdSettings className='text-xl '/>
                </a>
            </li>
        </ul>
        </div>
        <div>
            <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className="group-hover:bg-[#ec7c6a] p-4 rounded-xl flex justify-center text-[#ec7c6a] group-hover:text-white transition-colors" href="#">
                <RiLogoutCircleRLine className='text-xl '/>
                </a>
            </li>
            </ul>
        </div>
    </div>
)
}

export default SideBar