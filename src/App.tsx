import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Rainbow.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Avatar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "100%" }}>
          <img src={logo} className="App-logo spin-right" alt="logo" />
          <img src={logo} className="App-logo spin-left" alt="logo" />
          <Avatar
            alt="Maestro Ron"
            src="../assets/chevere-avatar.jpg"
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
          <strong>Maestro Cheverengue</strong><br />
          Pucallpa<br />
          <a className="App-link tel-link" href="tel:+51988243569">
            <WhatsAppIcon
              sx={{ position: "relative", top: "4px", marginRight: "5px" }}
            />
            +51 988 243 569
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
