import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center md:text-left">
                <div className="block rounded-lg shadow-lg bg-white">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/126.jpg" alt="Trendy Pants and Shoes"
                                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full mx-4">

                                                <tbody>
                                                    <tr className="bg-gray-100 border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-2/12 whitespace-nowrap">
                                                            Id
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {id}
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-white border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Name
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @mdo
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-gray-100 border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Description
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @mdo
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-white border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Price
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @fat
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-gray-100 border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Quantity
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @mdo
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-white border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Supplier
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @fat
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-gray-100 border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Sold
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @mdo
                                                        </td>
                                                    </tr>

                                                    <tr className="bg-white border-b">
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 w-3/12 whitespace-nowrap">
                                                            Thornton
                                                        </td>
                                                        <td className="text-sm font-semibold text-gray-900 px-6 py-4 w-1/12 whitespace-nowrap">
                                                            :
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            @fat
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-8">
                    <div className="mb-3 xl:w-96 w-full shadow-lg px-20 py-12">
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-3xl text-gray-900">Restock the Item </label>
                        <input
                            type="number"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-900 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="stock quantity"
                        />
                        <div className="flex space-x-2 mt-3">
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Restock</button>
                        </div>
                    </div>

                </div>


                <div className="flex ml-4 space-x-2">
                    <Link to={'manageitems'} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Manage Items</Link>
                </div>
            </section>

        </div>
    );
};

export default InventoryItem;