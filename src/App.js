import React from "react";
import profil from "./bilde.jpg";
import "./App.css";
import Link from "./Link";

function App() {
  let teller = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={profil} className="App-logo" alt="logo" />
        <p>Thanh Thao Thi Tran</p>
        {/* {"Antall kjærester: " + (teller + 5)} */}

        {/* Legger til linker */}
        <Link
          link={"https://www.linkedin.com/in/thanh-thao-thi-tran-27367a15b/"}
        >
          LinkedIn
        </Link>
        <Link link={"https://github.com/ThanhThaoThiTran"}>Github</Link>
      </header>
    </div>
  );
}

export default App;
