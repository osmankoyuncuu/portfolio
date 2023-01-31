import { RevealWrapper } from "next-reveal";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/services.module.css";
import SectionSubtitle from "./SectionSubtitle";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services" className={`${classes.services}`}>
      <Container>
        <Row>
          <Col md="6">
            <RevealWrapper origin="left" delay={500} reset="true">
              <div className={`${classes.services__container}`}>
                <div>
                  <ServicesItem
                    title="App Development"
                    icon="ri-command-line"
                  />
                  <ServicesItem
                    title="Web Development"
                    icon="ri-computer-line"
                  />
                </div>
                <ServicesItem
                  title="Full-Stack Development"
                  icon="ri-code-s-slash-line"
                />
              </div>
            </RevealWrapper>
          </Col>
          <Col md="6" className={`${classes.services__title}`}>
            <RevealWrapper
              rotate={{ x: -12, y: 40, z: 0 }}
              origin="right"
              delay={500}
              duration={1500}
              //distance="500px"
              viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
            >
              <SectionSubtitle subtitle="What I do" />
              <h3 className="mb-0 mt-4">Better Desing,</h3>
              <h3 className="mb-4">Better Experience</h3>
              <p>
                Dynamic Full Stack Software Developer with both front end and
                back end programming languages skills, developing complex
                solutions, processing strong creative thinking skills, highly
                energetic and integrated with strong troubleshooting abilities.
              </p>
            </RevealWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
