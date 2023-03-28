import React from 'react'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'

const Card = () => {

  return (
    <main className="grid gap-16 w-auto h-fit mt-20">
      <section className="grid grid-cols-2">
        <img src={card1} alt="" className="w-auto"/>
        <div className="bg-gray-200 space-y-8 p-16">
          <h2 className="text-2xl">How We Collect: Research, Transparency, and Collaboration</h2>
          <p>Learn about The Met's collecting practices and provenance research.</p>
          <a href="#" className="underline">Read More</a>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="bg-gray-200 space-y-8 p-16">
          <h2 className="text-2xl">Women's History Month</h2>
          <p>Celebrate the vital contributions of women artists through exhibitions, talks, digital content, and more.</p>
          <a href="#" className="underline">Learn more</a>
        </div>
        <img src={card2} alt="" className="w-auto"/>
      </section>
      <section className="grid grid-cols-2">
        <img src={card3} alt="" className="w-auto"/>
        <div className="bg-gray-200 space-y-8 p-16">
          <h2 className="text-2xl ">Art and Activism: Environmental Protection and Contemporary Indigenous Art</h2>
          <p>On Thursday, March 30 join featured artists and the curator of Water Memories and Art of Native America: The Charles and Valerie Diker Collection for a free online conversation.</p>
          <a href="#" className="underline">Register now</a>
        </div>
      </section>

    </main>
  )
}

export default Card
