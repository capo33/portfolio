import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai"
import Capo from '../assets/images/capocrop.jpg'
import Particles from 'react-particles-js';
import '../styles/css/heropage.css'

function Home() {
    return (
        <div className="bp">
         <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
        <section className="page-section clearfix">
            <div className="container">
                <div className="intro">
                    <img className="intro-img img-fluid mb-3 mb-lg-1 rounded" src={Capo} alt="..." />
                    <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="section-heading">
                            <span className="section-heading-upper">Hello 🖐</span>
                            <span className="section-heading-lower"> I'M Mohamed</span>
                        </h2>
                        <p className=" mb-3 p__info">Wep Development Student </p>
                        <div className="intro-button mx-auto"><Link className="btn btn-primary btn-xl " to="/contact">Contact Me <span><AiOutlineArrowRight/></span> </Link></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section cta">
         <div className="container">
             <div className="row">
                 <div className="col-xl-9 mx-auto">
                     <div className="cta-inner bg-faded text-center rounded">
                         <h2 className="section-heading">
                            <span className="section-heading-lower">Portfolio</span>
                         </h2>
                         <p className="mb-0">This portfolio has been built using React ❤</p>
                         <p className="mb-0">I have used all my development skills as a student  to create it and design it </p>
                         <p className="mb-0">Styles i have used (pure css, sass, styled component, reactstrap)</p>
                         <div >
                        <Link className=" btn btn-primary mt-2" to="/projects">Explore My Projects</Link>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
    </div>
    )
}

export default Home