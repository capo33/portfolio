import React from 'react'
import FrontEndIcons from '../components/FronEndIcons';
import BackEndIcons from '../components/BackEndIcons';
import DatabaseIcons from '../components/DatabaseIcons';
import ApiIcons from '../components/ApiIcons';
import GameIcons from '../components/GameIcons';
import ToolsIcons from '../components/ToolsIcons';
import Image from "../assets/images/crop.jpg"
import styled from 'styled-components';

import { FaLaptopCode,FaGraduationCap, FaRegHandPointDown } from "react-icons/fa"
import { BsBriefcaseFill } from "react-icons/bs"
import {Button} from 'react-bootstrap';

import Edu from '../components/Edu';
import WExperience from '../components/WExperience';
import {AboutData} from '../components/data/AboutData';
import '../../src/styles/scss/about.scss'
import '../../src/styles/scss/aboutIcons.scss'


const Main = styled.main`
    padding: 7% 0;
    background-color: var(--white);
    font-family: 'Roboto', sans-serif;
    
    h3{
        font-family: "Poppins";
    }

    i{
    font-size: 2rem;
    }

    .section-heading {
        position: absolute;
        transform-origin: top left;
        transform: rotate(-90deg) translateX(-100%);
        font-family: 'Gluten', cursive;
        
        @media screen and (max-width:1024px){
            transform: rotate(0) translateX(0);
            position: relative;
            transform-origin: top left;
        }
    }

    img{
        width: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 768px) {
        img {
            height: 40rem;
        }
        
        .section-heading {
            position: absolute;
            transform-origin: top left;
            transform: rotate(-90deg) translateX(-100%);
        }
    }

    .about{
        font-size: 1rem;
        line-height: 1.8rem;
        font-family: "Poppins";

        &::before{
        content: "→";
        padding-right: 10px; 
        color: var(--gray-1) ;
        font-size: 20px;
        }
    }   
   
    @media screen and (max-width: 768px) {
        .intro{
            padding-top: 7%;
        }
    }

    .p_link{
        font-size: 1rem;
        line-height: 1.8rem;
        font-family: "Poppins";

        &::before{
        content: "→";
        padding-right: 10px; 
        color: var(--gray-1) ;
        font-size: 20px;
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
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-1">
                        <div className="section-heading">
                            <h1>About</h1>
                        </div>
                    </div> 
                    <div className="col-xs-12 col-md-4">
                        <img src={Image} alt="Capo" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="intro">
                            <h2>Snippets about me</h2>
                            {AboutData.map((item) => {
                                return (
                                    <p key={item.id} className="p_link">{item.title}{item.icon}{item.title1}{item.icon1}{item.title2}{item.icon2}{item.title3}</p>
                                 )
                            })}
                            <h2>More About ME</h2>
                            <Button href="#more-details"><FaRegHandPointDown /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* timeline */}

        <div className="container" id="more-details">
            <div className="row example-basic">
                <div className="col-md-12 example-title"></div>
                <div className="col-xs-12 col-xs-offset-1 col-sm-6 col-sm-offset-2">
                    <ul className="timeline">
                        <h3>Education <FaGraduationCap /></h3>
                        <Edu 
                        time="2020 - present"
                        what="Encoder training Angular and .Net"
                        where="Business College Helsinki"
                        />
                        <Edu 
                        time="2012 - 2015"
                        what="Hotel, restaurant and catering industry"
                        where="Stadin Ammattiopisto, Varia, Vantaa"
                        />
                        <Edu 
                        time="2003 - 2007"
                        what="Business management"
                        where="Higher Institute for Cooperative and administrative Studies Egypt, Cairo"
                        />
                    </ul>
                </div>
                <div className="col-xs-12 col-xs-offset-1 col-sm-6 col-sm-offset-2">
                    <ul className="timeline">
                        <h3>Work experience <BsBriefcaseFill /></h3>
                        <WExperience
                        time="2019 - 2020"
                        what="The restaurateur - an entrepreneur"
                        where="Own restaurant Capo33 (Egyptian street food)" />
                        <WExperience
                        time="2015 - 2019"
                        what="À la carte Chef"
                        where="La Pasteria Italiana" />
                        <WExperience
                        time="2012 - 2015"
                        what="À la carte Chef"
                        where="Restel Oy" />
                    </ul>
                </div>
            </div>

            <h3>Skills <FaLaptopCode /></h3>

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h4>FrontEnd</h4>
                    <div className="icon-box ">
                        {FrontEndIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h4>BackEnd</h4>
                    <div className="icon-box">
                        {BackEndIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Database</h4>
                    <div className="icon-box">
                        {DatabaseIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Api</h4>
                    <div className="icon-box">
                        {ApiIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Tools</h4>
                    <div className="icon-box">
                        {ToolsIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>Game</h4>
                    <div className="icon-box">
                        {GameIcons.map(({img,alt, id}) =>{
                            return (
                                <img src={img} alt={alt} key={id}  className="icons"/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </Main>       
</> );
}