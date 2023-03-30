import React from "react";
import "../Styling/Work.css";
import img from "../Images/ScreenShot.png";
function Work() {
  return (
    <div className="container">
      <div className="work_container">
        <div className="container_title">
          <h3>Where I worked</h3>
        </div>
        <div className="company">
          <h3>Busy Buccket:</h3>
          <div className="Iframe_BusyBucket">
            <iframe
              src="https://www.busybucket.io/"
              width={"800px"}
              height={"500px"}
            ></iframe>
          </div>
          <ul>
            <li>
              <p>
                Developed and maintained the application using technologies such
                as HTML, CSS, and TypeScript
              </p>
            </li>
            <li>
              <p>
                Built reusable and maintainable Frontend code using modern
                frameworks and libraries such as ReactJS
              </p>
            </li>
            <li>
              <p>
                Discovered and reported critical issues in the application,
                leading to improved functionality and customer satisfaction{" "}
              </p>
            </li>
            <li>
              <p>
                Developed and implemented solutions for frontend issues,
                resulting in improved user experience and increased website
                performance
              </p>
            </li>
            <li>
              <p>
                Participated in code reviews and Agile development processes,
                contributing to the development of high-quality and maintainable
                code
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects_container">
        <div className="projects">
          <div className="container_title">
            <h3>Some things i built</h3>
          </div>
          <div className="singleProject">
            <h3>MojoPlanner:</h3>
            <img src={require("../Images/ScreenShot.png")} />
            {/* <div className="Iframe_MojoPlanner">
              <iframe
                src="https://www.mojoplanning.com/"
                width={800}
                height={500}
              ></iframe>
            </div> */}
            <ul>
              <li>
                <p>
                  Developed full stack web application using Javascript,
                  ReactJS, Node.js that allows user to sign-up and login, allows
                  user to create, edit, delete projects, and users are able to
                  assign, update, complete tasks for each project created{" "}
                </p>
              </li>

              <li>
                <p>
                  Created and implemented Figma design on the Frontend using
                  CSS, Styled-components, and Html for the best UI/UX
                </p>
              </li>
              <li>
                <p>
                  Generated data tables using Knex.js and PostgreSQL for the
                  ability to create and store users, projects, and tasks
                </p>
              </li>
              <li>
                <p>
                  Constructed user authentication and user authorization with
                  the use of a JWT token and API endpoints that gives users the
                  ability to sign-up and login
                </p>
              </li>
              <li>
                <p>
                  Implemented email confirmation with nodemailer which confirms
                  a user is using a real email
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
