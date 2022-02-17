import React, { useRef }  from 'react'
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import About from '../pages/About'
import {ScrollDown, ScrollLink} from '../components/HeroElement'

import code from '../assets/images/179.svg'
import '../styles/css/heropage.css'
 

function Home() {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

    const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

    // const titleRef = useRef()
 
    // function handleBackClick() {
    //     titleRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    return (
          
 <div className="main">
       <div>
             <Particles
             params={{
                 "particles": {
                     "number": {
                         "value": 50
                     },
                     "size": {
                         "value": 3
            
                     },              
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
         </div>
 <section className="header-bg align-items-center d-flex"   >
    <div className="container">
        <div className="row align-items-center mb-5">
            <div className="col-md-6">
                <div className="header-title">
                    <p className=" text-uppercase header-small-title title ">Hello!<span className="wave" role="img" aria-labelledby="wave"> 👋🏻 </span></p>
                    <h1 className="font-weight-bold main-title mb-4">Welcome to my portfolio</h1>
                     <Link to="/projects" className="btn btn-lg btn-outline-info text-white">
                         Explore 
                         <HiOutlineArrowNarrowRight className="ml-2"/>
                     </Link>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <img src={code} alt="code" className="image" />
                </div>
            </div>
            <div className="col-lg-12 mt-3 mb-3  " >
<div>
         {/* <button onClick={executeScroll}> Click to scroll </button>  */}

 <ScrollDown  onClick={executeScroll}>
          <ScrollLink >
          Scroll down
          <img
          src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
          alt="scroll-down"
          />
          </ScrollLink>
        </ScrollDown>
</div>
            </div>
         </div>
     
    </div>
</section>

<span to="/#" ref={myRef}>
        <About />
</span>
 
</div>
    )
}

export default Home