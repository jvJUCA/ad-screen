import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack } from "react-bootstrap";
import '../App.css';

const Home = () => {
  return (
    <div  className="App" style={{marginTop: "20vh"}}>
      <div class="cursor outer"></div>
<div class="cursor inner"></div>
      <h1>Página Inicial</h1>
      <header>
      <Stack gap={2} className="mt-5 col-md-5 mx-auto">
          <Button class="button" variant="primary" href="/About">
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