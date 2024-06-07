import { Link } from "react-router-dom";
import {ButtonInit, ButtonRegister}  from  "./Buttons_app";
export function Menu (){
    return(
        <nav>
          <div id="logo-name"><img id="logo" src="/src/assets/logo.png" alt="" /><h1>LearnCodev</h1></div>
          <div ><ul>
            <Link to={'/'}>home</Link>
            <Link to={'/cursos'}>cursos</Link>
            <li><a href="#">Hazte pro</a></li>
            <li><a href="#">Team</a></li>
            <ButtonInit tittle='iniciar sesión' width='180px' height='50px'/>
            <ButtonRegister tittle='registrarte' width='180px' height='50px'/>
          </ul></div>
        </nav>
    )
}