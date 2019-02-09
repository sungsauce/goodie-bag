import React from 'react'
import Candies from './candies'
import {Link, Route} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/candies">All Candies</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route path="/candies" component={Candies} />
      </main>
    </div>
  )
}

export default Root
