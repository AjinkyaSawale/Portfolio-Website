import { useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000); // Adjust this value to control the speed of deleting text
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  const handleConnectClick = () => {
    setShowContactInfo(true);
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi, I am Ajinkya`}
                <br></br>
                <span className="wrap">{text}</span>
              </h1>
              <p>
                Enthusiastic and dedicated professional with a strong passion
                for software development. With hands-on experience in designing
                responsive web applications, I am committed to driving
                innovation and efficiency. My commitment to continuous learning
                and innovation drives my desire to advance my career and
                contribute effectively to exciting and forward-thinking
                projects.
              </p>
              <button onClick={handleConnectClick}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
              {showContactInfo && (
                <div>
                  <p>Email: ajinkyasawale.work@gmail.com</p>
                  <p>Phone: 9145073817</p>
                </div>
              )}
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header-Img"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export { Banner };

