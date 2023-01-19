import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/avatar.webp";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScrool: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>
          <Col md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/avatar.webp"
                    className="rounded-2"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h6>Osman KOYUNCU</h6>
                    <h6>Fult-Stack Developer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  magni unde aspernatur. Unde ea sapiente saepe rerum numquam
                  doloremque excepturi!
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/avatar.webp"
                    className="rounded-2"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h6>Osman KOYUNCU</h6>
                    <h6>Fult-Stack Developer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  magni unde aspernatur. Unde ea sapiente saepe rerum numquam
                  doloremque excepturi!
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/avatar.webp"
                    className="rounded-2"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h6>Osman KOYUNCU</h6>
                    <h6>Fult-Stack Developer</h6>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  magni unde aspernatur. Unde ea sapiente saepe rerum numquam
                  doloremque excepturi!
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
