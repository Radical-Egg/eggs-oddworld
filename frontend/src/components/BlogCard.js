import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

function BlogCard(props) {
  const navigate = useNavigate();

  const routeChange = () => {
    let slug = slugify(props.title.toLowerCase());
    let path = `/blogs/${props.blog_key}/${slug}`;
    navigate(path);
  };

  return (
    <div
      className="card"
      onClick={() => {
        routeChange();
      }}>
      <header className="card-header">
        <p className="card-header-title title is-size-6">{props.title}</p>
      </header>
      <div className="card-content">
        <div className="content">{props.description}</div>
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  description: PropTypes.string,
  blog_key: PropTypes.number,
};

export default BlogCard;
