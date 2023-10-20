import logo from "./logo.svg";
import "./App.css";
import SimpleNavbar from "./components/SimpleNavBar";
import Colors from "./components/Colors";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <SimpleNavbar />
      <Colors/>
    </Container>
  );
}

export default App;
