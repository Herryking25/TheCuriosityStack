import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Game</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                            </li>
                        </ul>
                    </div>

                    {/* catergory 2 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eComerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/* catergory 3 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non-profit</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* catergory 4 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infoprenuer</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                            </li>
                        </ul>
                    </div>


                </div>

                 {/* subscription */}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                         <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name="email" id="email" 
                            className='flex-grow w-full h-12 px-4 mb-3 transition duration-200
                             bg-white border border-gray-300 rounded shadow-sm aspect-auto
                              md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                              <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                              text-white transition duration-200 rounded shadow-md hover:bg-orange-600 
                              focus:shadow-outline focus:outline-none border'>
                                Subscribe
                              </button>
                         </form>

                         <p className='mt-4 text-sm text-gray-500'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam beatae, 
                             accusamus aut saepe repellat omnis corrupti culpa repudiandae,
                             provident illo, enim impedit unde accusantium voluptatem. Nesciunt iusto soluta officia!
                         </p>
                    </div>
            </div>
            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-500'>© Copyright 2025 | All rights reserved</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                        <FaSquareXTwitter  className='h-6 w-6'/>
                    </a>
                    <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                        <FaInstagramSquare  className='h-6 w-6'/>
                    </a>
                    <a href="" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                        <FaFacebookSquare  className='h-6 w-6'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer