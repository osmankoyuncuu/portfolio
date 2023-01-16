import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
import { NAV__LINK } from "../Header/Header";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          {/*===========footer top=============*/}
          <Col lg="6">
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>
          <Col lg="6">
            <div className={`${classes.footer__creator}`}>
              <h6>Created by Osman</h6>
            </div>
          </Col>
          {/*===========footer bottom=============*/}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                © Copyright {year} - Developed by Osman KOYUNCU. All right
                reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
