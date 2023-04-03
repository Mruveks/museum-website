import React from 'react'
import { RiSurgicalMaskFill, RiMap2Line } from 'react-icons/ri'
import { MdBrunchDining, MdDirectionsCarFilled, MdGroups2, MdAccessibleForward } from 'react-icons/md'
import { Helmet } from 'react-helmet'
const PlanYourVisit = () => {
  return (
    <main>

      <Helmet>
        <title>Plan Your Visit | The Museum</title>
        <meta name="description" content="Plan Your Visit at The Museum"></meta>
      </Helmet>

      <article className="w-full h-[40rem] bg-planYourVisit bg-top-bottom">
        <section className="flex flex-col h-full justify-center text-white pt-16 px-16 space-y-4">
          <header className="w-full text-6xl font-bold">Plan Your Visit</header>
          <p className="text-2xl font-semibold">Masks are strongly recommended. Review our latest guidelines.</p>
          <div className="flex w-full text-xl space-x-8">
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Tickets</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Locations</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Know Before You Go</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2  px-8 border-2 border-white rounded-2xl">More Ways to Explore</button>
            <button className="bg-transparent hover:bg-red-800 transition duration-700 py-2 px-8 border-2 border-white rounded-2xl">Now On View</button>
          </div>
          <div className="flex w-full text-xl space-x-8">
            <p className="hover-underline-animation cursor-pointer">Read our visitor guidelines</p>
            <p className="hover-underline-animation cursor-pointer">Admissions policy (10 languages)</p>
          </div>
        </section>
      </article>

      <article className="h-fit w-full grid grid-cols-[60%_40%]">
        <div className="p-16 w-full space-y-4">
          <header className="text-6xl font-bold">Tickets</header>
          <p className="text-2xl font-semibold">General Admission</p>
          <p>Visitors not eligible for suggested admission may purchase tickets online.</p>
          <div className="grid grid-flow-row mt-10 text-xl space-y-4 text-right">
            <div className="grid grid-cols-[90%_10%] w-full border-b border-gray-400">
              <h2 className="text-left w-full">Adults</h2>
              <p className="font-bold">$30</p>
            </div>
            <div className="grid grid-cols-[90%_10%] w-full border-b border-gray-400">
              <h2 className="text-left w-full">Seniors (65 and over)</h2>
              <p className="font-bold">$22</p>
            </div>
            <div className="grid grid-cols-[90%_10%] w-full border-b border-gray-400">
              <h2 className="text-left w-full">Students</h2>
              <p className="font-bold">$17</p>
            </div>
            <div className="grid grid-cols-[90%_10%] w-full border-b border-gray-400">
              <h2 className="text-left w-full">Children (under 12)</h2>
              <p className="font-bold">free</p>
            </div>
            <div className="grid grid-cols-[90%_10%] w-full border-b border-gray-400">
              <h2 className="text-left w-full">Members and patrons</h2>
              <p className="font-bold">free</p>
            </div>
          </div>
        </div>

        <aside className="pt-16 px-16 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Booking Online</h2>
            <p className="text-md">General Admission tickets purchased online can be scanned at any museum entrance at your selected location, date, and time.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Included with your ticket</h2>
            <p className="text-md">All admission tickets include exhibitions and same-day entry to both Met locations</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Member benefits</h2>
            <p className="text-md">Members and patrons enjoy free and unlimited entry. Scan your membership card at any museum entrance for admission. Need help? Visit the membership desk in the Great Hall.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Group Visits</h2>
            <p className="text-md">All groups of 10 or more, and third-party guided tours of any size, are required to register in advance. Register here</p>
          </div>
        </aside>

        <section className="w-full px-16">
          <div className="flex">
            <button className="border bg-red-700 hover:bg-gray-600 transition duration-700 py-4 px-8 mr-4 w-fit text-white font-semibold rounded-lg">Buy Tickets</button>
            <button className="border border-black py-4 px-8 w-fit text-black hover:text-white transition duration-700 hover:bg-gray-600 font-semibold rounded-lg">Become a Member</button>
          </div>
          <p className="font-semibold mt-8 hover-underline-animation-black cursor-pointer underline underline-offset-4 hover:no-underline">Complimentary admission eligibility and passes</p>
        </section>
      </article>

      <header className="text-6xl font-bold px-16 py-16">Know Before You Go</header>
      <article className="h-fit w-full grid grid-cols-2 px-16">
        <section className="w-full grid grid-flow-row text-left space-y-8">
          <div className="w-full grid grid-cols-[30%_70%]">
            <RiSurgicalMaskFill size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Visitor Guidelines</h2>
              <p className="text-md">Masks are strongly recommended. Review our latest guidelines.</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-[30%_70%]">
            <RiMap2Line size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Museum Map</h2>
              <p className="text-md">Use The Museum's map to get around museum.</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-[30%_70%]">
            <MdBrunchDining size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Dining</h2>
              <p className="text-md">Choose from a wide menu that includes items for our youngest visitors.</p>
            </div>
          </div>
        </section>

        <section className="w-full grid grid-flow-row text-left space-y-8">
          <div className="w-full grid grid-cols-[30%_70%]">
            <MdDirectionsCarFilled size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Directions and Parking</h2>
              <p className="text-md">Get information on traveling on the Museum</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-[30%_70%]">
            <MdAccessibleForward size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Accessibility</h2>
              <p className="text-md">We welcome all visitors and are committed to offering programs and services that are accessible to everyone..</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-[30%_70%]">
            <MdGroups2 size={80} className="w-full"/>
            <div className="w-full my-auto">
              <h2 className="text-2xl font-semibold">Membership</h2>
              <p className="text-md">Enjoy free admission, complimentary guest tickets, invitations to exclusive viewing hours, discounts, and more.</p>
            </div>
          </div>
        </section>
      </article>
    
    </main>
  )
}

export default PlanYourVisit
