import './SmCardStyling.css';
import PropTypes from 'prop-types';


export default function SmCard( {title,date, author, photo , description,  article} ) {

return (
  <div className='outer-div'>
  <div className="container">
    <img className="img" src={photo} alt={description} />
    <div className='rightCard'>
    <h3 className="title">{title}</h3>
    <div className='float'>
    <p className="date">{date}</p>
    <p className="author">{author}</p>
    </div>
    <div className='article'>{article}</div>
    <button className='drop-btn'>Full Article</button>
    </div>
  </div>
  </div>
  
)
}

SmCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  photo: PropTypes.object,
  description: PropTypes.string,
  article: PropTypes.string,
};