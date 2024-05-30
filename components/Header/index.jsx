import React from 'react'
import Navlink from '../Navlink'
import style from './style.module.css'
import Icon from '../Icon'

import CartBadge from '../CartBadge'
const linksList = [
   { href: '/', text: 'Home' },
   { href: '/about', text: 'About' },
   { href: '/admin/dashboard', text: 'Dashboard' },
   { href: '/recommendations', text: 'Recommendations' },
]

export default function Header() {

   return (
      <header className={style.header}>
         {/* <span style={{ display: "flex", gap: "20px" }}> */}
            {linksList.map((link) => (
               <Navlink key={link.href} href={link.href}>
                  {link.text}
               </Navlink>
            ))}
         {/* </span> */}

         {/* <span style={{border: "solid 3px red", display: "flex", gap: "20px"}}> */}
            <Navlink href={'/mycart'}>
               <CartBadge  />
            </Navlink>
            <Icon />
         {/* </span> */}
         <div className={style.lightning}></div>
      </header>
   )
}
