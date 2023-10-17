import React from 'react'
import { Link } from 'react-router-dom'
import logo_0 from '../assets/logos/logo_0.png'
import logo_1 from '../assets/logos/logo_1.png'
import logo_2 from '../assets/logos/logo_2.png'
import logo_3 from '../assets/logos/logo_3.png'
import facebook from '../assets/icones/facebook.png'
import instagram from '../assets/icones/instagram.png'
import twitter from '../assets/icones/twitter.png'


const Footer = () => {
  return (
    <footer class="mt-5 py-5">
       <div class="container text-center">
          <div class="text-footer">
             <img src={logo_0} alt="" />
             <span class="textfooter"> Ce projet respecte l’univers cinématographique des films Superman.</span>
          </div>
          <div class="social-footer mt-3">
             <Link href="" class="social-item-hoveryellow">
               <img src={logo_1} alt="" />
               <img src={logo_2} alt="" />
               <img src={logo_3} alt="" />
             </Link>
             <Link href="" class="social-item">
                <img class="hoveryellow" src={facebook} alt=""/>
             </Link>
             <Link href="" class="social-item">
              <img class="hoveryellow" src={instagram} alt=""/>
             </Link>
             <Link href="" class="social-item">
               <img class="hoveryellow" src={twitter} alt=""/>
             </Link>
          </div>
       </div>
    </footer>
  )
}

export default Footer