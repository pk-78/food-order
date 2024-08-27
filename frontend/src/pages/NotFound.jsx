import React from 'react';
// import HeroSection from '../components/HeroSection';

import {Link} from 'react-router-dom'

import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const NotFound = ()=>{

    return(
        <>
            <section className='notFound'>
                <div className="container">
                    <img src="/notFound.svg" alt="notFound" />
                    <h1>Looks Like you are lost</h1>
                    <p>We cant seem you to find the page you are looking for</p>

                    <Link to="/">
                        Back to home{" "}
                        <span>< HiOutlineArrowNarrowRight/></span>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default NotFound;