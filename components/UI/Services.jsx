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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              pariatur temporibus soluta necessitatibus minus amet tempora quis
              harum natus voluptates eum exercitationem tempore, unde nulla,
              eaque nisi culpa laborum. Reprehenderit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
