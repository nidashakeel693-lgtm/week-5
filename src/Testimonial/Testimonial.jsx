import { useState } from 'react'

import './Testimonial.css'

function Testimonial() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='container1'>

          <div className='card1'>
            <p>i have been solving all the project ideas on roadmap.sh and i am surprised how far i have come from where i started</p>
            <p>Highly recomended</p>
          </div>

          <div className='box1'>
            <div className='profile3'>
              <div className='left3'>
                <img src='WhatsApp Image 2026-05-06 at 11.30.00.jpeg'></img>
              </div>
            </div>
            <p> Artem jones</p>
            <p4>Junior frontend developer</p4>
          </div>
        </div>
        <div className='container2'>
          <div className='card2'>
            <p5>Since starting my carrier in 2021, i have only followed one resourse roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family</p5>
            <div className='profile'>
              <div className='left'>
                <img src='WhatsApp Image 2026-05-06 at 11.30.00.jpeg'></img>
              </div>
            </div>
            <div className='right'>
              <p className='name'>Artem Jones</p>
              <p className='role'>Junior frontend developer</p>
            </div>
          </div>
        </div>
        <div className='profile2'>
          <img src='WhatsApp Image 2026-03-24 at 19.50.18.jpeg'></img>
        </div>
        <div className='container3'>
          <div className='card3'>
            <div className='stars'>🌟🌟🌟🌟🌟</div>
            <p1>Jacki Mackle</p1>
            <p2>Engineering Manager</p2>
            <p>I find myself recommending roadmap.sh to all the internees or junior developers.its a great way to skill up and grow in your carrier.</p>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="card6">

          <p>
            roadmap.sh is an incredible resource. I was fortunate
            to discover it during my university days in 2018.Back then it was just a single repository with three images.its amazing to see how much impact it has had on millions of live then.
          </p>

          <div className="bottom-profile">
            <img src="WhatsApp Image 2026-05-06 at 11.30.00.jpeg" />
            <h3>Artem Jones</h3>
          </div>

        </div>


      </div>


    </>
  )
}

export default Testimonial
