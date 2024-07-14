import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import Logo from "./assets/logo/logo_tuper_s.png";

function App() {
  const saludo = "Hola";

  return (
    <div style={{ backgroundColor: "brown", color: "white" }}>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Tuper's Pizzas" />
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <img style={{ width: "100px" }} src={Logo} alt="logo_tuper_s" />
      </div>
      <footer style={{ backgroundColor: 'darkred', padding: '1rem', textAlign: 'center', color: 'white' }}>
        &copy; 2024 Tuper's Pizzas. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
