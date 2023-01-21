import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/services.module.css";
import SectionSubtitle from "./SectionSubtitle";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-command-line" />
                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>
              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>
          <Col md="6" className={`${classes.services__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Desing,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Dynamic Full Stack Software Developer with both front end and back
              end programming languages skills, developing complex solutions,
              processing strong creative thinking skills, highly energetic and
              integrated with strong troubleshooting abilities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
