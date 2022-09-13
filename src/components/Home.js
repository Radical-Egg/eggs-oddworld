import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const GetPosts = async () => {
  const p = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return p.data;
};

function Home() {
  const [posts, setPosts] = useState([]);
  const [postLen, setPostLen] = useState(null);
  const [next, setNext] = useState(0);
  const [next_end, setNextEnd] = useState(7);

  const nextPage = async () => {
    let n = next + 5;
    let n_end = next_end + 5;

    if (n_end > postLen) {
      setNext(postLen - 5);
      setNextEnd(postLen);
    } else {
      setNext(n);
      setNextEnd(n_end);
    }
  };

  const prevPage = async () => {
    let prev = next - 5;
    let prev_end = next_end - 5;

    if (prev < 0) {
      setNext(0);
      setNextEnd(5);
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

  return (
    <div className="column is-centered homeview container is-max-desktop">
      <h1 className="title">Eggs Oddworld</h1>
      {posts.map((post) => {
        return (
          <div className="container card-container" key={post.id}>
            <BlogCard key={post.id} {...post} />
          </div>
        );
      })}
      {postLen > 5 && (
        <footer>
          <div className="container is-centered next-container">
            <button className="button prevBtn" onClick={prevPage}>
              Previous
            </button>
            <button className="button nextBtn" onClick={nextPage}>
              Next
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

export default Home;
