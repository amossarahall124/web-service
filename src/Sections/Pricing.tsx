import React from 'react'
import { tick } from '../Assets/icons'
import { pricing } from '../Exports'
import PriceGrid from '../Components/PriceGrid.jsx';
import { Reveal } from '../Exports/Reveal';

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-stone-900 flex-col justify-center items-start h-fit px-7 py-14 lg:p-20 gap-5">
      <Reveal>
      <h1 className="text-lime-500 font-bold text-6xl">Pricing Table</h1>
      </Reveal>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between item-start w-full mt-5">
      <Reveal>    
        <p className="text-slate-100 text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis distinctio ducimus, numquam fugit accusamus at veritatis. Magni eligendi tempore impedit!</p>
      </Reveal>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center item-start gap-4">
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          </ul>
        </div>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center item-start gap-4">
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          <Reveal>
            <li className="flex justify-center items-center gap-4 text[21px] text-slate-100"><span className="bg-lime-500 p-1 rounded-full fill-white"><img src={tick} alt="ticky" width={30} height={30} /></span>Unlimited Pages</li>
          </Reveal>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-around items-center flex-wrap gap-10 mt-20">
        {pricing.map((price) => (
          <div className="w-96" key={price.plan}>
            <PriceGrid{...price} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
