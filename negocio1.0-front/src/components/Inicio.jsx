import React from 'react';     //necesaria en stackblitz 
import { Link } from "react-router-dom";
function Inicio() {
    return (
        <div className="mt-4 p-5 rounded" style={{ backgroundColor: "lightgray" }}>
  <h1>Patito´s Bebe 2023</h1>
  <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
  <p>
    Backend: NodeJs, Express, WebApiRest, Swagger, Sequelize, Sqlite
    múltiples capas en Javascript/Typescript.
  </p>
  <p>
    Frontend: Single Page Application, HTML, CSS, Bootstrap, NodeJs,
    Javascript y React.
  </p>
  <div className="d-flex justify-content-start align-items-center">
    <Link to="/productos" className="btn btn-lg btn-primary">
    <i class="fa fa-archive" aria-hidden="true"></i> Todos Los Productos
    </Link>
    <span style={{ width: '10px' }}></span> {/* Espacio adicional */}
  </div>
</div>


      


    );}
  export { Inicio };
  
