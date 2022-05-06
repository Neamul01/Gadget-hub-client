import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, price, quantity, supplier, description } = item;

    return (
        <div className="flex justify-center md:mb-0 mb-4">
            <div className="flex flex-col md:max-w-xl rounded-lg bg-white shadow-lg p-4">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div className="px-4 py-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4 text-left">
                        {`${description.slice(0, 170)} ......`}
                    </p>
                    <div className='flex justify-between text-left mt-4 font-semibold'>
                        <span>Price: {price}</span>
                        <span>Quantity: {quantity}</span>
                    </div>
                    <p className=' text-left font-semibold'>Supplier: {supplier}</p>
                    <div className="flex space-x-2 justify-center mt-4">
                        <Link to={`/inventory/${_id}`} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"

                        >Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;