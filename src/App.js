import React from "react";
import profil from "./bilde.jpg";
import "./App.css";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  let teller = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={profil} className="App-logo" alt="logo" />
        <p>Thanh Thao Thi Tran</p>

        <div class="flex-container">
          <Link
            link={"https://www.linkedin.com/in/thanh-thao-thi-tran-27367a15b/"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </Link>

          {/* {"Antall kjærester: " + (teller + 5)} */}

          {/* Legger til linker */}

          <Link link={"https://github.com/ThanhThaoThiTran"}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
