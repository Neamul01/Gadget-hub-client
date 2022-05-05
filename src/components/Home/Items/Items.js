import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    const id = 123114;
    return (
        <div className='mt-8 md:px-8 px-4 text-gray-900' >
            <h2 className='text-3xl font-bold mb-12 text-center'>Items</h2>
            <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-16 mb-8  p-8'>
                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col md:max-w-xl rounded-lg bg-white shadow-lg p-4">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="px-4 py-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left mt-4 font-semibold'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left font-semibold'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <Link to={`/inventory/${id}`} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"

                                >Update</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left mt-4 font-semibold'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left mt-4">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left mt-4 font-semibold'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left mt-4 font-semibold'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left mt-4 font-semibold'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mb-0 mb-4">
                    <div className="flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                            <p className="text-gray-700 text-base mb-4 text-left">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <div className='flex justify-between text-left'>
                                <span>Price:</span>
                                <span>Quantity: </span>
                            </div>
                            <p className=' text-left'>Supplier : </p>
                            <div className="flex space-x-2 justify-center mt-4">
                                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center ml-4 md:my-8 my-2 space-x-2">
                <Link to={'manageitems'} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage Items</Link>
            </div>
        </div >
    );
};

export default Items;