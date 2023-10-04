import { useState } from "react";
import work from "../assets/work.png";
const Home = () => {
    const [email, setEmail] = useState("");
    const partners = [
        { img: "https://source.unsplash.com/1700x1000?logo" },
        { img: "https://source.unsplash.com/1700x1001?logo" },
        { img: "https://source.unsplash.com/1700x1002?logo" },
        { img: "https://source.unsplash.com/1700x1003?logo" },
        { img: "https://source.unsplash.com/1700x1004?logo" },
        { img: "https://source.unsplash.com/1700x1005?logo" },
    ];
    return (
        <section className='px-5 md:px-10 max-w-[1400px] min-h-[80vh] flex flex-col justify-center'>
            <div className='grid sm:grid-cols-2 py-10 md:py-20 gap-5 md:gap-10'>
                <div className='flex flex-col justify-center gap-5'>
                    <p className='text-6xl flex justify-between md:text-8xl text-justify'>
                        <span>A</span>
                        <span>u</span>
                        <span>t</span>
                        <span>o</span>
                        <span>p</span>
                        <span>i</span>
                        <span>l</span>
                        <span>o</span>
                        <span>t</span>
                    </p>
                    <p className='text-xl font-semibold'>
                        Free up your team from the burdens of creating, manging
                        and finding trusted company information.
                    </p>
                    <form className='w-full flex flex-col gap-3 md:gap-0 md:flex-row  mt-7'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='name@company.com'
                            className='flex-1 bg-gray-100 object-cover px-5 outline-none py-2'
                        />{" "}
                        <button className='bg-[#FA000B] md:w-auto px-5 py-3 font-bold text-white'>
                            Sign up for free
                        </button>
                    </form>
                    <p className='font-semibold text-lg'>
                        Single source of truth is finally possible with{" "}
                        {`Slite's `} collaboratiove knowledge base, powered by
                        Ai.
                    </p>
                </div>
                <div className='flex h-full w-full md:px-5 md:pl-16 max-h-[400px]'>
                    <img src={work} alt='' className='object-cover' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center'>
                <p className='md:w-fit text-7xl font-bold text-center'>
                    200,000+
                </p>
                <p className='w-full mt-2 md:mt-0 text-center md:text-right text-2xl font-bold'>
                    growing startups use Slite as their single source of truth
                </p>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-6 gap-5 py-10'>
                {partners.map((items, index) => (
                    <div
                        key={index}
                        className='flex bg-gray-100 w-full p-5 md:p-7 h-[80px]  md:h-[150px]'
                    >
                        <img
                            src={items.img}
                            alt=''
                            className='bg-gray-100 w-full object-cover'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
