import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar expand="lg" className="mt-4">
        <span className="text-title">AD'Screen</span>
        <div className="mx-2 mt-1" style={{width: 2, height: 25, backgroundColor: 'white'}}></div>
        <span className="text-subtitle">Para empreendedores</span>
      </Navbar>
    </div>
  );
};

export default Home;
