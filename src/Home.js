import { Button, Alert, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this line

import "./Home.css";

function Home() {
    return (
      <div className="home">
        <div className="mt-3 bubble-light">
            <Link to="/comps" className="btn btn-primary rounded-pill ms-3 button-style home-button"> Comps </Link>
            <Link to="/elo" className="btn btn-primary rounded-pill ms-3 button-style home-button"> ELO </Link>
            <Link to="/teams" className="btn btn-primary rounded-pill ms-3 button-style home-button"> Teams </Link>
        </div>
      </div>
    );
  }
  
  export default Home;