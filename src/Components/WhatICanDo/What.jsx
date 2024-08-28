import React from 'react'
import './What.css'
import design from '../../assets/Design (2).png'
import webdev from '../../assets/webdev.png'
import mobdev from '../../assets/appdev.png'
import dataA from '../../assets/analysis.png'


const What = () => {
  return (
    <div className='what'>
        <h1 className='what-title'>What I Can Do For You</h1>
        <div className="boxes">
            <div className="box">
                <div className="box-img">
                    <img src={webdev} alt="" />
                </div>
                <div className="box-text">
                    <h1>Website Development</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime doloribus cumque atque velit.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src={design} alt="" />
                </div>
                <div className="box-text">
                    <h1>Website Designing</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus nemo fuga nesciunt repellat.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src={dataA} alt="" />
                </div>
                <div className="box-text">
                    <h1>Data Analysis</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur et provident ea voluptatum.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src={mobdev} alt="" />
                </div>
                <div className="box-text">
                    <h1>Mobile Development</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus voluptates dignissimos consectetur temporibus!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default What