import React, { useState } from 'react'
import '../css/Skills.css'
import Mentoricon from '../../imgs/mentor.svg'
import Frontendicon from '../../imgs/frontend.svg'
import Designicon from '../../imgs/designer.svg'

const SkillCard = () => {
  const [skills] = useState([
    {
      id: "1",
      src: Designicon,
      alt: "design skill",
      title: "Diseño",
      description: "Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.",
      feautures: [
        "Edición de vídeo: Sony Vegas, Camtasia Studio, DaVinci",
        "UX, UI",
        "Web, Mobile, Apps",
        "Photoshop",
        "Pixlr, Gimp, Paint, Canva",
        "Figma, Wireframe",
      ]
    }, {
      id: "2",
      src: Frontendicon,
      alt: "frontend skill",
      title: "Front-end Developer",
      description: "Me mantengo en constante formación, y me apasiona trasladar las ideas de cualquier persona o proyecto a un navegador.",
      feautures: [
        "Lenguajes: JavaScript, VUE, React, PHP, Laravel, HTML, CSS & SCSS",
        "Gitlab/Github",
        "Wordpress",
        "Prestashop",
        "SEO y monetización",
        "Visual Studio Code, Sublime Text, Brackets, Terminal",
        "Bootstrap",
      ]
    }, {
      id: "3",
      src: Mentoricon,
      alt: "mentor skill",
      title: "Experiencia",
      description: "Realmente me preocupo por las personas y sus proyectos, me gusta empatizar con ellas para entender mejor sus ideas/proyectos.",
      feautures: [
        "B2 inglés",
        "6 cursos online",
        "Titulación Grado Superiror DAW",
        "2 años de experiencia",
      ]
    }
  ]);
  return (
    <>
      {
        //pintamos los datos del Array con .map
        skills.map((skill) => {
          return (
            <div key={skill.id} className="pricing-plan">
              <img src={skill.src} alt={skill.alt} className="pricing-img" />
              <h3 className="pricing-header">{skill.title}</h3>
              <p>{skill.description}</p>
              <ul className="pricing-features">
                {
                  //por cada "feature", pintamos un <li> con sus estilos
                  skill.feautures.map((feature) => <li className="pricing-features-item">{feature}</li>)
                }
              </ul>
            </div>
          )
        })
      }
    </>
  )
};
export default SkillCard;
