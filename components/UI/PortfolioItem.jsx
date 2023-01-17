import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";

const PortfolioItem = ({ title, img, liveUrl, keyword }) => {
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword?.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>
      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <a href={liveUrl}>Launch</a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
