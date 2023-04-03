import React from 'react'
import membership from '../../assets/membership.jpg'
import { TiTickOutline } from 'react-icons/ti'
import { Helmet } from 'react-helmet'

const BecomeAMember = () => {

  return (
    <main>

      <Helmet>
        <title>Membership | The Museum</title>
        <meta name="description" content="Become a Member of The Museums Community. Join now to experience exclusive access to newest exhibitions"/>
      </Helmet>

      <article className="h-fit w-full grid grid-cols-2">
        <div className="p-24">
          <header className="text-6xl font-bold">Membership Starts Here</header>
          <div className="space-y-4 pr-12 py-10 text-xl">
            <p>As a valued Member, you'll enjoy free admission to exhibits, bring a guest every visit, Member Preview Days, and unbeatable discounts on dining and shopping. Choose a membership level that speaks to your passion and love for the arts.</p>
            <p>Experience exclusive access to our newest exhibitions before the public with your guest(s) during our Thursday morning Member Hour from 9 to 10 am as a valued Member of The Museum.</p>
            <p>When planning your visit to The Museum, simply bring your Member card as your ticket to access our galleries. No advanced reservations or timed tickets are necessary. Head to the Member entrance located at 81st Street and Fifth Avenue, and upon arrival, present your Membership card for immediate entry into the Museum galleries. It's that easy to enjoy all that The Museum has to offer as a valued Member.</p>
            <p>Good news for Members - we've made your admission experience even easier! You no longer need to make an advance reservation to enter the Museum. Simply show up with your Membership information and you'll be granted access. It's that simple!</p>
          </div>
        </div>
        <div>
          <img src={membership} alt="" className="object-cover h-full w-auto"/>
        </div>
      </article>

      <article className="grid grid-cols-4 mt-20 px-14">
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">

          <header className="font-semibold text-2xl">Membership</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$110 - $600</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">
              Join/Renew
              </button>
          </div>

          <div className="grid grid-cols-[20%_80%] h-60 text-lg">
            <TiTickOutline size={25} style={{ fill: 'green',}} /> 
            <p className="flex"> Free entry for Members + 1-4 guests</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="flex mt-4">Private access to exhibitions outside of public hours</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="mt-4">Dining and store discounts</p>
          </div>

          <p className="mt-10 px-4 font-semibold underline cursor-pointer">See all benefits</p>
        </div>

        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">

          <header className="font-semibold text-2xl">Patron</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$1,500 - $25,000</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">
              Join/Renew
            </button>
          </div>

          <div className="grid grid-cols-[20%_80%] text-lg h-60">
            <TiTickOutline size={25} style={{ fill: 'green',}} /> 
            <p className="flex">All Membership Benefits</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="flex mt-4">Private viewing of the spring Costume exhabition</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="mt-4">Summer Garden Party at Museum Private Gardens</p>
          </div>

          <p className="mt-10 px-4 font-semibold underline cursor-pointer">See all benefits</p>
        </div>
        
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">

          <header className="font-semibold text-2xl">The Apollo Circle</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$1,200 - $3,500</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">
              Join/Renew
            </button>
          </div>

          <div className="grid grid-cols-[20%_80%] text-lg h-60">
            <TiTickOutline size={25} style={{ fill: 'green',}} /> 
            <p className="flex">All Membership benefits</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="flex mt-4">Young Member Events</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="mt-4">Priority registration for art classes</p>
          </div>

          <p className="mt-10 px-4 font-semibold underline cursor-pointer">See all benefits</p>
        </div>
        
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">

          <header className="font-semibold text-2xl">The Museum's Friends</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$2,500 - $15,000</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">
              Join/Renew
            </button>
          </div>

          <div className="grid grid-cols-[20%_80%] text-lg h-60">
            <TiTickOutline size={25} style={{ fill: 'green',}} /> 
            <p className="flex">All Membership benefits</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="flex mt-4">Invitations to first viewings with curators</p>
            <TiTickOutline size={25} style={{ fill: 'green', marginTop: '16px' }} /> 
            <p className="mt-4">Seminars and talks</p>
          </div>

          <p className="mt-10 px-4 font-semibold underline cursor-pointer">See all benefits</p>
        </div>
      </article>
    </main>
  )
}

export default BecomeAMember
