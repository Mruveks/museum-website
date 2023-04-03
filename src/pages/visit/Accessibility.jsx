import React from 'react'
import { Helmet } from 'react-helmet'
import access2 from '../../assets/accessibility2.jpg'
import access3 from '../../assets/accessibility3.jpg'
import access4 from '../../assets/accessibility4.jpg'
import access5 from '../../assets/accessibility5.jpg'
import access6 from '../../assets/accessibility6.jpg'
import access7 from '../../assets/accessibility7.jpg'
import access8 from '../../assets/accessibility8.jpg'
import access9 from '../../assets/accessibility9.jpg'

const Accessibility = () => {
  return (
    <main>
      <Helmet>
        <title>Accessibility | The Museum</title>
        <meta name="description" content="Accessibility at The Museum"></meta>
      </Helmet>

      <article className="w-full h-[50rem] bg-accessibility bg-right-bottom">
        <section className="flex flex-col h-full items-center justify-center text-white pt-16 px-16 space-y-8">
          <header className="w-full text-6xl  text-center">Accessibility at The Museum</header>
          <p className="text-2xl font-semibold">The Museum welcomes all visitors and affirms its commitment to offering programs and services that are accessible to everyone.</p>
          <div className="flex w-full justify-center text-xl space-x-8">
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Visitor Information</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Programs and Resources</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Art and Disability</button>
          </div>
        </section>
      </article>

      <article className="container grid grid-cols-2 gap-20 py-16 ">
        <section className="col-span-2 text-center space-y-4">
          <header className="text-6xl ">Visitor Information</header>
          <p className="text-lg">Learn more about services and accessibility for visitors with disabilities at The Museum</p>
        </section>

        <div className="grid w-full h-auto font-bold">
          <img src={access2} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <sub className=" uppercase underline">visit</sub>
            <h2 className="text-2xl cursor-pointer hover:scale-y-150 transition duration-700">Plan your Visit</h2>
          </span>
        </div>

        <div className="grid w-full h-auto font-bold">
          <img src={access9} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <sub className="uppercase underline">group visit</sub>
            <h2 className="text-2xl cursor-pointer hover:scale-y-150 transition duration-700">Plan your Visit</h2>
          </span>
        </div>
      </article>

      <article className="container grid grid-cols-2 gap-20 py-16">
        <section className="col-span-2 text-center space-y-4 ">
          <header className="text-6xl ">Programs and resources</header>
          <p className="text-lg">
            Make The Museum yours! Choose from a variety of resources and programs tailored to meet the needs of visitors with disabilities. <br />
            Program times, audiences, and topics vary.
          </p>
        </section>
        
        <div className="grid col-span-2 w-full h-auto font-bold">
          <img src={access5} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <h2 className="text-2xl hover-underline-animation-black cursor-pointer">Visitors with Developmental and Learning Disabilities and Those on the Autism Spectrum</h2>
          </span>
        </div>

        <div className="grid w-full h-auto font-bold">
          <img src={access8} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <h2 className="text-2xl hover-underline-animation-black cursor-pointer">Visitors who are Blind or Partially Sighted</h2>
          </span>
        </div>

        <div className="grid w-full h-auto font-bold">
          <img src={access7} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <h2 className="text-2xl hover-underline-animation-black cursor-pointer">Visitors who are Deaf</h2>
          </span>
        </div>
        

        <div className="grid w-full h-auto font-bold">
          <img src={access6} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <h2 className="text-2xl hover-underline-animation-black cursor-pointer">Visitors with Dementia and Their Care Partner</h2>
          </span>
        </div>
      </article>

      <article className="container grid grid-cols-2 gap-20 py-16 ">
        <section className="col-span-2 text-center space-y-4">
          <header className="text-6xl ">Art and Disability</header>
          <p className="text-lg">Discover stories from across The Museum community</p>
        </section>

        <div className="grid w-full h-auto font-bold">
          <img src={access3} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <sub className=" uppercase underline">#museumaccess</sub>
            <h2 className="text-2xl cursor-pointer hover:underline">Disabled and Deaf artists reflect on work from The Museum’s collection</h2>
          </span>
        </div>

        <div className="grid w-full h-auto font-bold">
          <img src={access4} alt="" className="h-96 w-full object-cover" />
          <span className="w-full pt-4">
            <sub className=" uppercase underline">#museumyouth</sub>
            <h2 className="text-2xl cursor-pointer hover:underline">Young artists Rob, Jake, and Susan share how they make art at The Museum</h2>
          </span>
        </div>
      </article>

    </main>
  )
}

export default Accessibility
