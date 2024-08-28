import React from 'react'
import './DeCo.css'
import Lines from './Lines/Lines'

const DeCo = () => {
  return (
    <div className='deco edex'>
        {/* designer skill */}
        <div className="de ed">
            <div className="e-head">
                <h1>Designer skills</h1>
            </div>
            <div className="lines-container card">
                <Lines skill='Figma' width={34}/>
                <Lines skill='UI/UX design' width={34}/>
                <Lines skill='Graphic design' width={14}/>
                <Lines skill='Logo design' width={34}/>
            </div>
        </div>
        <div className='co ex'>
            <div className="e-head">
                <h1>Coding Skills</h1>
            </div>
            <div className="lines card">
                <Lines skill='HTML / css' width={99}/>
                <Lines skill='JavaScript' width={97}/>
                <Lines skill='Node.js / Express.js' width={92}/>
                {/* <Lines skill='R (for statistical programming)' width={84}/>
                <Lines skill='Python (for statistical programming)' width={60}/> */}
            </div>
        </div>
    </div>
  )
}

export default DeCo