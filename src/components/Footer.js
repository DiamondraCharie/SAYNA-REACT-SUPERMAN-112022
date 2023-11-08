import React from 'react'
import { NavLink } from 'react-router-dom'
import icon_WB from '../assets/logos/icon_WB.png'
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
             <img src={icon_WB} alt="" />
             <span class="textfooter"> Ce projet respecte l’univers cinématographique des films Superman.</span>
          </div>
          <div class="social-footer mt-3">
             <NavLink href="" class="social-item-hoveryellow">
               <img src={logo_1} alt="" />
               <img src={logo_2} alt="" />
               <img src={logo_3} alt="" />
             </NavLink>
             <NavLink href="" class="social-item">
                <img class="hoveryellow" src={facebook} alt=""/>
             </NavLink>
             <NavLink href="" class="social-item">
              <img class="hoveryellow" src={instagram} alt=""/>
             </NavLink>
             <NavLink href="" class="social-item">
               <img class="hoveryellow" src={twitter} alt=""/>
             </NavLink>
          </div>
       </div>
    </footer>
  )
}

export default Footer