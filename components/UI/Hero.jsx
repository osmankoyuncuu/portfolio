import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/Hero.png";
import classes from "../../styles/hero.module.css";
import { RevealWrapper } from "next-reveal";
const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/*===========Hero content=========*/}
          <Col md="6">
            <RevealWrapper
              rotate={{ x: 12, y: 40, z: 0 }}
              origin="left"
              delay={500}
              duration={1500}
              distance="500px"
              viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
              <div className={`${classes.hero__content}`}>
                <SectionSubtitle subtitle="Hello" />
                <h2 className="mb-3 mt-3">I{"'"}m Osman KOYUNCU</h2>
                <h5 className="mb-4">Full-Stack Developer</h5>
                <p>
                  Having 3+ years experience in IT and 1+ years of experience in
                  developing front-end and back-end website architecture and
                  designing user interactions on web pages.
                </p>
                <div className="mt-5 mb-4">
                  <button className="primary__btn">
                    <Link href="#">Hire me</Link>
                  </button>
                  <button className="secondary__btn">
                    <a href="/resume.pdf" download="Osman KOYUNCU-resume.pdf">
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            </RevealWrapper>
          </Col>
          {/*===========Hero img========  =*/}

          <Col md="6">
            <RevealWrapper origin="right" delay={500}>
              <div className={`${classes.hero__img} text-end headline`}>
                <Image
                  alt="hero-image"
                  src={heroImage}
                  width="350"
                  //height="250"
                />
              </div>
            </RevealWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
