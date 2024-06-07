import React from "react";
import { Menu } from "../components/Menu";
import Icons_css3 from "../assets/icons-css3.png";
import Icons8_html5 from "../assets/icons8-html5.png";
import Javascript from "../assets/javascript.png";
import Stars_header from "../assets/2884802_fireworks_love_party_wedding_iconfinder.svg";
import { ButtonInit, ButtonRegister } from "../components/Buttons_app";

export function Home() {
  return (
    <div id="body_home">
      <header id="header_home">
        <Menu />
        <section id="section_home_header">
          <div id="tittle_header">
            <div>
              <img className="img_header" src={Stars_header} />
            </div>
            <div>
              <h1>
                Empieza tu Viaje en la Programación <br /> Desde Principiantes
                hasta Expertos
              </h1>

              <p>
                Domina la Programación desde Cero <br /> con cursos prácticos e
                interactivos. <b id="reS">Es gratis.</b>
              </p>
            </div>
            <div>
              <img className="img_header" src={Stars_header} />
            </div>
          </div>
          <div>
            <ButtonRegister
              tittle="iniciar sesión con google"
              width="400px"
              height="50px"
            />
            <div id="reg_googleOther">
              <hr /> <p>o</p> <hr />
            </div>
            <ButtonInit tittle="ver más opciones" width="400px" height="50px" />
          </div>
        </section>
      </header>
      <main>
        <section id="curso-mine">
          <div id="box"> </div>

          <div id="cusos_main">
            <div>
              <h2
                style={{
                  fontSize: "45px",
                }}
              >
                Elige un curso a tu medida
              </h2>
            </div>
            <div className="MTS">
              <div className="targets">
                <div>
                  <div>
                    <img className="img_cursos" src={Icons8_html5} />
                  </div>
                  <div>
                    <h2>HTML5</h2>
                  </div>
                </div>
              </div>
              <div className="targets">
                <div>
                  <div>
                    <img className="img_cursos" src={Icons_css3} />
                  </div>
                  <div>
                    <h2>CSS3</h2>
                  </div>
                </div>
              </div>
              <div className="targets">
                <div>
                  <div>
                    <img className="img_cursos" src={Javascript} />
                  </div>
                  <div>
                    <h2>JavaScript</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
