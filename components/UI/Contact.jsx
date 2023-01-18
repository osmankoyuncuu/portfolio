import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col md="6">
            <SectionSubtitle subtitle="Contact" />
            <h3 className="mt-4 mb-4">Contact me</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
              expedita aspernatur officiis commodi eius cum possimus id
              accusamus explicabo eaque?
            </p>
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Ankara - Turkey</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>osmannnkoyuncuu@gmail.com</p>
              </li>
            </ul>
            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-github-fill"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-box-fill"></i>
              </Link>
            </div>
          </Col>
          <Col md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
