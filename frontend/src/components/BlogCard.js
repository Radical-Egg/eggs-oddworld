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
      <div className="card-content">
        <p className="title is-size-6">{props.title}</p>
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  blog_key: PropTypes.number,
};

export default BlogCard;
