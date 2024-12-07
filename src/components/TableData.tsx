import React from 'react'
import { College } from "../constants/collegesData"

type TableDataProps = {
    filteredColleges: College[];
};


const TableData = ({ filteredColleges }: TableDataProps) => {

    const formatFees = (fees: number) => {
        // Convert the fee to a string and use a regex to format the number with commas
        return new Intl.NumberFormat('en-IN').format(fees);
    };

    // const collegedata = colleges;
    return (
        <div>
            <table className="table-auto w-full border-collapse border">
                <thead>
                    <tr className="bg-[#78bec3]">
                        <th className="border text-white px-4 py-2 w-16">CD Ranking</th>
                        <th className="border text-white px-4 py-2">College Name</th>
                        <th className="border text-white px-4 py-2">Fees</th>
                        <th className="border text-white px-4 py-2">Placement</th>
                        <th className="border text-white px-4 py-2">User Reviews</th>
                        <th className="border text-white px-4 py-2">Ranking</th>
                    </tr>
                </thead>
                {filteredColleges.map((college) => (
                    <tbody key={college.id} className={`${college.featured ? 'bg-[#fff0e6]' : 'bg-white'}`}>


                        {/* Featured Badge Row */}



                        <tr key={college.id}>
                            <td className="border px-4 py-2 w-16">#{college.cd_rank}</td>
                            <td className="border px-4 py-2 text-[#41c4e4] font-medium text-2xl pb-12">
                                {college.featured && (

                                    <div className="relative -ml-4 -mt-2 ">
                                        <img
                                            src="/../../banner2.png" // Replace with your image path
                                            alt="Featured Badge"
                                            className="h-8 -mt-8"
                                        />

                                    </div>
                                )}
                                <div className='flex items-center p-2 pl-0'>
                                    <img
                                        src="/../../college.png" // Replace with your image path
                                        alt="Featured Badge"
                                        className="h-12 mr-2 mb-2"
                                    />
                                    <div className='flex flex-col '>
                                        {college.name}

                                        <span className='text-black font-normal text-sm '>  Address: {college.address} </span>

                                        {college.branchwise_cutoff && (
                                            <div className='px-2 border-l-2 border-[#d56811] bg-[#fffae1]'>
                                                <span className='font-medium text-[#d56811] text-lg'>{college.branchwise_cutoff.branch}</span>
                                                <p className=' text-[#848484] text-sm'>JEE Advanced Rank: {college.branchwise_cutoff.branch_cutoff}</p>
                                            </div>
                                        )}


                                    </div>

                                </div>
                                <div className='flex justify-between mt-4'>
                                    <div className='flex items-center cursor-pointer'>
                                        <img
                                            src="/../../right-arrow.svg" // Replace with your image path
                                            alt="Featured Badge"
                                            className="h-6"
                                        />
                                        <p className='text-[#c96831] text-lg'>Apply Now</p>
                                    </div>
                                    <div className='flex items-center cursor-pointer'>
                                        <img
                                            src="/../../download.svg" // Replace with your image path
                                            alt="Featured Badge"
                                            className="h-6"
                                        />
                                        <p className='text-[#31c992] text-lg'>Download Brochure</p>
                                    </div>
                                    <div className='flex items-center justify-center cursor-pointer'>
                                        <input type="checkbox" className='mr-1' /> <p className='text-[#c96831] text-lg'> Add to compare</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border px-4 py-2 ">
                                <p className='text-[#31c992] text-2xl font-medium'>₹{formatFees(college.fees)}</p>
                                <p className='text-[#424242] text-md'>BE/B.Tech</p>
                                <p className='text-[#424242] text-md'>- 1st year fees  </p>
                                <div className='flex mt-4 cursor-pointer'>
                                    <img
                                        src="/../../switch.svg" // Replace with your image path
                                        alt="Featured Badge"
                                        className="h-6"
                                    />  <p className='text-[#c96831] text-md font-medium'>Compare Fees</p>
                                </div>
                            </td>
                            <td className="border px-4 py-2">
                                <p className='text-[#31c992] text-2xl font-medium'>₹{formatFees(college.placement.avg_package)}</p>
                                <p className='text-[#424242] text-md'>Average Package</p>
                                <p className='text-[#31c992] text-2xl font-medium'>₹{formatFees(college.placement.highest_package)}</p>
                                <p className='text-[#424242] text-md'>Highest Package</p>
                                <div className='flex mt-4 cursor-pointer'>
                                    <img
                                        src="/../../switch.svg" // Replace with your image path
                                        alt="Featured Badge"
                                        className="h-6"
                                    />  <p className='text-[#c96831] text-md font-medium'>Compare Placement</p>
                                </div>

                            </td>
                            <td className="border px-4 py-2">
                                <div className='flex items-center'> <img src="/../../circle.svg" className='h-6 mr-2' /> <p className=" text-2xl font-medium">{college.rating}/10</p></div>
                                <p className='text-[#424242] text-md'>Based on {college.reviews?.count} user reviews</p>
                                <br />
                                {college.reviews?.tags &&
                                    (<div className='bg-[#fffae1] rounded-full px-4 py-1  flex items-center w-fit'>
                                        <p className='text-[#d31e5d]'>{college.reviews?.tags ? college.reviews?.tags : ''}</p>
                                        <img src="/../../down arrow.svg" className='h-6' />
                                    </div>)
                                }
                            </td>
                            <td className='border px-4 py-2'>
                                {college.ranking && college.ranking.rank && college.ranking.total_ranks && college.ranking.rank_year ? (
                                    <>
                                        <p className='flex items-center text-2xl text-[#424242]'>
                                            #{college.ranking.rank ? college.ranking.rank : ""}<sup>st</sup>/
                                            <span className='text-[#c96831]'> {college.ranking.total_ranks ? college.ranking.total_ranks : ""} </span>&nbsp;in India
                                        </p>
                                        <div className='flex items-center'>
                                            <img src="/../../week.jpg" className='h-6' />
                                            <p className='text-2xl text-[#424242]'> &nbsp;{college.ranking.rank_year}</p>
                                        </div>
                                        <div className='bg-[#e6faff] font-medium text-[#237591] text-lg border-l-[#237591] border-l-2 rounded-r-full px-4 py-2 py-1 flex items-center w-fit'>
                                            <img src="/../../week.jpg" className='h-4' />
                                            <img src="/../../nirf.png" className='h-4' />&nbsp; +4 more
                                            <img src="/../../down arrow-blue.svg" className='h-6' />
                                        </div>
                                    </>
                                ) : null}
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div >
    )
}

export default TableData