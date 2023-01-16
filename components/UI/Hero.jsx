import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/Hero.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/*===========Hero content=========*/}
          <Col md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mb-3 mt-3">I{"'"}m Osman KOYUNCU</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                voluptate. Nemo cumque deleniti magnam quas corrupti, quasi
                eaque sunt quidem?
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>
                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>
          {/*===========Hero img========  =*/}
          <Col md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image
                alt="hero-image"
                src={heroImage}
                width="350"
                height="400"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
