import React from 'react'
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'
import {exhibitionsData} from '../components/exhibitionsData.js'

import { Helmet } from 'react-helmet'

const Exhibitions = () => {
  return (
    <main>

      <Helmet>
        <title>Exhibitions | The Museum</title>
        <meta name="description" content="Current, upcoming and past exhibitions"></meta>
      </Helmet>

      <article className="container py-16">
        <header className="text-4xl mb-8 font-bold">Exhibitions</header>
        <div className="flex justify-between text-xl mb-4 font-semibold">
          <h2>Current, Upcoming and Past</h2>
        </div>
      </article>

      <article className="grid grid-cols-2 container">
        
        {exhibitionsData.map((exhibition) => (
          <section key={exhibition.id} className="grid grid-flow-row text-left w-full h-[40rem] hover:shadow-2xl opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-700">
            <span className="h-[30rem] w-full">
              <img src={exhibition.img} alt="Exhibition 1" className=" h-[30rem] w-full" />
            </span>
            <span className="h-[8rem] w-full grid px-4 items-center">
              <p className="font-semibold">Exhibition</p>
              <p className="text-xl font-bold">{exhibition.title}</p>
              <p>{exhibition.date}</p>
            </span> 
          </section>
        ))}
        
      </article>
    </main>
  )
}

export default Exhibitions
