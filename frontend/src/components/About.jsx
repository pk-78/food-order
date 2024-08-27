import React from 'react';
import {Link} from "react-scroll";




const About = ()=>{
    return(
        <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                Welcome to The Foodies, founded by Priyanshu Kushwaha. We are passionate about creating unforgettable culinary experiences with fresh ingredients and delicious recipes. Inspired by family traditions and a love for food, Priyanshu brings a unique touch to every dish. Whether you're craving classic comfort food or something new, we have something for everyone. Join us and enjoy a delightful dining experience that celebrates taste, quality, and love
                </p>
                <Link to={"/"}> Explore Menu {" "}  <span>
                    
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>

    </section>
    )
}

export default About;