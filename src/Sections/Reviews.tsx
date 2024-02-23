import React from 'react'
import { clients } from '../Exports'
import ClientGrid from '../Components/ClientGrid'
import { Reveal } from '../Exports/Reveal'

const Reviews = () => {
  return (
    <section id="reviews" className="w-full flex flex-col gap-5 bg-stone-900 h-fit p-7 lg:-20">
      <Reveal>
        <p className=" text-lime-500 font-bold text-6xl text-center leading-[68px]">Reviews</p>
      </Reveal>
      <Reveal>
        <h1 className="text-center text-stone-500 text-5xl">Some Clients Words</h1>
      </Reveal>
      <Reveal> 
        <p className="text-slate-100 text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error architecto aliquam dolores veniam doloremque tenetur incidunt culpa quasi in!</p>
      </Reveal>
        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          {clients.map((client) => (
            <div key={client.name} className="w-80">
              {<ClientGrid{...client} />}
            </div>
          ))}
        </div>
    </section>
  )
}

export default Reviews
