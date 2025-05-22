import React from 'react'
import { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCatergory, setSelectedCatergory] = useState(null);
  const [activeCatergory, setActiveCatergory] = useState(null);

  useEffect(() => {
   async function fetchBlogs() {
        let url = 'http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}';

        // filtered by catergory
        if (selectedCatergory) {
          url += `&catergory=${selectedCatergory}`;
          
        }
        const res = await fetch(url);
        const data = await res.json();
        setBlogs(data);
      }
      fetchBlogs();
    }, [currentPage, pageSize, selectedCatergory])


  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  // handle catergory change
  const handleCatergoryChange = (catergory) => {
    setSelectedCatergory(catergory);
    setCurrentPage(1); // reset to first page
    setActiveCatergory(catergory);
  }

  
  return (
    <div>
      {/* catergory section */}
      <div>
        Page Catergory
      </div>
      {/* blogCards section */}
      <div>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCatergory={selectedCatergory} pageSize={pageSize}/>
      </div>
      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage
