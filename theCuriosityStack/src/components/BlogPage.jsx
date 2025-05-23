import React from 'react'
import { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
   async function fetchBlogs() {
        let url = 'http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}';

        // filtered by catergory
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
          
        }
        const res = await fetch(url);
        const data = await res.json();
        setBlogs(data);
      }
      fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])


  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  // handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset to first page
    setActiveCategory(category);
  }

  
  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>
      {/* blogCards section */}
      <div>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
      </div>
      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage
