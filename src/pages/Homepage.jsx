import React from "react";
import museumvideo from '../assets/museum-video.mp4';
import ExhibitionTable from '../components/ExhibitionTable';
import Card from '../components/Card';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import {exhibitionsData} from '../components/exhibitionsData'

const Homepage = () => {

  return (
    <div>
      <Helmet>
        <title>The Museum</title>
        <meta name="description" content="Explore exhibition gallery guides, videos, articles, and more at The Museum." />
      </Helmet>
      
      <article className="relative h-screen overflow-hidden">
        <span className="absolute inset-0">
          <video
            src={museumvideo}
            autoPlay
            loop
            muted
            className=" object-cover brightness-50 w-full h-full"
            style={{ height: "calc(100% + 160px)", marginTop: "-80px" }}
          />
        </span>

        <span className="relative z-10 h-screen flex flex-col justify-center text-center">
          <header className="text-white text-4xl mb-4">
            Welcome to The Museum
          </header>
          <button className="text-white text-xl border-white border-2 py-2 px-6 mx-auto">
            Plan Your Visit
          </button>
        </span>
      </article>

      <article className="container pt-16 space-y-4">
        <header className="text-6xl font-bold">Now On View</header>
        <div className="grid grid-cols-2 text-xl mb-4 font-semibold">
          <h2>Explore exhibition gallery guides, videos, articles, and more.</h2>
          <div className="w-full text-right">
            <Link to="/exhibitions" preventScrollReset={false} relative="path" className="hover-underline-animation-black cursor-pointer">View all exhibitions</Link>
          </div>
        </div>
        <ExhibitionTable data={exhibitionsData} />
        <Card />
      </article>
    </div>
  );
};

export default Homepage;
