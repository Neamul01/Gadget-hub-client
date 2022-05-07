import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const MyItems = () => {
    const [userItem, setuserItem] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`https://gadget-hub-assignment-11.herokuapp.com/userItem?email=${email}`)
                setuserItem(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getUser()

    }, [user])

    const handleDeleteButton = id => {
        const confirm = window.confirm('are you sure you want to delete..?');
        if (confirm) {
            axios.delete(`https://gadget-hub-assignment-11.herokuapp.com/item?id=${id}`)
                .then(res => {
                    if (res.data.acknowledged === true) {
                        updateUI(id)
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const updateUI = (id) => {
        const rest = userItem.filter(item => item._id !== id);
        setuserItem(rest)
    }

    return (
        <div className='my-12 md:px-20 px-4 w-full'>
            <h2 className='text-3xl text-center font-semibold my-12'>My Items</h2>
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
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        userItem?.map(item =>
                                            <tr key={item._id} className="border-b-2">
                                                <td className="px-6 text-left py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}
                                                </td>
                                                <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item._id}
                                                </td>
                                                <td className="text-sm text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.quantity}
                                                </td>
                                                <td className="text-sm text-left text-gray-900 font-light whitespace-nowrap">

                                                    <span className="whitespace-nowrap ">
                                                        <button onClick={() => handleDeleteButton(item._id)} className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
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

        </div >
    );
};

export default MyItems;