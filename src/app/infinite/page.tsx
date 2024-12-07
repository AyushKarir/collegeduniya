'use client'
import React from 'react'
import { useEffect, useCallback, useState } from 'react'
import collegesData from '../../constants/collegesData.json'
const Infinite = () => {

    const [colleges, setColleges] = useState(collegesData.slice(0, 10)); // Initial 10 colleges
    const [isLoading, setIsLoading] = useState(false);

    // Function to load more colleges
    const loadMoreData = () => {
        if (colleges.length < collegesData.length) {
            const nextBatch = collegesData.slice(colleges.length, colleges.length + 10);
            setColleges((prevColleges) => [...prevColleges, ...nextBatch]);
        }
        setIsLoading(false); // Reset loading state after data is added
    };

    // Infinite scroll handler
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
        <>
            <div className="mb-4 mt-36">
                <table className="table-auto w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2 w-16">CD Ranking</th>
                            <th className="border px-4 py-2">College Name</th>
                            <th className="border px-4 py-2">Fees</th>
                            <th className="border px-4 py-2">Placement</th>
                            <th className="border px-4 py-2">Ratingssdsd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colleges.map((college) => (
                            <tr key={college.id}>
                                <td className="border px-4 py-2 w-16">#{college.cd_rank}</td>
                                <td className="border px-4 py-2">
                                    {college.featured && (
                                        <span className="bg-yellow-500 px-2 py-1 rounded-full text-white mr-2">
                                            Featured
                                        </span>
                                    )}
                                    {college.name}
                                </td>
                                <td className="border px-4 py-2">₹{college.fees}</td>
                                <td className="border px-4 py-2">
                                    ₹{college.placement.avg_package} average package
                                    <br />
                                    ₹{college.placement.highest_package} highest package
                                </td>
                                <td className="border px-4 py-2">
                                    {college.rating}/10
                                    <br />
                                    {college.reviews?.tags ? college.reviews?.tags : ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Infinite
