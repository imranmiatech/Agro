import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.OO1} alt="" className='mb-5 w-32'/>
            <p className='w-full md:2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsam nemo ad aliquid voluptatibus nobis hic corporis non, consectetur repellat maxime ipsa! Totam pariatur aliquam quisquam voluptas, reiciendis perspiciatis vel.
            </p>
        </div>
        <div>
            <p className='text-xl font-madium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-madium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+88 01943747529</li>
                <li>imran@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <div className='h-[1px] bg-black w-full px-10'></div>
            <p className='py-5 text-sm text-center'>Copyright 2025@ imran.com - All right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer