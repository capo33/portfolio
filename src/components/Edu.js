import React from 'react'
import '../styles/scss/about.scss'
import '../../src/styles/scss/aboutIcons.scss'

function Edu(props) {
    return (
        <>
             <li className="timeline-item">
                <div className="timeline-info">
                    <span>{props.time}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <h4 className="timeline-title">{props.what}</h4>
                    <p>{props.where}</p>
                </div>
            </li>
        </>
    )
}

export default Edu
