import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.Hero} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Stare</p>
          <p className='text-gray-500'>NarayanDhar Bazer, Pumdi <br /> Hossainpur, Kishoregonj, BD</p>
          <p className='text-gray-500'>Tel: 01943747529 <br /> Email: imran@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Foreever</p>
           <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact