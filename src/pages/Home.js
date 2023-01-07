import React from 'react'
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";
import { SkillList } from "../helpers/SkillList";


function Home() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    fetch('../assets/CV_Nuñez_Rodrigo.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV_NUÑEZ_RODRIGO.pdf';
            alink.click();
        })
    })
  }

  return (
    <div className='home'>
      <div className="main">
        <h1>HEY, I'M RODRIGO NUÑEZ</h1>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
        <div className="btns">
          <button onClick={() => {
            navigate("/contact");
          }}>CONTACT
          </button>
          <button onClick={onButtonClick}>GET RESUME</button>
        </div>
      </div>
        <div className="about-section">
          <div className="about-container">
            <h2>ABOUT ME</h2>
            <p>En septiembre de 2020 decidí aprender sobre desarrollo web por mi cuenta mientras seguía estudiando en la secundaria.
               Para fines de 2021 me había graduado y había terminado diferentes cursos de Diseño Web, Desarrollo Front End y Fundamentos del Back End y API's.
              A partir de ahí, decidí enfocarme en el Front End, estando fascinado por las cosas que puedo hacer con librerías como React o D3.
              Me gustan los desafíos y siempre intento de mejorar las cosas cada vez que puedo, y actualmente estoy abierto a propuestas.</p>
          </div>
          <div className="skills-container">
            <h2>SKILLS</h2>
            <div className="skills-grid">
            {SkillList.map(skill => (<div className='grid-item'>{skill}</div>))}
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Home