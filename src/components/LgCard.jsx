import "./Lg-Card-styling.css";
import PropTypes from "prop-types";

export default function LgCard({
  title,
  date,
  author,
  photo,
  description,
  article,
  listTitle,
  recommendations,
}) {
  return (
    <div className="Lg-container">
      <div className="Lg-rightCard">
        <h3 className="Lg-title"> {title} </h3>
        <div className="Lg-float">
          <p className="Lg-author"> {author} </p>
          <p className="Lg-date"> {date} </p>
        </div>
        <div className="Lg-article"> {article} </div>
      </div>
      <div className="Lg-Top-Section">
        <img className="Lg-img" src={photo} alt={description} />
        <ul className="LgList">
          <h2 className="li-title"> {listTitle} </h2>
        </ul>
      </div>
    </div>
  );
}

LgCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  photo: PropTypes.object,
  description: PropTypes.string,
  article: PropTypes.string,
  listTitle: PropTypes.string,
  recommendations: PropTypes.array,
};
