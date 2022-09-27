import React from 'react'
import CardActive from './CardActive'
import CardComing from './CardComing'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Collections</h1>

        <NavLink
            style={({isActive}) => (isActive ? { color: "red" } : {})}
            to='cardActive'
        >
            Active
        </NavLink>

        <NavLink
            style={({isActive}) => (isActive ? { color: "red" } : {})}
            to='cardComing'
        >
            Coming
        </NavLink>

        <article>
            <Outlet />
        </article>
        
    </div>
  )
}

export default Navbar