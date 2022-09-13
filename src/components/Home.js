import { useEffect, useState, createRef } from 'react';
import { PropTypes } from 'prop-types';

import axios from 'axios';
import BlogCard from './BlogCard';

const GetPosts = async () => {
  const p = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return p.data;
};

function Home(props) {
  const homeviewRef = createRef();
  const renderLimit = 15;
  const [posts, setPosts] = useState([]);
  const [postLen, setPostLen] = useState(null);
  const [next, setNext] = useState(0);
  const [next_end, setNextEnd] = useState(15);

  const nextPage = async () => {
    let n = next + renderLimit;
    let n_end = next_end + renderLimit;

    if (n_end > postLen) {
      setNext(postLen - renderLimit);
      setNextEnd(postLen);
    } else {
      setNext(n);
      setNextEnd(n_end);
    }
  };

  const prevPage = async () => {
    let prev = next - renderLimit;
    let prev_end = next_end - renderLimit;

    if (prev < 0) {
      setNext(0);
      setNextEnd(renderLimit);
    } else {
      setNext(prev);
      setNextEnd(prev_end);
    }
  };

  useEffect(() => {
    async function setData() {
      const p = await GetPosts();
      setPostLen(p.length);
      setPosts(p.slice(next, next_end));
    }
    setData();
  }, [next]);

  useEffect(() => {
    props.appRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="homeview" ref={homeviewRef}>
      <div className="column is-max-desktop card-column is-flex-direction-column is-flex is-justify-content-flex-right">
        <h1 className="title">Blogs</h1>
        {posts.map((post) => {
          return (
            <div className="card-container" key={post.id}>
              <BlogCard key={post.id} {...post} />
            </div>
          );
        })}
      </div>
      {postLen > renderLimit && (
        <div className="container is-centered next-container">
          <button className="button prevBtn is-outlined is-primary" onClick={prevPage}>
            Previous
          </button>

          <button className="button is-primary is-outlined" onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
Home.propTypes = {
  appRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default Home;
