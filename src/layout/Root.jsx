import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Loading from '../components/Loading';

const Root = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='md:w-11/12 mx-auto my-3'>
                    <Latest></Latest>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='md:w-11/12 mx-auto my-3  grid grid-cols-12'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                <section className='main col-span-9 md:col-span-6'>
                    {state == "loading" ? <Loading/> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 hidden md:block sticky top-2 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default Root;