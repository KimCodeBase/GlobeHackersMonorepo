import './SmCardStyling.css';
import PropTypes from 'prop-types';


export default function SmCard( {title,date, author, photo, article} ) {

return (
<div className='outer-div'>
  <div className="container">
    <h3 className="title">{title}</h3>
    <div className='card-header'>
    <p className="date">{date}</p>
    <p className="author">{author}</p>
    </div>
    <img className="img" src={photo} alt="" />
    <div className='article'>{article}</div>
    <button className='drop-btn'>Article</button>
  </div>
</div>
  
)
}

SmCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
};