import Button from "react-bootstrap/Button";

const LandingFirst = () => {
  return (
    <>
      <div className="welcomeBox container">
        <p className="landingTitle">OTAKU DATING</p>
        <p> Find someone like you. Who likes Anime.</p>
        <div className="landingButtons">
          <Button variant="outline-success" size="lg" className="landingButton">
            Log In
          </Button>
          <Button variant="outline-danger" size="lg" className="landingButton">
            Register
          </Button>
          
        </div>
      </div>
    </>
  );
};

export default LandingFirst;
