import React from "react";
import "../Styling/Work.css";
function Work() {
  return (
    <div className="container">
      <div className="work_container">
        <h3>Where I worked</h3>
        <div className="company">
          <h5>Busy Buccket:</h5>
          <div className="Iframe_BusyBucket">
            <iframe
              src="https://www.busybucket.io/"
              width={800}
              height={500}
            ></iframe>
          </div>
          <ul>
            <li>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </p>
            </li>
            <li>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </p>
            </li>
            <li>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </p>
            </li>
            <li>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects_container">
        <div className="projects">
          <h3>Some things i built</h3>
          <div className="singleProject">
            <h5>MojoPlanner:</h5>
            <div className="Iframe_MojoPlanner">
              <iframe
                src="https://www.mojoplanning.com/"
                width={800}
                height={500}
              ></iframe>
            </div>
            <ul>
              <li>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor
                </p>
              </li>
              <li>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor
                </p>
              </li>
              <li>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor
                </p>
              </li>
              <li>
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
