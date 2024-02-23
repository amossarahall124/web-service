import React from 'react'
import { Reveal } from '../Exports/Reveal'
interface Props{
  text: string
  label : string
  heading: string
  icon : any
}

const AboutGrid = ({ icon, text, label, heading }: Props) => {
  return (
    <Reveal>
      <div className="flex justify-center items-center gap-5 flex-col lg:flex-rows border-[3px] border-lime-500 bg-stone-700 rounded-md m-2 p-3  lg:p-7" >
        <img src={icon} alt="icon" width={65} height={65} className="bg-slate-100 rounded-full hover:bg-lime-500 cursor-pointer " />
        <h1 className=" text-2xl lg:text-4xl text-center text-lime-600  font-semibold">Services</h1>
        <p className=" text-[22px] text-centeer text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore molestiae voluptatem? Dolorem minus unde nobis, nostrum mollitia vero distinctio.</p>
        <p className="bg-lime-800 text-black px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer ">View More
        </p>
      </div>
    </Reveal>
  )
}

export default AboutGrid
