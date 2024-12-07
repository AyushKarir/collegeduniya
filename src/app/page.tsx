'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { College, collegesData } from '../constants/collegesData';

import TableData from '../components/TableData'



interface SortConfig {
  key: keyof College;
  order: 'asc' | 'desc';
}

const CollegeDashboard = () => {
  const [colleges, setColleges] = useState<College[]>(collegesData.slice(0, 10) as College[]);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSort = (key: keyof College, order: 'asc' | 'desc' = 'asc') => {
    const sortedData = [...colleges].sort((a, b) => {
      const valueA = a[key] ?? 0; // Use a default value for undefined or null
      const valueB = b[key] ?? 0;

      const diff = valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
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
            const sortedOrder = (order as "asc" | "desc") || undefined;
            handleSort(key as keyof College, sortedOrder);
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