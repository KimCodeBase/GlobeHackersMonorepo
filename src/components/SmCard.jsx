import './SmCardStyling.css';
import PropTypes from 'prop-types';


export default function SmCard( {title,date, author, photo , article} ) {

return (

  <div className="container">
    <h3 className="title">{title}</h3>
    <div className='card-header'>
    <p className="date">{date}</p>
    <p className="author">{author}</p>
    </div>
    <img className="img" src={photo} alt='Picture' />
    <div className='article'>{article}</div>
    <button className='drop-btn'>Article</button>
  </div>

  
)
}

SmCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  photo: PropTypes.object,
  article: PropTypes.string,
};