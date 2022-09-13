import PropTypes from 'prop-types';

function BlogCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-size-6">{props.title}</p>
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default BlogCard;
