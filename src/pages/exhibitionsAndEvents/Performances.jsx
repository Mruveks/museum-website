import React from 'react'
import { performancesData } from '../../data/performancesData'
import { Helmet } from 'react-helmet'
import ExhibitionTable from '../../components/ExhibitionTable'

const Performances = () => {

  var day = new Date();
  var today = day.getDate()
  var tomorrow = today + 1

  function getTodaysDate() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  function getTomorrowsDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = tomorrow.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  return (
    <main>

      <Helmet>
        <title>Events - Performances | The Museum</title>
        <meta name="description" content="Current, upcoming and past exhibitions"></meta>
      </Helmet>
      
      <article className="container">

      <section className="space-y-4 py-16">
        <header className="text-6xl font-bold">Performances</header>
        <div className="flex justify-between text-xl mb-4 font-semibold">
          <h2>Current and Upcoming</h2>
        </div>
      </section>

        <section className="w-full">
          <div className="flex space-x-2 text-left w-full text-2xl">
            <h1>Today,</h1>
            <h1 className="italic">{getTodaysDate()}</h1>
          </div>
          <ExhibitionTable data={performancesData[0]} />

          <div className="flex space-x-2 text-left w-full text-2xl">
            <h1>Tommorow,</h1>
            <h1 className="italic">{getTomorrowsDate()}</h1>
          </div>
          <ExhibitionTable data={performancesData[1]} />

          <div className="flex space-x-2 text-left w-full">
            <h1>Today,</h1>
            <h1>{getTodaysDate()}</h1>
          </div>
          <ExhibitionTable data={performancesData[2]} />
        </section>

        
      </article>
    </main>
  )
}

export default Performances
