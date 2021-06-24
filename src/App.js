import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";

function App() {
  return (
    <h2>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <About/>
    </h2>
  );
}

export default App;
