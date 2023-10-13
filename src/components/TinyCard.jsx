import './TinyCardStyle.css';
import PropTypes from 'prop-types';


export default function TinyCard( {title, imageUrl, description } ) {
return (
    <div className="tC-container">
      <img className="tC-img" src={imageUrl} alt={description} />
      <div className='tC-rightCard'>
        <h3 className="tC-title">{title}</h3>
      </div>
    </div>
);
}

TinyCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};