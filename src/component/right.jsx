import React, { useState } from 'react'

export default function right() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div class="right-box" onClick={() => setOpen(!open)}>
        <div class="notice-board">
          <img src="src/assets/img/cross.png" alt="" />
          <p>Notice Board</p>
        </div>
        <div class="white" >
        </div>
      </div>

      {
        open &&
        <div class="large-box" onClick={() => setOpen(false)}>
          <div class="notice-board">
            <img src="src/assets/img/cross.png" alt="" />
            <p>Notice Board</p>
          </div>
          <div class="white">
            <p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p><br /><p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br />80% of the time in researching, and planning and 20% of the time in implementation.</p><br /><p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p><p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p><br /><p>Let's start thinking together, and search for how you can get the essence of project management.</p>
          </div>
        </div>
      }
    </>
  )
}
