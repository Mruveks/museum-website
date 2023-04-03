import React from 'react'
import { Helmet } from 'react-helmet'
import img from '../../assets/ex3.jpg'
import outdoorCafe from '../../assets/outdoorCafe.jpg'
import balconyLounge from '../../assets/balconyLounge.jpg'
import balconyCafe from '../../assets/balconyCafe.jpg'
import eatery from '../../assets/eatery.jpg'
import roofGarden from '../../assets/roofGarden.jpg'
import wingedCafe from '../../assets/wingedCafe.jpg'

const FoodAndDrink = () => {
  return (
    <main>
      <Helmet>
        <title>Food and Drink | The Museum</title>
        <meta name="description" content="All Members and Patrons receive a 10% discount in all public restaurants at The Museum." />
      </Helmet>

      <article className="container pt-16 space-y-4">
        <header className="text-6xl font-bold">Food and Drink</header>
        <p>All Members and Patrons receive a 10% discount in all public restaurants at The Museum. Look for exhibition-inspired menu offerings the next time you visit The Eatery and The Met Dining Room.</p>
        <p>Please note: Museum admission is required to enter</p>
      </article>

      <article className="grid grid-cols-2 gap-10 container pt-16">
        <span className="w-full h-auto space-y-4">
          <img src={eatery} alt="eatery" className="h-96 w-full object-cover" />
          <p>
            <h2 className="font-semibold text-2xl">The Eatery, Ground Floor</h2>
            <p className="font-semibold text-xl">$$</p>
            <div>
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                Monday–Tuesday and Thursday–Sunday: 11 am–4 pm <br />
                Closed Wednesday
              </p>
            </div>
          </p>
        </span>
        <span className="w-full h-auto space-y-4">
          <img src={wingedCafe} alt="wingedCafe" className="h-96 w-full" />
          <p>
            <h2 className="font-semibold text-2xl">Wing Cafe, Floor 1</h2>
            <p className="font-semibold text-xl">$$</p>
            <div>
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                 Sunday–Tuesday and Thursday: 11 am–4 pm <br />
                 Friday and Saturday: 11 am–8 pm <br/>
                 Closed Wednesday
              </p>
            </div>
          </p>
        </span>
        <span className="w-full h-auto space-y-4">
          <img src={balconyCafe} alt="balconyCafe" className="h-96 w-full object-cover" />
          <p>
            <h2 className="font-semibold text-2xl">Great Hall Balcony Cafe, Floor 2</h2>
            <p className="font-semibold text-xl">$</p>
            <div>
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                Sunday–Tuesday and Thursday: 11 am–4:15 pm <br />
                Friday and Saturday: 11 am–4:15 pm and 5–8:15 pm <br />
                Closed Wednesday
              </p>
            </div>
          </p>
        </span>
        <span className="w-full h-auto space-y-4">
          <img src={balconyLounge} alt="balconyLounge" className="h-96 w-full object-cover" />
          <p>
            <h2 className="font-semibold text-2xl">Balcony Lounge, Floor 2</h2>
            <p className="font-semibold text-xl">$$$</p>
            <div className="">
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                Sunday–Tuesday: 11 am–4:45 pm (Last seating: 3:45 pm) <br />
                Thursday: 9 am–4:45 pm (Last seating: 3:45 pm) <br />
                Friday and Saturday: 11 am–8:45 pm (Last seating: 7:45 pm) <br />
                Closed Wednesday
              </p>
            </div>
          </p>
        </span>
        <span className="w-full h-auto space-y-4">
          <img src={roofGarden} alt="roofGarden" className="h-96 w-full object-cover" />
          <p>
            <h2 className="font-semibold text-2xl">The Cantor Roof Garden Bar, Floor 5</h2>
            <p className="font-semibold text-xl">$$$</p>
            <div className="">
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                The Cantor Rooftop Garden is reopening on Tuesday, April 18. The Bar is reopening Thursday, May 18.<br />
                Sunday–Tuesday and Thursday: 11 am–4:15 pm<br />
                Friday and Saturday: 11 am–8:15 pm<br />
              </p>
            </div>
          </p>
        </span>
      </article>

      <article className="grid grid-cols-2 container gap-10 pt-16">
        <img src={outdoorCafe} alt="outdoorCafe" className="h-96 w-full object-cover"/>
        <p>
          <h2 className="font-semibold text-2xl">Outdoor Cafe</h2>
            <p className="font-semibold text-xl">$</p>
            <div className="">
              <h3 className="font-semibold pt-4 text-xl">Hours</h3>
              <p>
                <p className="font-semibold">
                  Reopening Thursday, April 20.
                </p>
                Thursday–Tuesday: 11 am–4 pm<br />
              </p>
            </div>
          </p>
      </article>

      <section className="container pt-64 italic">
        <h2 className="text-sm">
          For more information about health and safety protocols while visiting the Museum, please read our Visitor Guidelines.
        </h2>
        <sub>
          Above: Menu items in The Eatery and The Balcony Lounge, photos by Anthony Tahlier Photography. Wing cafe, photo by Brett Beyer. Balcony Cafe, photo by John M. Hall.
        </sub>
        <br/>
        <sub>
          Roof Garden Bar and Outdoor Cafe, photos by Paula Lobo.
        </sub>
      </section>

    </main>
  )
}

export default FoodAndDrink
