import React, { useEffect, useState } from 'react'
import { menu, close } from '../Assets/icons'


const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
  }
  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  }

  useEffect(() => {
    setMenuClass(toggle ? 'transition-opacity ease-in-out duraction-300 transform translate-y-0 opacity-100' : 'transition-opacity ease-in-out duraction-300 transform translate-y-full opacity-0');
  }, [toggle])
  return (
    <section className="w-full bg-stone-800 text-white flex justify-between items-center px-8 py-6 lg:px-16 absolute top-0 z-40">
      <h1 className="text-lime-500 text-3xl font-bold">WEB A-LINED</h1>
      <div className=" hidden lg:flex justify-end item-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-lime-600 hover:text-white active:text-white" href="/">Home</a></li>
          <li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-lime-600 hover:text-white active:text-white" href="services">Services</a></li>
          <li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-lime-600 hover:text-white active:text-white" href="reviews">Reviews</a></li>
          <li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-lime-600 hover:text-white active:text-white" href="pricing">Pricing</a></li>
          <li><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-lime-600 hover:text-white active:text-white" href="contacts">Contacts</a></li>
        </ul>
      </div>

      <div className=" flex lg:hidden flex-col">
        {iconToggle ? (
          <img src={close} alt="closed icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
        ) : (
          <img src={menu} alt="open icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
        )}

        {toggle && (
          <div id="mob-menu" className={` bg-lime-500 text-black py-4 absolute  top-20 right-0 w-full ${menuClass}`}>
            <ul className="flex justify-center items-center gap-2">
              <li className=" text-xl text-black font-semibold cursor-pointer hover:bg-lime-500 hover:text-white w-full py-3 text-center">Home</li>
              <li className=" text-xl text-black font-semibold cursor-pointer hover:bg-lime-500 hover:text-white w-full py-3 text-center">Services</li>
              <li className=" text-xl text-black font-semibold cursor-pointer hover:bg-lime-500 hover:text-white w-full py-3 text-center">Reviws</li>
              <li className=" text-xl text-black font-semibold cursor-pointer hover:bg-lime-500 hover:text-white w-full py-3 text-center">Pricing</li>
              <li className=" text-xl text-black font-semibold cursor-pointer hover:bg-lime-500 hover:text-white w-full py-3 text-center">Contacts</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default Header
