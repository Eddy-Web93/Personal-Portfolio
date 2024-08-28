import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = ({direct, setDirect}) => {
    const[ active , setActive]= useState(0);
    const[intiate , setIntiate]= useState(false)
    useEffect(() => {
        setDirect(active)
    }, [active])
    

  return (
    <div className='navbar'>
        <div className="logo">
            <p>M</p>
            <h1>Much<span>iri.</span></h1>
        </div>
        <ul className={`nav-items ${intiate ? "initiate": null}`}>
            <li onClick={()=>{
                setActive(0)
                setIntiate(false)
                }} className={`item ${active === 0 ? "active": null}`}>About</li>
            <li onClick={()=>{
                setActive(1)
                setIntiate(false)
                }} className={`item ${active === 1 ? "active": null}`}>Resume</li>
            <li onClick={()=>{
                setActive(2)
                setIntiate(false)
                }} className={`item ${active === 2 ? "active": null}`}>Portfolio</li>
            <li onClick={()=>{
                setActive(4)
                setIntiate(false)
                }} className={`item ${active === 4 ? "active": null}`}>Contact</li>
            <li onClick={()=> setIntiate(false)} className='cross'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="34" height="34" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg>
            </li>
        </ul>
        <div onClick={()=>setIntiate(true)} className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="34" viewBox="0 -960 960 960" width="34"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
    </div>
  )
}

export default Navbar