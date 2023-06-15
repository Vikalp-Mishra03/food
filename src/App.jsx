import { useState } from 'react'
import './App.css'
// import nav from './component/nav'
import Nav from './component/nav'
import Card from './component/card';
function App() {
  return (
    //  react.fragment is like a empty tag
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Card />
      </div>
    </>
  )

}

export default App
