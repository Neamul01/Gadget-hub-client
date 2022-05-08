import React from 'react';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative md:max-h-screen-md " data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={banner2}
                        className="block w-full max-h-screen"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center mb-24 ">
                        <h5 className="text-4xl mb-4">All Gadgets here..</h5>
                        <p>Here you can find all kind of gadgets for your business....</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner1}
                        className="block w-full max-h-screen"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center mb-24 ">
                        <h5 className="text-4xl mb-4">Got next level to your business..</h5>
                        <p>For ous support and communication skill you will get a next level experience to your business....</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={banner3}
                        className="block w-full max-h-screen"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center mb-24 ">
                        <h5 className="text-4xl mb-4">All Gadgets here..</h5>
                        <p>Here you can find all kind of gadgets for your business....</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;