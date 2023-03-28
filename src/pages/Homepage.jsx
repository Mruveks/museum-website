import React from 'react';
import museumvideo from '../assets/museum-video.mp4';
import ExhibitionTable from '../components/ExhibitionTable';
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'

const exhibitions = [
  { id: 1, title: 'Exhibition 1', image: ex1 },
  { id: 2, title: 'Exhibition 2', image: ex2 },
  { id: 3, title: 'Exhibition 3', image: ex3 },
  { id: 4, title: 'Exhibition 4' },
  { id: 5, title: 'Exhibition 5' },
  { id: 1, title: 'Exhibition 1' },
  { id: 2, title: 'Exhibition 2' },
  { id: 3, title: 'Exhibition 3' },
  { id: 4, title: 'Exhibition 4' },
  { id: 5, title: 'Exhibition 5' },
  { id: 1, title: 'Exhibition 1' },
  { id: 2, title: 'Exhibition 2' },
  { id: 3, title: 'Exhibition 3' },
  { id: 4, title: 'Exhibition 4' },
  { id: 5, title: 'Exhibition 5' },
];

const Homepage = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={museumvideo}
            autoPlay
            loop
            muted
            className="object-cover object-bottom w-full h-full"
            style={{ height: "calc(100% + 160px)", marginTop: "-80px" }}
          />
        </div>

        <div className="relative z-10 h-screen flex flex-col justify-center text-center">
          <header className="text-white text-4xl mb-4">
            Welcome to The Museum
          </header>
          <button className="text-white text-xl border-white border-2 py-2 px-6 mx-auto">
            Plan Your Visit
          </button>
        </div>
      </div>

      <div className="container mx-auto px-8 pt-16">
        <header className="text-4xl mb-8">Now On View</header>
        <div className="flex justify-between text-xl mb-4">
          <h2>Explore exhibition gallery guides, videos, articles, and more.</h2>
          <p>View all exhibitions</p>
        </div>
        <ExhibitionTable data={exhibitions} />
        

        <div className="grid grid-cols-3 gap-8">
          {/* Add paginations */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
