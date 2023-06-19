import { useState } from 'react'
import './App.css'
import Nav from './component/nav'
import Left from './component/left'
import Right from './component/right'
import Title from './component/title'
import Box1 from './component/box1'
import Box2 from './component/box2'
import Box3 from './component/box3'
import Box4 from './component/box4'
import Corner from './component/corner'


function App() {
  return (
    //  react.fragment is like a empty tag
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Left/>
      </div>
      <div>
        <Right/>
      </div>
      <div>
        <Title/>
      </div>
      <div>
        <Box1/>
      </div>
      <div>
        <Box2/>
      </div>
      <div>
        <Box3/>
      </div>
      <div>
        <Box4/>
      </div>
      <div>
        <Corner/>
      </div>
    </>
  )

}

export default App
