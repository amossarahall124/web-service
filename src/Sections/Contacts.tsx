import React from 'react'
import { call, fb, map, sms, twitter, yt, insta } from "../Assets/icons"
import cube from "../Assets/images/cube.png"
import hero from "../Assets/images/hero.png";
import { Reveal } from '../Exports/Reveal';

const Contacts = () => {
  return (
    <>
      <section id="contacts" className="w-full bg-stone-900 flex flex-col lg:flex-row  gap-10 lg:gap-20  p-4 lg:p-10 justify-center items-center">
        <div className="flex justify-center items-center w-full lg:w-5/6flex-col lg:flex-row bg-stone-900 rounded-lg px-8 py-12 gap-10 z-20">
          <div className="flex flex-col items-start justify-center gap-4 w-full">
          <Reveal>       
            <h1 className="text-lime-500 lg:text-[70px] font-bold text-[35px] mb-10">Contact information</h1>
          </Reveal>
          <Reveal>
            <div id="phone" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-100">
              <span className="bg-lime-500 p-3  hover:bg-lime-700 rounded-full"><img src={call} alt="call icon" width={22} height={22} /></span> 1 876 087-5674
            </div>
          </Reveal>
          <Reveal>
            <div id="mail" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-100">
              <span className="bg-lime-500 p-3 hover:bg-lime-700 rounded-full"><img src={sms} alt="email icon" width={22} height={22} /></span> websolutions23@gmail.com
            </div>
          </Reveal>
          <Reveal>
            <div id="address" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-100">
              <span className="bg-lime-500 p-3 hover:bg-lime-700 rounded-full"><img src={map} alt="map icon" width={22} height={22} /></span> 96 Shield Cesten street house 10, door 56
            </div>
          </Reveal>
          <Reveal>
            <div id="logos" className="flex justify-center items-center gap-4 mt-10">
              <span className="bg-lime-500 p-3 rounded-full cursor-pointer hover:bg-lime-700"><img src={fb} alt="facebook icon" width={25} height={25} /></span>
              <span className="bg-lime-500 p-3 rounded-full cursor-pointer hover:bg-lime-700"><img src={yt} alt="youtube icon" width={25} height={25} /></span>
              <span className="bg-lime-500 p-3 rounded-full cursor-pointer hover:bg-lime-700"><img src={twitter} alt="twitter icon" width={25} height={25} /></span>
              <span className="bg-lime-500 p-3 rounded-full cursor-pointer hover:bg-lime-700"><img src={insta} alt="insta icon" width={25} height={25} /></span>
            </div>
          </Reveal>
          </div>

          <div className="flex flex-col mt-2 justify-center items-start gap-2 w-full">
          <Reveal>
            <input type="text" placeholder='Enter your Name' className="px-12 py-4 lg:px-32 lg:py-6 w-full border-[3px] border-lime-500 rounded-lg text-[18px] bg-slate-200 focus:outline-none focus:border-green-600" />
          </Reveal>
          <Reveal>
            <input type="email" placeholder='Enter your Email' className="px-12 py-4 lg:px-32 lg:py-6 w-full border-[3px] border-lime-500 rounded-lg text-[18px] bg-slate-200 focus:outline-none focus:border-green-600" />
          </Reveal>
          <Reveal>
            <textarea className="px-4 py-4 lg:px-32 lg:py-8 w-full border-[3px] border-lime-500 rounded-lg text-[18px] bg-slate-200 focus:outline-none focus:border-green-600" name="" id="" cols={30} rows={5} placeholder='Enter your message'></textarea>
          </Reveal>
          <Reveal>
            <button className=" bg-lime-800  text-white px-4 py-3 lg:px-12 lg:py-6 w-full rounded-lg hover:bg-black cursor-pointer">SUBMIT</button>
          </Reveal>
          </div>
        </div>
        <Reveal>
        <div className=" flex justify-center items-center w-full -mt-20 object-cover"> <img src={hero} alt="animated workers" width={500} height={500} />
        </div>
      </Reveal>
      </section>
      <img src={cube} alt="backgound" className="w-full h-72 absolute top[3550px] hidden xl-block" />
    </>
  )
}

export default Contacts
