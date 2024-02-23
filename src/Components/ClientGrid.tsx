import React from 'react'
import { Reveal } from '../Exports/Reveal'

interface Props{
  image: any 
  about: string
  name: string
  profile: string
}

const ClientGrid = ({ image, about, name, profile }:Props) => {
  return (
    <Reveal>
      <div className="bg-stone-700 px-6 py-8 flex justify-center items-center flex-col border-[3px] border-lime-500 gap-4 rounder-xl">
        <img src={image} alt="picture" width={140} height={140} />
        <p className="text-center text-[17px] text-slate-100"></p>
        <h1 className="text-center text-lime-500 text-2xl font-semibold">{name}</h1>
        <p className="text-center text-[17px] text-slate-100">{profile}</p>
      </div>
    </Reveal>
  )
}

export default ClientGrid
