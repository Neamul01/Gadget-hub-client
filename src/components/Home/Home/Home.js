import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Items from '../Items/Items';
import Quality from '../Quality/Quality';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchItem = fetch('https://gadget-hub-assignment-11.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
        toast.promise(
            fetchItem,
            {
                loading: setLoading(true),
                success: setLoading(false),
                error: <b>Could not load items....</b>,

            }
        );
    }, [])

    return (
        <div>
            {/*banner section */}
            <Banner></Banner>

            {
                loading && <Loading></Loading>
            }
            {/*Items section */}
            <div className='mt-8 md:px-8 px-4 text-gray-900' >
                <h2 className='text-3xl font-bold mb-12 text-center'>Items</h2>
                <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-16 mb-8  p-8'>

                    {/* Single Item */}
                    {
                        items.map(item => <Items key={item?._id} item={item}></Items>)
                    }
                </div>
                {/* Manage Item Button  */}
                <div className="flex justify-center ml-4 md:my-8 my-2 space-x-2">
                    <Link to={'manageitems'} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage Items</Link>
                </div>
            </div >

            {/* Quality section  */}
            <Quality></Quality>

            {/* Features section  */}
            <Features></Features>
        </div>
    );
};

export default Home;