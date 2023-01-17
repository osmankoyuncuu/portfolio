import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../../data/portfolio";

const Portfolio = () => {
  console.log(portfolioData);
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">Some of my distinguished works </h4>
          </Col>
          <Col md="6">
            <div className="text-end">
              <button className={`${classes.tab__btn__active} secondary__btn`}>
                Web App
              </button>
            </div>
          </Col>
          {portfolioData.map((item) => (
            <Col md="4" key={item.id}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
