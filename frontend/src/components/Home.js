import { useEffect, useState, createRef } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

// Logo SVGs
import { ReactComponent as GoIcon } from '../assets/Go_Logo_Black.svg';
//import { ReactComponent as RustIcon } from '../assets/Go_Logo_Black.svg';
//import { ReactComponent as NodeIcon } from '../assets/Go_Logo_Black.svg';

function Home(props) {
  const homeviewRef = createRef();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const routeChange = (id, title) => {
    let slug = slugify(title.toLowerCase());
    let path = `/blogs/${id}/${slug}`;
    navigate(path);
  };

  useEffect(() => {
    async function setData() {
      axios
        .get('http://localhost:3010/posts')
        .then((post) => {
          setPosts(post.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setData();
  }, []);

  useEffect(() => {
    props.appRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div
      className="homeview is-flex is-justify-content-center is-flex-direction-column"
      ref={homeviewRef}>
      <div className="is-max-desktop is-flex is-justify-content-center is-flex-direction-column">
        <section className="hero is-flex is-justify-content-center">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Projects and Blogs</p>
              <p className="subtitle">Collection of stuff</p>
            </div>
          </div>
        </section>
      </div>

      <VerticalTimeline lineColor={iconStyles.background} className="vertical-timeline-custom">
        {posts.map((element) => {
          return (
            <VerticalTimelineElement
              textClassName="vertical-timeline-element-custom"
              key={element.id}
              contentStyle={cardContentStyles}
              onTimelineElementClick={() => {
                routeChange(element.id, element.title);
              }}
              iconStyle={iconStyles}
              icon={<GoIcon />}>
              <h3 className="vertical-timeline-element-title is-size-3	">{element.title}</h3>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
Home.propTypes = {
  appRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

const cardContentStyles = {
  background: 'transparent',
  color: '#fff',
  border: 'solid',
  borderWidth: '1px',
  boxShadow: 'none',
};

const iconStyles = { background: '#c9add7' };

export default Home;
