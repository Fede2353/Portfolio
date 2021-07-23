import React from 'react'
import './Projects.css'
import projectImage1 from '../../media/projectImage1.png'
import defaultProjectImage from '../../media/defaultProjectImage.jpg'

const Projects = () => {
  return (
    <React.Fragment>
    <div className="projects-container">
      <div className="project-title">
        <h2>Algunos de mis Proyectos:</h2>
      </div>
       <div className="project-container">
      <img src={projectImage1} alt="asfa" />
    <div className="project-desc">
      {/* <span>s</span> */}
      <a href="https://focused-jepsen-157680.netlify.app/" target="_blank" rel="noreferrer">Administrador veterinarias </a>
    </div>
    </div>
    <div className="project-container">
      <img src={defaultProjectImage} alt="asfa" />
    <div className="project-desc">https
      {/* <span>s</span> */}
      <a href="https://github.com/rampratts/administrador-gimnasios" target="_blank" rel="noreferrer">Administrador de gimnasios</a>
    </div>
    </div>
    <div className="project-container">
      <img src={defaultProjectImage} alt="asfa" />
    <div className="project-desc">
      {/* <span>s</span> */}
      <a href="#" target="_blank" rel="noreferrer">disponible a la brevedad</a>
    </div>
    </div>
   
    </div>
    <div className="git-hub">
      Otros proyectos: <a href="https://github.com/Fede2353" title="github " target="_blank" rel="noreferrer"><i class="fab fa-github"></i> https://github.com/Fede2353</a>
    </div>
  </React.Fragment>
  )
}

export default Projects
