import React from 'react'
import { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
   async function fetchBlogs() {
        let url = 'http://localhost:5000/blogs'
        const res = await fetch(url);
        const data = await res.json();
        setBlogs(data);
      }
      fetchBlogs();
    }, [])
    console.log(blogs);

  
  return (
    <div>
      {/* catergory section */}
      <div>
        Page Catergory
      </div>
      {/* blogCards section */}
      <div>
        <BlogCard blogs={blogs}/>
      </div>
      {/* pagination section */}
      <div></div>
    </div>
  )
}

export default BlogPage
