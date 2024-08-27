import React from 'react'
import {data} from '../restApi.json'



const Team = () => {
  return (
    <section className="team" id='team'>

        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>Our Team</h1>
                <p>Led by founder Priyanshu Kushwaha, our dedicated team of chefs and staff work passionately to deliver exceptional dining experiences, ensuring quality, creativity, and customer satisfaction in every dish.</p>
            </div>

            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h1>{element.name}</h1>
                                <p>{element.designation}</p>
                            </div>
                        )
                        

                    })
                }
            </div>
        </div>
        

    </section>
  )
}

export default Team