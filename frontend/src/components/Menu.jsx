import React from 'react';
import {data} from "../restApi.json";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Popular Dishes</h1>
                <p>Discover our customer favorites! From our savory chicken tikka masala to our rich and creamy pasta Alfredo, each dish is crafted to perfection. Don't miss our signature gourmet burgers and decadent chocolate lava cake, guaranteed to satisfy your cravings. Experience the best we have to offer with these delicious selections!</p>
            </div>

            <div className='dishes_container'>
                {
                    data[0].dishes.map(element=>{

                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu