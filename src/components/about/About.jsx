import React from 'react'
import cvImage from '../../media/cvImage.jpg'
import './About.css'

const About = () => {
    return (
        <div className="aboutme-container">
            <div className="aboutme-desc">
                <h3> Acerca de mi:</h3>
                <p>Análisis y Desarrollo de software, especialmente web y Mobile.
                      Capacidad de trabajo en todas las etapas del desarrollo de software. Con énfasis en la calidad y valor del desarrollo de soluciones informáticas y la administración de procesos, recursos y personas.
                    Relacionamiento, Análisis, identificación, necesidades del cliente y creación, gestión, planificación, coordinación y desarrollo de proyectos y personas.</p><br />
                <p>   Con disposición y capacidad para el aprendizaje.
                    Con disposición hacia el análisis, razonamiento, aprendizaje, resolución de problemas, ejecutividad, constancia y resiliencia. Apasionado por la actividad de TI y desarrollo.
                    Me gusta aprender constantemente y puedo aprender cualquier cosa que se requiera. Me gusta mejorar, y el progreso mediante la construcción y ejecutividad humilde e inteligente día a día.
                    Me agradan los proyectos en donde pueda percibir, analizar y pensar para encontrar y aplicar las mejores soluciones que creen, mejoren y/o mantengan cosas; y trabajar con buen relacionamiento y respeto en equipos o individualmente.
                </p>
                <p>   En mi currículum vitae puede ver más acerca de mi formación, las tecnologías y conocimientos que manejo.
                </p>
            </div>
            <div className="aboutme-img">
                <img src={cvImage} alt="person-portrait" />
            </div>
        </div>
    )
}

export default About
