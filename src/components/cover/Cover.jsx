import React from 'react'
import "./Cover.css"
import coverVideo3 from '../../media/coverVideo3.mp4'

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo3} autoPlay loop muted/>
            <h1>Federico Mathías De Souza</h1>
            <p>Tecnólogo en Análisis y Desarrollo de sistemas. || Desarrollador. </p>
            <p><i className="fas fa-map-marker-alt"></i> Montevideo - Uruguay</p>
        </div>
    )
}

export default Cover
