import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Items from '../Items/Items';
import Quality from '../Quality/Quality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Quality></Quality>
            <Features></Features>
        </div>
    );
};

export default Home;