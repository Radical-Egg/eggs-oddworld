import { useEffect, useState, createRef } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import { api_config } from '../config';

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
        .get(`${api_config}/posts`, {
          method: 'get',
          headers: {
            'Content-type': 'Application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
          data: {},
        })
        .then((post) => {
          setPosts(post.data);
        })
        .catch((err) => {
          console.log('some error happened');
          console.log(err);
        });
    }
    setData();
  }, []);

  useEffect(() => {
    props.appRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="homeview " ref={homeviewRef}>
      <div className="is-max-desktop is-flex is-justify-content-center is-flex-direction-column">
        <section className="hero is-flex is-justify-content-center">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Projects</p>
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
              contentArrowStyle={contentArrowStyles}
              onTimelineElementClick={() => {
                routeChange(element.id, element.title);
              }}
              iconStyle={iconStyles}
              icon={<GoIcon />}>
              <h3 className="vertical-timeline-element-title is-size-4	is-underlined">
                {element.title}
              </h3>
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
  color: '#e5e5e5',
  border: 'solid',
  borderWidth: '3px',
  boxShadow: 'none',
  borderRadius: '20px',
  borderColor: '#c9add7',
};

const contentArrowStyles = {
  borderRight: 'unset',
};

const iconStyles = { background: '#c9add7' };

export default Home;
