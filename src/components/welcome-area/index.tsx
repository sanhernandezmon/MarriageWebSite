import React from 'react';
import iglesia from '../../images/iglesia.png';
import Sectiontitle from '../section-title';
import "./style.css";
const IglesiaSize = {
  width: '300px',
  height: '200px',
};

const MapaSize = {
  width: '600px',
  height: '200px',
};

const un_mensaje = "Celebremos juntos";

const Welcome = () => {
  return (
    <section id="event">
      <Sectiontitle mensaje={un_mensaje} />
      <div className="location-map">
        <div className="invitation-section">
          <div className="invitation-text">
            <h2>Queremos invitarte a nuestra boda</h2>
            <h2>Vamos a celebrarlo con un evento especial y nos encantaría contar con tu compañía</h2>
            <p><strong>Fecha:</strong> Sábado 24 de Mayo de 2025</p>
            <p><strong>Lugar:</strong> La Plazuela, Cogua, Cundinamarca</p>
            <p><strong>Ceremonia religiosa:</strong> 3:00 pm; Iglesia La Plazuela Maria Auxiliadora</p>
            <p><strong>Recepción:</strong> 5:00 pm; Finca El Refugio</p>
            <br></br>
            <p><strong>Este es un evento para adultos, solo los pajecitos escogidos nos acompañaran</strong></p>
          </div>
        </div>

        <div className="invitation-section">
          <div className="invitation-row">
            <div className="invitation-image">
              <a href="https://maps.app.goo.gl/RwT12pfd9cVomC928" target="_blank" rel="noopener noreferrer">
                <img src={iglesia} alt="La plazuela" style={IglesiaSize} />
              </a>
            </div>
            <div className="invitation-map">
              <iframe
                title="locationFrame"
                style={MapaSize}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0726494504192!2d-73.95837492432331!3d5.091955338140122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406eb9a7f8ae39%3A0x550abfb55b1aaa8e!2sIglesia%20La%20Plazuela%20maria%20auxiliadora!5e0!3m2!1ses!2sco!4v1736525551577!5m2!1ses!2sco"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;