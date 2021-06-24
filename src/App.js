import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <h2>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </h2>
  );
}

export default App;
