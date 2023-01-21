import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";

const PortfolioItem = ({ title, img, liveUrl, keyword, github }) => {
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        <div
          className={`${classes.portfolio__keyword__container} bg-transparent`}
        >
          {keyword?.map((item, index) => (
            <span className={`${classes.portfolio__keyword}`} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>
      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <a href={liveUrl}>Live</a>
        </button>
        <button className="primary__btn">
          <a href={github}>Github</a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
