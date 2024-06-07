import React from "react";
import { Menu } from "../components/Menu";
import  Html5  from "../assets/icons8-html5.png";
import  Css3  from "../assets/icons-css3.png";
import  JavaScript  from "../assets/javascript.png";

const Cursos = () => {
  return (
    <div id="body_cursos">
      <Menu />
      <header id="header_cursos">
        <div>
          <div id="tittle_cursos">
            <h1>
              Los mejores cursos para comenzar tu carrera, Descubre nuestros
              cursos
            </h1>
          </div>
          <div id="sect_conteiner-select_targets">
            <div id="select_targets">
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src={Html5}/>
                  <p><b>HTML5</b></p>
                </div>
              </div>
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src={Css3} alt="" />
                  <p id="p_cursos"><b>CSS3</b></p>
                </div>
              </div>
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src={JavaScript} alt="" />
                  <p><b>JavaScript</b></p>
                </div>
              </div>
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src="" alt="" />
                  <p>LenGuAge</p>
                </div>
              </div>
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src="" alt="" />
                  <p>LenGuAge</p>
                </div>
              </div>
              <div className="target_cursos">
                <div className="Info-target_cursos">
                  <img className="img_cursos-Cursos" src="" alt="" />
                  <p>LenGuAge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Cursos;
