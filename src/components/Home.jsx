import { useState } from "react";

const Home = () => {
    const [email, setEmail] = useState("");
    return (
        <section className='px-10 py-10'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-10'>
                    <p className='text-5xl'>Autopilot</p>
                    <p className='text-xl'>
                        Free up your team from the burdens of creating, manging
                        and finding trusted company information.
                    </p>
                    <form className='w-full flex'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='name@company.com'
                            className='flex-1 bg-gray-100 px-5'
                        />{" "}
                        <button className='bg-[#FA000B] w-auto px-5 py-2 text-white'>
                            sign up for free
                        </button>
                    </form>
                    <p>
                        Single source of truth is finally possible with{" "}
                        {`Slite's`}
                        collaboratiove knowledge base, powered by Ai.
                    </p>
                </div>
                <div>
                    <img src='' alt='' />
                </div>
            </div>
            <div className='flex'>
                <p className='w-fit'>200,000+</p>
                <p className='w-full text-right'>
                    growing startups use Slite as their single source of truth
                </p>
            </div>
            <div className='flex gap-1'>
                <img src='' alt='' className='flex-1' />
                <img src='' alt='' className='flex-1' />
                <img src='' alt='' className='flex-1' />
                <img src='' alt='' className='flex-1' />
                <img src='' alt='' className='flex-1' />
                <img src='' alt='' className='flex-1' />
            </div>
        </section>
    );
};

export default Home;
