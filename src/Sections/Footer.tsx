import React from 'react'
import { fb, insta, twitter, yt } from '../Assets/icons'

const Footer = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className="text-lime-500 font-bold text-4xl">DEBUG ENTITY</h1>
        <p className=" text-lg text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, modi. Sed nisi officia saepe, veritatis aut reiciendis cupiditate laboriosam repudiandae?</p>
        <div className="flex justify-center items-center gap-4 mt-7" id="logos"><span className="bg-white p-2 rounded-full cursor-pointer hover:bg-lime-500"><img src={fb} alt="facebook" width={20} height={20} /></span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-lime-500"><img src={insta} alt="instagram" width={20} height={20} /></span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-lime-500"><img src={twitter} alt="twitter" width={20} height={20} /></span>
          <span className="bg-white p-2 rounded-full cursor-pointer hover:bg-lime-500"><img src={yt} alt="youtube" width={20} height={20} /></span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start lg:item-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold text-lime-500">Pages</h1>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Home</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Services</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Reviews</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Pricing</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Contacts</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start lg:item-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold text-lime-500">Pages</h1>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Home</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Services</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Reviews</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Pricing</li>
          <li className=" text-slate-100 cursor-pointer hover:text-lime-500">Contacts</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start lg:item-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold text-lime-500">Pages</h1>
          <li className=" text-slate-300 cursor-pointer hover:text-lime-300">Home</li>
          <li className=" text-slate-300 cursor-pointer hover:text-lime-300">Services</li>
          <li className=" text-slate-300 cursor-pointer hover:text-lime-300">Reviews</li>
          <li className=" text-slate-300 cursor-pointer hover:text-lime-300">Pricing</li>
          <li className=" text-slate-300 cursor-pointer hover:text-lime-300">Contacts</li>
        </ul>
      </div>

    </section>
  )
}

export default Footer
