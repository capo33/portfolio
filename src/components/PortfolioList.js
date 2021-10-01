import React from 'react'
import '../styles/scss/portfoliolist.scss'
function PortfolioList({id,title, active, setSelected}) {
    return (
        <li key={id}
        className={active ? 'portfoliolist active' : 'portfoliolist'} 
        onClick={() => setSelected(id)}> 
            {title}
        </li>
    )
}

export default PortfolioList
