import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/about.module.css";
import Skill from "./Skill";
import { skillsData } from "@/data/skills";
import { RevealList, RevealWrapper } from "next-reveal";

const About = () => {
  return (
    <section id="about" className={`${classes.about}`}>
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content} `}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mb-4">I{"'"}m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Creating server and database for website functionality, ensuring
              cross-platform mobile optimization. Working with APIs and
              technical documentation. Focusing both on technical and consumer
              needs to bring up the final Product. Have the ability to create
              algorithms effectively and communicate appropriately with team
              members.
            </p>
            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>
            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>
              <button className="secondary__btn">
                <a href="/resume.pdf" download="Osman KOYUNCU-resume.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </Col>
          <Col lg="6">
            <RevealList
              interval={70}
              delay={500}
              origin="right"
              reset="true"
              className={`${classes.about__skills} d-flex gap-4 flex-wrap justify-content-center`}
            >
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <Skill skill={skill} />
                </div>
              ))}
            </RevealList>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
