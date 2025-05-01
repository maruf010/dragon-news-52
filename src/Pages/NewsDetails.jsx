import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightSide from '../components/RightSide';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        // console.log(newsDetails);
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto md:grid md:grid-cols-12 py-5 md:gap-10'>
                <section className='md:col-span-9'>
                    <h2 className='font-bold text-2xl'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='hidden md:flex md:col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;