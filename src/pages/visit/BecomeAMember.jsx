import React from 'react'
import membership from '../../assets/membership.jpg'
import { TiTickOutline } from 'react-icons/ti'

const BecomeAMember = () => {

  return (
    <main>
      <article className="h-fit w-full grid grid-cols-2">
        <div className="p-24">
          <header className="text-6xl font-bold">Membership Starts Here</header>
          <div className="space-y-4 py-10 text-xl">
            <p>Membership at The Met offers a rich variety of specialized benefits that give you a deeper connection with the art in our galleries. From free admission and guest passes on every visit, to Member Preview Days for new exhibitions and discounts on dining and shopping, it’s all waiting for you as a Member. Choose the level that inspires you below. </p>
            <p>Every week, Members and their guest(s) are invited to see the newest exhibitions before the Museum opens to the public during Member Morning Hours, Thursdays, from 9 to 10 am.</p>
            <p>Planning your visit? Your Member card is your ticket! No advance reservations or timed tickets are required. Use the Member entrance at 81st Street and Fifth Avenue. Once inside, present your Membership card and proceed directly to the Museum galleries and enjoy!</p>
            <p>We've streamlined your admission experience! Members no longer need an advance reservation to ensure Museum entry. Simply show up with your Membership information.</p>
          </div>
        </div>
        <div>
          <img src={membership} alt="" className="object-cover h-full w-auto"/>
        </div>
      </article>

      <article className="grid grid-cols-4 mt-20 px-14">
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl">

          <header className="font-semibold text-2xl">Membership</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$110 - $600</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">Join/Renew</button>
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

        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl">

          <header className="font-semibold text-2xl">Patron</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$1,500 - $25,000</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">Join/Renew</button>
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
        
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl">

          <header className="font-semibold text-2xl">The Apollo Circle</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$1,200 - $3,500</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">Join/Renew</button>
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
        
        <div className="w-96 h-[40rem] flex flex-col p-8 space-y-12 border border-gray-200 shadow-xl hover:shadow-2xl">

          <header className="font-semibold text-2xl">The Museum's Friends</header>

          <div className="w-full space-y-2 px-4">
            <p className="font-bold text-lg">$2,500 - $15,000</p>
            <button className="border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit py-4 px-8 text-white font-semibold rounded-lg">Join/Renew</button>
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
