import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

import Edu from "../components/Edu";
import WExperience from "../components/WExperience";
import GameIcons from "./GameIcons";
import ToolsIcons from "./ToolsIcons";
import ApiIcons from "./ApiIcons";
import BackEndIcons from "./BackEndIcons";
import FrontEndIcons from "./FronEndIcons";
import About from "../pages/About";
import CloudIcon from "./CloudIcon";
import "../../src/styles/scss/about.scss";

function Details() {
  return (
    <>
      <About />
      <section>
        <div className='container '>
          <div className='row py-5 '>
            <div className='col-xs-12  col-sm-6 '>
              <div className='timeline'>
                <h3>
                  Education <FaGraduationCap />
                </h3>
                <Edu
                  time='2020 - present'
                  what='Encoder training Angular and .Net'
                  where='Business College Helsinki'
                />
                <Edu
                  time='2022 - 2022'
                  what='Fullstack developer training'
                  where='Integrify'
                />
                <Edu
                  time='2012 - 2015'
                  what='Hotel, restaurant and catering industry'
                  where='Stadin Ammattiopisto, Varia, Vantaa'
                />
                <Edu
                  time='2003 - 2007'
                  what='Business management'
                  where='Higher Institute for Cooperative and administrative Studies Egypt, Cairo'
                />
              </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='timeline'>
                <h3>
                  Experience <MdWork />
                </h3>
                <WExperience
                  time='2022 - present'
                  what='Software developer'
                  where='Nordcloud'
                />
                <WExperience
                  time='2019 - 2020'
                  what='The restaurateur - an entrepreneur'
                  where='Own restaurant Capo33 (Egyptian street food)'
                />
                <WExperience
                  time='2015 - 2019'
                  what='À la carte Chef'
                  where='La Pasteria Italiana'
                />
                <WExperience
                  time='2012 - 2015'
                  what='À la carte Chef'
                  where='Restel Oy'
                />
              </div>
            </div>
          </div>

          <h3>
            Technologies <GrTechnology />
          </h3>
          <div className='row py-2 pb-5'>
            <div className='col-lg-6 col-md-12'>
              <h5>FrontEnd</h5>
              <div className='icon-box '>
                {FrontEndIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <h5>BackEnd</h5>
              <div className='icon-box'>
                {BackEndIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Database</h5>
              <div className="icon-box">
                {DatabaseIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className="icons" />;
                })}
              </div>
            </div> */}
            <div className='col-lg-4 col-md-6'>
              <h5>Api</h5>
              <div className='icon-box'>
                {ApiIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <h5>Tools</h5>
              <div className='icon-box'>
                {ToolsIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <h5>Game</h5>
              <div className='icon-box'>
                {GameIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <h5>Cloud</h5>
              <div className='icon-box'>
                {CloudIcon.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='row'></div>
    </>
  );
}

export default Details;
