// import React from 'react';
// import axios from 'axios';
// // import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';


// const Reservation = () => {

//     const[firstName, setFirstName]= useState("");
//     const[lastName, setLastName]= useState("");
//     const[email, setEmail]= useState("");
//     const[date, setDate]= useState("");
//     const[time, setTime]= useState("");
//     const[phone, setPhone]= useState("");
//     const navigate = useNavigate();

//     const handleReservation = async (e)=>{
//         e.preventDefault();

//         try{
//             const {data} = await axios.post("http://localhost:3200/api/v1/reservation/send",
//             {firstName, lastName, email, date, time, phone},
//             {
//                 headers:{
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials:true
//             });
//             toast.success(data.message);
//             setFirstName("");
//             setLastName("");
//             setEmail("");
//             setDate("");
//             setTime("");
//             setPhone("");
//             navigate("/success");

//         }
//         catch (error){
//             toast.error(error);

//         }
//     }

//     // const handleReservation = async (e) => {
//     //     e.preventDefault();
    
//     //     try {
//     //         const response = await axios.post(
//     //             "http://localhost:3200/api/v1/reservation/send",
//     //             { firstName, lastName, email, date, time, phone },
//     //             {
//     //                 headers: {
//     //                     "Content-Type": "application/json"
//     //                 },
//     //                 withCredentials: true
//     //             }
//     //         );
    
//     //         if (response.data) {
//     //             toast.success(response.data.message);
//     //             setFirstName("");
//     //             setLastName("");
//     //             setEmail("");
//     //             setDate("");
//     //             setTime("");
//     //             setPhone("");
//     //             navigate("/success");
//     //         } else {
//     //             console.log("Kaisa lga ")
//     //             toast.error("An unexpected error occurred. Please try again.");
//     //         }
//     //     } catch (error) {
//     //         console.error(error); // Log the error to understand its structure
//     //         if (error.response && error.response.data) {
//     //             toast.error(error);
//     //         } else {
//     //             toast.error("An unexpected error occurred. Please try again.");
//     //         }
//     //     }
//     // };
//   return <section className='reservation' id='reservation'>

//     <div className="container">
//         <div className="banner">
//             <img src="reservation.png" alt="reservation" />
//         </div>
//         <div className="banner">
//             <div className="reservation_form_box">
//                 <h1>Make a reservation</h1>
//                 <p>For Further Questions, Please Call</p>

//                 <form onSubmit={handleReservation}>
//                     <div>
//                         <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                         <input type="text" placeholder='Last  Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        
//                     </div>
//                     <div>
//                         <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
//                         <input type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
//                     </div>
//                     <div>
//                         <input type="email" placeholder='Email' value={email} className='email_tag' onChange={(e) => setEmail(e.target.value)} />
//                         <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    
//                     </div>
//                     <button type='submit' >Reserve Now
//                      {/* {" "} <span>
//                         <HiOutlineArrowNarrowRight/></span> */}
//                         </button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   </section>
// }

// export default Reservation;






import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:3200/api/v1/reservation/send", {
                firstName,
                lastName,
                email,
                date,
                time,
                phone
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone("");
            navigate("/success");
        } catch (error) {
            // Extract a meaningful message from the error object
            const errorMessage = error.response?.data?.message || error.message || "An error occurred";
            toast.error(errorMessage);
        }
    }

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="reservation.png" alt="reservation" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>Make a reservation</h1>
                        <p>For Further Questions, Please Call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div>
                                <input type="email" placeholder='Email' value={email} className='email_tag' onChange={(e) => setEmail(e.target.value)} />
                                <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type='submit'>Reserve Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservation;
