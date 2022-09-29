import React from 'react'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <h1>Collections</h1>

        <nav className="navbar">
            <div className="nav-cards">
                <NavLink
                    to='cardActive'
                    className={({isActive}) => isActive ? 'navlink-active' : 'navlink'}
                >
                    Active
                </NavLink>
                <NavLink
                    to='cardComing'
                    className={({isActive}) => isActive ? 'navlink-active' : 'navlink'}
                >
                    Coming
                </NavLink>
            </div>

            <div className="view-all">
                <p>View all</p>
                <p>{'>'}</p>
            </div>
        </nav>

        <article>
            <section className="card-list">
                <Outlet />
            </section>
        </article>
        
    </div>
  )
}

export default Navbar