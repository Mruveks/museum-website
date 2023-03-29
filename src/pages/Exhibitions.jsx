import React from 'react'
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'


const Exhibitions = () => {
  return (
    <main>

      <article className="container py-16">
        <header className="text-4xl mb-8 font-bold">Exhibitions</header>
        <div className="flex justify-between text-xl mb-4 font-semibold">
          <h2>Current, Upcoming and Past</h2>
        </div>
      </article>

      <article className="grid grid-cols-2">
        
        <section className="grid grid-flow-row w-full h-[40rem] hover:shadow-xl opacity-80 hover:grayscale-0 hover:opacity-100">
          <span className="h-[30rem] w-full">
            <img src={ex1} className=" h-[30rem] w-full" />
          </span>
          <span className="h-[10rem] w-full flex flex-col items-center justify-center border-r border-gray-400 ">
            <header className="font-semibold">Exhibition</header>
            <header className="text-xl font-bold">The Facade Commission: Hew Locke, Gilt</header>
            <p>Through May 30th</p>
          </span> 
        </section>

        <section className="grid grid-flow-row w-full h-[40rem] hover:shadow-xl opacity-80 hover:grayscale-0 hover:opacity-100">
          <span className="h-[30rem] w-full">
            <img src={ex2} className=" h-[30rem] w-full" />
          </span>
          <span className="h-[10rem] w-full flex flex-col items-center justify-center border-gray-400 ">
            <header className="font-semibold">Exhibition</header>
            <header className="text-xl font-bold">In Praise of Painting: Dutch Masterpieces at The Museum</header>
            <p>Ongoing</p>
          </span>
        </section>

        <section className="grid grid-flow-row w-full h-[40rem] hover:shadow-xl opacity-80 hover:grayscale-0 hover:opacity-100">
          <span className="h-[30rem] w-full">
            <img src={ex3} className=" h-[30rem] w-full" />
          </span>
          <span className="h-[10rem] w-full flex flex-col items-center justify-center border-r border-gray-400 ">
            <header className="font-semibold">Exhibition</header>
            <header className="text-xl font-bold">Lives of the Gods: Divinity in Maya Art</header>
            <p>Through April 2nd</p>
          </span> 
        </section>

        <section className="grid grid-flow-row w-full h-[40rem] hover:shadow-xl opacity-80 hover:grayscale-0 hover:opacity-100">
          <span className="h-[30rem] w-full">
            <img src={ex2} className=" h-[30rem] w-full" />
          </span>
          <span className="h-[10rem] w-full flex flex-col items-center justify-center border-gray-400 ">
            <header className="font-semibold">Exhibition</header>
            <header className="text-xl font-bold">In Praise of Painting: Dutch Masterpieces at The Museum</header>
            <p>Ongoing</p>
          </span>
        </section>
        

      </article>
    </main>
  )
}

export default Exhibitions
