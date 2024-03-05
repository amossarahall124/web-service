import React from 'react'
import heroimg from "../Assets/images/heroimg.png";
import {Reveal} from '../Exports/Reveal';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 justify-between items-center gap-4 w-full bg-stone-900 h-auto lg:h-screen" >

      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20">
        <Reveal>
          <h1 className="text-lime-600 font-bold text-6xl	"> One-Stop shop for all your static web needs  </h1>
        </Reveal>
        <Reveal>
          <p className=" text-slate-100 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel laboriosam adipisci molestiae placeat quae dolorem minima architecto odit beatae!</p>
        </Reveal>
        <Reveal>
          <div className="flex justify-center items-center gap-7">
            <button className="bg-lime-500 text-black px-4 lg:px-8 py-3 rounded-md text[18px] hover:bg-black hover:text-white cursor-pointer"> View More</button>
            <button className=" border-2 text-lime-500 text-[18px] rounded-md px-4 lg:px-8 py-3  hover:border-black hover:bg-lime-500 hover:text-black cursor-pointer">Watch Video</button>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <div className=" flex justify-center items-center w-full px-5 py-20 object-cover"> <img src={heroimg} alt="animated workers" width={800} height={800} />
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
