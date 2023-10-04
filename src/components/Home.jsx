import { useState } from "react";
import work from "../assets/work.png";
const Home = () => {
    const [email, setEmail] = useState("");
    return (
        <section className='px-10 max-w-[1400px] min-h-[80vh] flex flex-col justify-center'>
            <div className='grid grid-cols-2 py-20 gap-10'>
                <div className='flex flex-col justify-center gap-5'>
                    <p className='text-8xl text-justify'>Autopilot</p>
                    <p className='text-xl font-semibold'>
                        Free up your team from the burdens of creating, manging
                        and finding trusted company information.
                    </p>
                    <form className='w-full flex'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='name@company.com'
                            className='flex-1 bg-gray-100 object-cover px-5 outline-none'
                        />{" "}
                        <button className='bg-[#FA000B] w-auto px-5 py-2 font-bold text-white'>
                            Sign up for free
                        </button>
                    </form>
                    <p className='font-semibold text-lg'>
                        Single source of truth is finally possible with{" "}
                        {`Slite's `} collaboratiove knowledge base, powered by
                        Ai.
                    </p>
                </div>
                <div className='flex h-full w-full pl-16 max-h-[400px]'>
                    <img src={work} alt='' className='object-cover' />
                </div>
            </div>
            <div className='flex items-center'>
                <p className='w-fit text-7xl font-bold'>200,000+</p>
                <p className='w-full text-right text-2xl font-bold'>
                    growing startups use Slite as their single source of truth
                </p>
            </div>
            <div className='grid grid-cols-6 gap-5 py-10'>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
                <div className='flex bg-gray-100 w-full p-7 h-[150px]'>
                    <img
                        src='https://source.unsplash.com/1700x1000?logo'
                        alt=''
                        className='bg-gray-100 w-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
