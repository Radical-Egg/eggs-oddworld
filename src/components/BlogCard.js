import PropTypes from 'prop-types';

function BlogCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{props.title}</p>
        <p className="content">{props.body}</p>
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default BlogCard;
