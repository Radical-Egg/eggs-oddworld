import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getPostByID = async (id) => {
  const p = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // error handling and what not

  return p.data;
};

function Blog() {
  const { id } = useParams();
  const count = 0;
  const [post, setPost] = useState({});

  useEffect(() => {
    async function setData() {
      getPostByID(id).then((p) => {
        setPost(p);
      });
    }
    setData();
  }, [count]);

  return (
    <div className="homeview container">
      <div className="section">
        <p className="title">{post.title}</p>
        <p className="subtitle">{post.body}</p>
      </div>
      <footer className="card-footer">
        <p> footer </p>
      </footer>
    </div>
  );
}

export default Blog;
