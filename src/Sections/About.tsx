import React from 'react'
import { aboutgrids } from '../Exports'
import AboutGrid from '../Components/AboutGrid.jsx';
import { Reveal } from '../Exports/Reveal';

const About = () => {
    return (
        <section id="services" className="w-full bg-stone-900 flex flex-col px-7 py-4 lg:flex-row gap-10 lg:gap-20 h-fit  lg:px-16 lg:py-12">
            <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
                <Reveal>
                    <h1 className="text-lime-500 font-bold text-6xl">Affordable Hosting Solutions</h1>
                </Reveal>
                <Reveal>
                    <p className="text-slate-100 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam obcaecati, impedit autem id dolore reprehenderit vero saepe amet voluptatem.</p>  
                </Reveal>
                <Reveal>
                    <div className="flex justify-center items-center gap-7">
                        <button className="bg-lime-500 text-black px-8 py-3 rounded-md text[18px] hover:bg-black hover:text-white cursor-pointer"> Read More</button>
                    </div>
                </Reveal>
            </div>  
                <div className="flex justify-between items-center w-full lg:w-1/2  flex-wrap">
                    {aboutgrids.map((grid) => (
                        
                        <div key={grid.label} className="w-full lg:w-1/2">
                            <AboutGrid{...grid} />
                        </div>
                    ))}
                </div>


        </section>
    )
}

export default About
