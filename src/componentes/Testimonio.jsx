import React from "react";
import '../css/Testimonio.css'

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <div className="contenedor-imgen">
                <img 
                    className='imagen-testimonio' 
                    src={require('./imagenes/shawn.png')}
                    alt='imagen-testimonio'
                />
            </div>
            <div className="contenedor-texto-testimonio">
                <p className="titulo-testimonio">Jeysson A. Seclen Meoño</p>
                <p className="cargo-testimonio">Jefe de Proyectos - Medialab</p>
                <p className="descripcion-testimonio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default Testimonio;