import React from 'react'
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';
import icon_4 from '../assets/icon_4.png';
import icon_5 from '../assets/icon_5.png';
import icon_6 from '../assets/icon_6.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (

      <footer className='text-white-100 bg-black-50 lg:px-20 px-5 container mx-auto font-inter bg-img'>

        <div className="lg:flex block justify-between items-center gap-x-44 lg:py-20 lg:space-y-0 space-y-8">

          <div data-aos="fade-right" className="lg:w-1/3 w-full text-white-50">

            <img src={logo} alt='logo'></img>

            <p className='py-6 text-white-50'>
              Experience the next generation<br></br>
              of Security and Privacy.
            </p>

            <a href="https://t.me/arbitrumclassic_arb" className=''>
              <button className="text-white-100 font-semibold md:text-lg text-sm px-5 py-3 rounded-lg border-custom capitalize">
                untlimited trial for 14 days
              </button>
            </a>
          </div>

          <div data-aos="fade-left" className="lg:w-1/3 w-full flex items-start justify-center gap-x-24">
            <div>
              <h5 className='font-libre uppercase font-semibold pb-5'>Home</h5>
              <ul className='text-white-50 space-y-4'>
                <li>Features</li>
                <li>Our Story</li>
                <li>Tokenomics</li>
              </ul>
            </div>

            <div>
              <h5 className='font-libre uppercase font-semibold pb-5'>Legals</h5>
              <ul className='text-white-50 space-y-4'>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Value Proposition</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='flex flex-wrap justify-between items-center'>
          <p className='pt-12 pb-6 text-white-50 capitalize'>Copyright © {new Date().getFullYear()} Solve X. All rights reserved.</p>

          <div className='flex items-center'>
            <a href='/'>
              <img src={icon_1} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_2} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_3} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_4} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_5} alt=''></img>
            </a>
            <a href='/'>
              <img src={icon_6} alt=''></img>
            </a>
          </div>
        </div>
      </footer>

  )
}
