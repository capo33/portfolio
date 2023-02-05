import React from "react";
import "../styles/scss/about.scss";

function WExperience(props) {
  return (
    <>
      <li className='timeline-item'>
        <div className='timeline-info'>
          <span>{props.time}</span>
        </div>
        <div className='timeline-marker'></div>
        <div className='timeline-content'>
          <h5 className='timeline-title'>{props.what}</h5>
          <p>{props.where}</p>
        </div>
      </li>
    </>
  );
}

export default WExperience;
