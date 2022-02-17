import React from 'react'
import Image from "../assets/images/crop.jpg"
import {AboutData} from '../components/data/AboutData';
import styled from 'styled-components';

import {  FaSass, FaCss3, FaReact } from "react-icons/fa"
import { SiMaterialUi, SiStyledComponents } from 'react-icons/si';
import { BsBootstrap } from "react-icons/bs"
 
import '../../src/styles/css/about.css'


const Main = styled.main`
    padding: 10% 0 0;
    color: #000;
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    
    img{
        width: 100%;
        object-fit: cover;
        border-radius: 1%;
    }

    @media screen and (min-width: 768px) {
        img {
            height: 100%;
        }
    @media screen and (max-width: 425px) {
        
        .image{
            margin-bottom: 20px;
        }
    }
        
       
    }

   
    @media screen and (max-width: 768px) {
        
    }
    .p_link{
        font-size: 1.1rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 768px),(max-width: 1024px) {
    .p_link{
        font-size: 1rem;
    }
    }   

 
.example-title {
    text-align: center;
    margin: 60px ;
    padding: 1em 0;
    border-top: 1px solid #E4EAEC;
}
`

export default function About() {
   
  return (
    <>
    <Main>
        <div className="container">
                 <div className="row">
                    <div className="col-xs-12 col-md-4 mb-5">
                        <img src={Image} alt="Capo" />
                    </div>
                    <div className="col-xs-12 col-md-8">

                             <h3 className="text-center" style={{textTransform:'uppercase'}}>Snippets </h3>
                            {AboutData.map((item) => {
                                return (
                                    <p key={item.id} className="p_link">{item.title}{item.icon}{item.title1}{item.icon1}{item.title2}{item.icon2}{item.title3}</p>
                                 )
                            })}
                    </div>
                </div>
        </div>
         <div className="">
<div className=" blurred-bg">
     <h3 style={{color:'#FFD369'}}>Portfolio </h3>
      <p>This is my first portfolio i built using React <FaReact /> ❤</p>
      <p>I used all my development skills as a student to create it and design it.</p>
      <p>Styles i used [<i style={{fontSize:'1.5rem',}}> <FaCss3 /> - <FaSass /> - <BsBootstrap /> - <SiStyledComponents /> - <SiMaterialUi /> </i>]</p>
   </div>
</div>
     </Main>       
</> );
}
