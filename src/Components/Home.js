import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" href="/About">
            Button as link
          </Button>
          <Button href="/User" variant="success">
            Button as link
          </Button>
        </Stack>
      </nav>
    </div>
  );
};

export default Home;
