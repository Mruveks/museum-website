import React from 'react'
import { Helmet } from 'react-helmet'

const FoodAndDrink = () => {
  return (
    <main>
      <Helmet>
        <title>Food and Drink | The Museum</title>
        <meta name="description" content="All Members and Patrons receive a 10% discount in all public restaurants at The Museum." />
      </Helmet>
      <article className="container text-left pt-16 space-y-4">
        <header className="text-6xl font-bold">Food and Drink</header>
        <p>All Members and Patrons receive a 10% discount in all public restaurants at The Museum. Look for exhibition-inspired menu offerings the next time you visit The Eatery and The Met Dining Room.</p>
        <p>Please note: Museum admission is required to enter</p>
      </article>
    </main>
  )
}

export default FoodAndDrink
