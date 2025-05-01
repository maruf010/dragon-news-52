import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    
    return (
        <div className='space-y-5 mt-3'>
            <img className='w-full h-80 rounded-t-xl' src={news.image_url} alt="" />
            <h2 className='text-2xl font-semibold'>{news.title}</h2>
            <p className='text-gray-500'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;