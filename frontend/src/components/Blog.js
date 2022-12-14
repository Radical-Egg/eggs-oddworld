import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import axios from 'axios';
import { api_config } from '../config';
import rehypeRaw from 'rehype-raw';
import '../assets/Markdown.css';

const getPostByID = async (id) => {
  const p = await axios.get(`${api_config}/posts/${id}`);

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
    <div className="blogview container blog-container">
      <div className="section">
        <p className="title">{post.title}</p>
        <p className="subtitle blog-subtitle">{post.description}</p>
        <div className="blog-body">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock} className="markdown">
            {
              // eslint-disable-next-line
            }
            {post.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Blog;
