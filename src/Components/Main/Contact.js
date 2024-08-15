import React from 'react'
import cc from "../../assets/cc.png"
import { useState } from 'react';
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {
    // const data = [
    //     {
    //         title: "PulseConnect related queries, feedback and suggestions", body: [
    //             "Center For Development of Advanced Computing",
    //             "C-56/1, Anusandhan Bhawan , Sector-62, Noida, Uttar Pardesh-201307",
    //             "8527890830",
    //             "bloodlink[at]cdac[dot]in"
    //         ]
    //     },
    //     {
    //         title: "For Administrative queries", body: [
    //             "Blood Cell, National Health Mission",
    //             "Ministry of Health & Family Welfare,New Delhi - 110011"
    //         ]
    //     },
    //     { title: "For administrative queries", body: ["Blood Cell, National Health Mission", "Ministry of Health & Family Welfare,New Delhi - 110011"] }
    // ];

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        feedback: ''
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        toast("Submitted");
        <ToastContainer />
        console.log(formData);
        toast.success("Sui")
        setFormData({
          name: '',
          number: '',
          email: '',
          feedback: ''
        });
      };

    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                {/* <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div> */}

 <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {/* {submitted && <p className="text-green-500 mb-4">Thank you for your feedback!</p>} */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
      </form>
    </div> 

                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact