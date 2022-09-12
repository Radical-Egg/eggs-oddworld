import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const GetPosts = async () => {
  const p = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return p.data.slice(0, 5);
};

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function setData() {
      const p = await GetPosts();
      setPosts(p);
    }
    setData();
  }, []);

  return (
    <div className="column is-centered homeview">
      <h1 className="title">Eggs Oddworld</h1>
      {posts.map((post) => {
        return (
          <div className="container card-container" key={post.id}>
            <BlogCard key={post.id} {...post} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
