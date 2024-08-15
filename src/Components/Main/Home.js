import React from 'react'
// import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import donation11 from "../../assets/donation/donation11.png"

const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1, description : "Registering on our blood donation website is a simple and quick process designed to connect you with those in need of life-saving blood. By filling out a brief form with your personal details, blood type, and availability, you become a part of a community committed to making a difference. Our system ensures your information is securely stored and easily accessible when a matching recipient requires your donation."},
        { title: "Seeing", img: g2, description : "Our platform allows you to see real-time data on blood donation needs and recent activities. You can view requests from hospitals and clinics, monitor ongoing donation drives, and track your donation history. This transparency ensures you stay informed and engaged, knowing precisely how your contributions are making a significant impact." },
        { title: "Donation", img: g3, description : "Donating blood through our website is streamlined and convenient. Once registered, you'll receive notifications about donation opportunities in your area. Simply choose a convenient time and location, and our system will guide you through the process. From pre-donation guidelines to post-donation care, we provide all the information you need to make your donation experience safe and comfortable" },
        { title: "Save Life", img: g4 , description : "By donating blood, you become a hero in someone's life story. Each donation has the potential to save up to three lives, making your contribution invaluable. Our platform highlights success stories and testimonials from recipients, showing the profound impact your generosity has on individuals and families. Join us in our mission to save lives, one donation at a time"},
    ]
    return (
        <div className="dark:text-white-900">
            <img src={donation11} className="w-full h-80 " alt="" />
            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div>
            <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p>
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-xl underline font-bold text-blood text-center mt-5 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center'>
                {temp2.map((e, i) =>
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                    <div className='flex'>
                        <img className='object-cover w-full' src={e.img} draggable={false} alt="" />
                    </div>
                    <div className='m-4'>
                        <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
                        <p className='text-justify'>{e.description}</p>
                    </div>
                </div>                
                )}
            </div>
            <br />
        </div>
    )
}

export default Home