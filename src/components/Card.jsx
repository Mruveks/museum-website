import React from 'react'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'

const Card = () => {

  return (
    <main className="grid gap-16 w-auto h-fit mt-20">

      <section className="grid grid-cols-2">
        <img src={card1} alt="" className="w-auto"/>
        <div className="bg-gray-200 space-y-4 p-16">
          <h2 className="text-2xl font-bold">How We Collect: Research, Transparency, and Collaboration</h2>
          <p>Learn about The Met's collecting practices and provenance research.</p>
          <a href="#" className="hover-underline-animation font-semibold">Read More</a>
        </div>
      </section>

      <section className="grid grid-cols-2">
        <div className="bg-gray-200 space-y-4 p-16">
          <h2 className="text-2xl font-bold">Women's History Month</h2>
          <p>Celebrate the vital contributions of women artists through exhibitions, talks, digital content, and more.</p>
          <a href="#" className="hover-underline-animation font-semibold">Learn more</a>
        </div>
        <img src={card2} alt="" className="w-auto"/>
      </section>

      <section className="grid grid-cols-2">
        <img src={card3} alt="" className="w-auto"/>
        <div className="bg-gray-200 space-y-4 p-16 ">
          <h2 className="text-2xl font-bold">Art and Activism: Environmental Protection and Contemporary Indigenous Art</h2>
          <p>On Thursday, March 30 join featured artists and the curator of Water Memories and Art of Native America: The Charles and Valerie Diker Collection for a free online conversation.</p>
          <a href="#" className="hover-underline-animation font-semibold">Register now</a>
        </div>
      </section>

      <section className="grid grid-cols-2">
        <div className="bg-gray-200 space-y-4 p-16">
          <h2 className="text-2xl font-bold">Date Night at The Met</h2>
          <p>Every Friday and Saturday night enjoy live music, drinks, and gallery chats.</p>
          <a href="#" className="hover-underline-animation font-semibold">Plan your visit</a>
        </div>
        <img src={card4} alt="" className="w-auto"/>
      </section>


      <section className="grid grid-cols-2">
        <img src={card5} alt="" className="w-auto"/>
        <div className="bg-gray-200 space-y-4 p-16">
          <h2 className="text-2xl font-bold">Membership at The Museum</h2>
          <p>Museum Members enjoy a rich variety of specialized benefits— from free guest passes to Member Preview Days for new exhibitions—all while supporting our mission.</p>
          <a href="#" className="hover-underline-animation font-semibold">See the benefits</a>
        </div>
      </section>

    </main>
  )
}

export default Card
