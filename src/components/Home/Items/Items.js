import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, price, quantity, supplier, description, image } = item;

    return (
        <div className="flex justify-center md:mb-0 mb-4">
            <div className="flex flex-col md:max-w-sm rounded-lg bg-white shadow-lg p-4">
                <div className="max-h-72 w-full">
                    <img className="w-full h-full object-cover rounded-t-lg md:rounded-md md:rounded-l-lg" src={image} alt="" />
                </div>
                <div className="px-4 pt-4 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-0">{name}</h5>
                    <p className="text-gray-700 text-sm mb-0 text-left">
                        {`${description.slice(0, 140)} ......`}
                    </p>
                    <div className='flex justify-between text-left mt-0 font-semibold'>
                        <span>Price: {price}</span>
                        <span>Quantity: {quantity}</span>
                    </div>
                    <p className=' text-left font-semibold'>Supplier: {supplier}</p>
                    <div className="flex space-x-2 justify-center mt-4">
                        <Link to={`/inventory/${_id}`} className="inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"

                        >Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;