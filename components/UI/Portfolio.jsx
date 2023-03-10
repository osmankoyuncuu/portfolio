import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../../data/portfolio";
import { useState, useEffect } from "react";
import { RevealList, RevealWrapper } from "next-reveal";

const Portfolio = () => {
  const [filter, setFilter] = useState("Frontend");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Frontend") {
      const filterData = portfolioData.filter(
        (item) => item.category === filter
      );
      setData(filterData);
      console.log("fr");
    }
    if (filter === "Backend") {
      const filterData = portfolioData.filter(
        (item) => item.category === filter
      );
      setData(filterData);
      console.log("bc");
    }
    if (filter === "Full-Stack") {
      const filterData = portfolioData.filter(
        (item) => item.category === filter
      );
      setData(filterData);
      console.log("fs");
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;
  const passive = `${classes.tab__btn__passive}`;

  return (
    <section id="portfolio" className={`${classes.portfolio}`}>
      <Container>
        <Row>
          <Col md="6" className="mb-3">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4">Some of my distinguished works </h4>
          </Col>
          <Col md="6" className="mb-3">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${
                  filter === "Frontend" ? active : passive
                } secondary__btn`}
                onClick={() => setFilter("Frontend")}
              >
                Frontend
              </button>
              <button
                className={`${
                  filter === "Backend" ? active : passive
                } secondary__btn`}
                onClick={() => setFilter("Backend")}
              >
                Backend
              </button>
              <button
                className={`${
                  filter === "Full-Stack" ? active : passive
                } secondary__btn`}
                onClick={() => setFilter("Full-Stack")}
              >
                Full-Stack
              </button>
            </div>
          </Col>
          {data?.map((item) => (
            <Col lg="4" md="6" key={item.id}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
