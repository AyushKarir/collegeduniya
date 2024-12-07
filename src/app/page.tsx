'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import collegesData from '../constants/collegesData.json';
import TableData from '../components/TableData'

const CollegeDashboard = () => {
  const [colleges, setColleges] = useState(collegesData.slice(0, 10));
  const [sortConfig, setSortConfig] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSort = (key, order = 'asc') => {
    const sortedData = [...colleges].sort((a, b) => {
      const diff = a[key] - b[key];
      return order === 'asc' ? diff : -diff;
    });
    setColleges(sortedData);
    setSortConfig({ key, order });
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );


  //#####implementation of infinite scroll###########
  const loadMoreData = () => {
    if (colleges.length < collegesData.length) {
      const nextBatch = collegesData.slice(colleges.length, colleges.length + 10);
      setColleges((prevColleges) => [...prevColleges, ...nextBatch]);
    }
    setIsLoading(false); // Reset loading state after data is added
  };

  const handleInfiniteScroll = useCallback(() => {
    const { scrollHeight, scrollTop } = document.documentElement;
    const innerHeight = window.innerHeight;

    if (
      scrollTop + innerHeight >= scrollHeight - 1 && // When reaching the bottom
      !isLoading && // Prevent multiple loads
      colleges.length < collegesData.length // Check if there is more data to load
    ) {
      setIsLoading(true);
      loadMoreData();
    }
  }, [colleges.length, isLoading]);

  // Attach and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, [handleInfiniteScroll]);


  return (
    <div>
      <div className="flex justify-around mt-36 mb-4">
        <input
          type="text"
          placeholder="Search College..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 mr-4"
        />
        <select
          onChange={(e) => {
            const [key, order] = e.target.value.split('-');
            handleSort(key, order);
          }}
          className="border px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="fees-asc">Fees (Low to High)</option>
          <option value="fees-desc">Fees (High to Low)</option>
          <option value="rating-asc">Rating (Low to High)</option>
          <option value="rating-desc">Rating (High to Low)</option>
        </select>
      </div>


      <TableData filteredColleges={filteredColleges} />
    </div>
  );
};

export default CollegeDashboard;