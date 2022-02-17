import React from 'react'
import { Link } from "react-router-dom"
import '../styles/css/404.css'
import '../styles/scss/404.scss'

import { useHistory } from "react-router-dom";

function Error() {
    let history = useHistory();
    
    function dothing(){
        history.goBack()
    }
    return (
        <div className="erroPage">
            <main className="main_container">
                <h1 className=" title"><span className="bg">Error - 404</span></h1>
                <h1>Hmm..</h1>
                <h2 className="h-tag">It seems that an error has occurred</h2>
                <p>Don't worry though, everything is still AWESOME!</p>
                <p>Let me guide you back!</p>
                <nav className="nav">
                <Link className="link-item" onClick={dothing} to="*">&#8594; back</Link>
                <Link className="link-item" to="/">&#8594; to homepage</Link>
                </nav>
            </main>
        </div>
    )
}

export default Error
