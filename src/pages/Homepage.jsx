import React from 'react'
import museumvideo from '../assets/museum-video.mp4'

const Homepage = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden mb=96">
        <div class="relative pt-40 z-10">
          <header>Welcome to The Museum</header>
          <button className="flex text-xl border-white border-2 w-fit px-4 py-2 mt-4 mx-auto">Plan Your Visit</button>
        </div>
        <video loop="true" autoplay="autoplay" playsinline muted className="absolute z-0 top-0 left-0 w-full h-full object-cover">
          <source src={museumvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="px-40">
        <header className="text-4xl">Now On View</header>
        <div className="flex justify-between text-xl">
          <h2>Explore exhibition gallery guides, videos, articles, and more.</h2>
          <p>View all exhibitions</p>
        </div>

        <div className="grid grid-cols-3">
          /**Add paginations */
        </div>
      </div>

    </div>
  )
}

export default Homepage
