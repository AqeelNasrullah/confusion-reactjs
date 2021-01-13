import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
