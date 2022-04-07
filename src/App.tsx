import React, { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import logo from "./logo.svg";
import "./App.css";
import "./Rainbow.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Avatar } from "@mui/material";
import chevereAvatar from "./assets/chevere-avatar.jpg";
import { Carousel } from "./Carousel";

function App() {
  const [width, height] = useWindowSize();
  const [shouldRun, setShouldRun] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShouldRun(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <Confetti width={width} height={height} recycle={shouldRun}/>
      <header className="App-header">
        <div style={{ width: "100%" }}>
          <img src={logo} className="App-logo spin-right" alt="logo" />
          <img src={logo} className="App-logo spin-left" alt="logo" />
          <Avatar
            alt="Maestro Ron"
            src={chevereAvatar}
            sx={{
              width: 100,
              height: 100,
              position: "absolute !important",
              left: "50%",
              marginLeft: "-50px",
              marginTop: "50px !important"
            }}
            className="App-logo"
          />
        </div>

        <p style={{ marginTop: 200 }}>
          <h3>Amazonian Curandero</h3>
          <strong>RANIN INO</strong>
          <p>Ronal Barbaran Brito</p>
          Pucallpa<br />
          <a className="App-link tel-link" href="tel:+51988243569">
            <WhatsAppIcon
              sx={{ position: "relative", top: "4px", marginRight: "5px" }}
            />
            +51 988 243 569
          </a>
        </p>
        <Carousel />
      </header>
    </div>
  );
}

export default App;
