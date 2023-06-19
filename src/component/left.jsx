import React, {useState } from 'react'

export default function left() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div class="left-box"  onClick={() => setOpen(!open)}>
        <button class="black-box" >
        </button>


        <div class="white-box" >
          <div className="border" ></div>
          <span className='span'>1</span>
        </div>
      </div>
      {
        open &&
        <div className="big-box"  onClick={() => setOpen(false)}>
          <div className="black-box1">
            <p className='p'>Journey Board</p>
          </div>
          <p class="black-box1"></p>
          <div class="white-box">
            <ul className='main'>
              <li>Explore the world of management </li>
            </ul>
            <ul className='point'>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}
