import React, { useState } from 'react'
import Procard from './Pro-card/Procard'
import youtube from '../../assets/youtube.png'
import Weather from '../../assets/Weather.png'
import havera from '../../assets/Havera.png'
import imgRec from '../../assets/ImgRec.png'
import calc from '../../assets/Calc.png'
import './Projects.css';

const Projects = () => {
  const[change, setChanges] = useState(0);

  const arrayPro = [
    {
      key: 1,
      img: youtube,
      link: "",
      name: "YouTube Clone",
      type: 1
    },
    {
      key: 2,
      img: imgRec,
      link: "",
      name: "Image Recognition",
      type: 2
    },
    {
      key: 3,
      img: Weather,
      link: "",
      name: "Weather Site",
      type: 1
    },
    {
      key: 4,
      img: calc,
      link: "",
      name: "Calculator",
      type: 1
    },
    {
      key: 5,
      img: havera,
      link: "",
      name: "Havera",
      type: 2
    },
    {
      key: 6,
      img: youtube,
      link: "",
      name: "YouTube Clone",
      type: 1
    },
    {
      key: 7,
      img: imgRec,
      link: "",
      name: "Image Recognition",
      type: 1
    },
    {
      key: 8,
      img: Weather,
      link: "",
      name: "Weather Site",
      type: 2
    },
    {
      key: 9,
      img: calc,
      link: "",
      name: "Calculator",
      type: 2
    },
    {
      key: 10,
      img: havera,
      link: "",
      name: "Havera",
      type: 1
    },
  ]
  const clones = arrayPro.filter(items => items.type === 1);
  const owns = arrayPro.filter(items => items.type === 2);
  return (
    <div className='projects'>
      <div className="nav-pro">
        <ul className='pro-items'>
          <li onClick={()=> setChanges(0)} className={`${change === 0 ? "active": null}`}>All</li>
          <li onClick={()=> setChanges(1)} className={`${change === 1 ? "active": null}`}>Clones</li>
          <li onClick={()=> setChanges(2)} className={`${change === 2 ? "active": null}`}>Own</li>
        </ul>
      </div>
      <div className="pro-box">
        {change === 0 ? (
          arrayPro.map(items => {
            return <Procard key={items.key} type={items.type} name={items.name} img={items.img}/>
          })
        ):( change === 1 ? (
            clones.map(items => {
              return <Procard key={items.key} type={items.type} name={items.name} img={items.img}/>
            })
        ): (change === 2)? (
            owns.map(items => {
              return <Procard key={items.key} type={items.type} name={items.name} img={items.img}/>
          })
        ): null)}
      </div>
    </div>
  )
}

export default Projects