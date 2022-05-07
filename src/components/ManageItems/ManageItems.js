import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/items`)
            .then(res => setItems(res.data))
    }, [])

    return (
        <div className='my-12 md:px-20 px-4 w-full'>
            <h2 className='text-3xl text-center font-semibold my-12'>All Items</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Id
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Supplier
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        items?.map(item => <tr key={item._id} className="border-b-2">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">{item._id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-left whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-left whitespace-nowrap">
                                                {item.quantity}1
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-left whitespace-nowrap">
                                                {item.supplier}
                                            </td>
                                            <td>
                                                <span className="whitespace-nowrap">
                                                    <button to={'additem'} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                                </span>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  ml-4 md:mt-12 mt-4 space-x-2">
                <Link to={'additem'} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Item</Link>
            </div>

        </div >
    );
};

export default ManageItem;