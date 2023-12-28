import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex d-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p>
            This is a boilerplate for MERN Authentication that stores a jwt in
            HTTP only cookie. It also uses Redux Toolkit & React Bootstrap
            Library{" "}
          </p>
          <div className="d-flex">
            <Button className="me-3" onClick={() => navigate("/login")} varient="primary">
              Sign In
            </Button>
            <Button className="me-3" varient="primary" onClick={() => navigate("/register")} >
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
