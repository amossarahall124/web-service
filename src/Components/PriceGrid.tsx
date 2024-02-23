import React from 'react'
import { Reveal } from '../Exports/Reveal'

interface Props{
  plan: string
  price: string
  label: string
  about: string
}

const PriceGrid = ({ plan, price, label, about }:Props) => {
  return (
    <Reveal>
      <div className=" flex flex-col justify-center items-start bg-stone-700 px-6 pt-10 pb-20 rounded-xl gap-8 border-[3px] border-lime-500 ">
        <h1 className="text-lime-300 text-3xl">{plan} </h1>
        <h1 className="text-lime-500 text-5xl font-bold">{price}</h1>
        <p className="bg-lime-500 text-black px-6 py-2 rounded-md text-[28px] hover:bg-black hover:text-white cursor-pointer" >{label}</p>
        <p className="text-slate-100 text-xl">{about}</p>
      </div>
    </Reveal>
  )
}

export default PriceGrid
