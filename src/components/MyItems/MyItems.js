import React from 'react';

const MyItems = () => {
    return (
        <div className='my-12 md:px-20 px-4 w-full'>
            <h2 className='text-3xl text-center font-semibold my-12'>My Items</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <tbody>
                                    <tr className="border-b-2">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @mdo
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Larry
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Wild
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr>
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