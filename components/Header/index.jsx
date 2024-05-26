import React from 'react'
import Navlink from '../Navlink'
import style from './style.module.css'
import CartBadge from '../CartBadge/imdex'
const linksList = [
   { href: '/', text: 'Home' },
   { href: '/about', text: 'About' },
   { href: '/admin/dashboard', text: 'Dashboard' },
   { href: '/recommendations', text: 'Recommendations' },
   { href: '/mycart', text: 'My Cart' },
]

export default function Header() {

   return (
      <header className={style.header}>
         <div className={style.lightning}></div>
         {linksList.map((link) => (
            <Navlink key={link.href} href={link.href}>
               {link.text}
            </Navlink>
         ))}
         <div className={style.logo}>
            <CartBadge/>
         </div>
      </header>
   )
}
