import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
        axios.post('https://gadget-hub-assignment-11.herokuapp.com/items', data)
            .then(res => {
                alert('data added')
            })
            .catch(error => console.error(error))
    };

    return (
        <div className='my-12'>
            <h2 className="text-3xl font-semibold">Add a new Item</h2>
            <div className='flex justify-center my-4'>
                <div className="block  p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name field  */}
                        <div className="form-group mb-6 text-left">
                            <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
                            <input {...register("name")} required type="text" id='name' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Name" />
                        </div>

                        {/* email field  */}
                        <div className="form-group mb-6 text-left">
                            <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email</label>
                            <input {...register("email")} type="email" value={user?.email} id='email' required className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email" />
                        </div>

                        {/* description field  */}
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-full text-left">
                                <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Description</label>
                                <textarea  {...register("description")}
                                    className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="description"
                                    rows="3"
                                    placeholder="Description"
                                ></textarea>
                            </div>
                        </div>

                        {/* quantity field  */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group text-left mb-6">
                                <label htmlFor="quantity" className="form-label inline-block mb-2 text-gray-700">Quantity</label>
                                <input {...register("quantity")} type="number" id='quantity' className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-describedby="emailHelp124" placeholder="Quantity" />
                            </div>

                            {/* sold field  */}
                            <div className="form-group mb-6 text-left">
                                <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700"> Price</label>
                                <input  {...register("price")} type="number" id='price' className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-describedby="emailHelp123" placeholder="Price" />
                            </div>
                        </div>

                        {/* price field  */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6 text-left">
                                <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700"> Price</label>
                                <input  {...register("price")} type="number" id='price' className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-describedby="emailHelp123" placeholder="Price" />
                            </div>

                            {/* image field  */}

                            <div className="form-group mb-6 text-left">
                                <label htmlFor="image" className="form-label inline-block mb-2 text-gray-700">Image</label>
                                <input {...register("image")} type="text" id='image' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Image Link" />
                            </div>
                        </div>

                        {/* supplier field  */}
                        <div className="form-group mb-6 text-left">
                            <label htmlFor="supplier" className="form-label inline-block mb-2 text-gray-700">Supplier</label>
                            <input {...register("supplier")} type="text" id='supplier' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Supplier" />
                        </div>

                        {/* submit item field  */}
                        <div className="block mt-4 space-x-2">
                            <button className="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Item</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;