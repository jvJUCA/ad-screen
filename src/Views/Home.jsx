import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack } from "react-bootstrap";
import '../App.css';

const Home = () => {
  return (
    <div  className="App" style={{marginTop: "20vh"}}>
      <div className="cursor"></div>
      <h1>Página Inicial</h1>
      <header>
      <Stack gap={2} className="mt-5 col-md-5 mx-auto">
          <Button className="button" variant="primary" href="/About"> 
            About
          </Button>
          <Button href="/User" variant="success">
            User
          </Button>
        </Stack>
      </header>
    </div>
  );
};




export default Home;