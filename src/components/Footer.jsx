import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");

    return (
        <footer className='bg-black w-full text-white'>
            <div className='px-5 md:px-10 w-full max-w-[1400px] mx-auto py-16 flex flex-col'>
                <div className='flex flex-col gap-5 md:flex-row md:gap-0 border-b-2 border-white py-16'>
                    <div className='grid grid-cols-3 lg:grid-cols-5 gap-5'>
                        <div className='flex flex-col gap-5 '>
                            <p className='font-bold text-lg'>
                                What {"it's "} for
                            </p>
                            <p className=''>Knowledge base</p>
                            <p className=''>Project documentation</p>
                            <p className=''>Employee Onboarding</p>
                            <p className=''>Meeting notes</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='font-bold text-lg'>How it works</p>
                            <p className=''>Features</p>
                            <p className=''>Intergrations</p>
                            <p className=''>Pricing</p>
                            <p className=''>{"What's "} new</p>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <p className='font-bold text-lg'>Resources</p>
                            <p className=''>Templates</p>
                            <p className=''>Learn</p>
                            <p className=''>Download apps</p>
                            <p className=''>Startup Bibles</p>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <p className='font-bold text-lg'>Slite</p>
                            <p className=''>About us</p>
                            <p className=''>Blog</p>
                            <p className=''>Careers</p>
                            <p className=''>Customers</p>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <p className='font-bold text-lg'>Compare</p>
                            <p className=''>Notion</p>
                            <p className=''>Confluence</p>
                            <p className=''>Google Docs</p>
                            <p className=''>Dropbox Paper</p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <p className='font-bold text-xl'>
                            Read about the future of team knowlege
                        </p>
                        <form className='w-full flex flex-col gap-3 md:gap-0 md:flex-row'>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='name@company.com'
                                className='flex-1 bg-gray-100 object-cover px-5 outline-none py-2'
                            />{" "}
                            <button className='bg-[#FA000B] md:w-auto px-5 py-3 font-bold text-white'>
                                Continue
                            </button>
                        </form>
                        <p>
                            Thoughtful insights and actionable learnings on how
                            to bring your team on the same page. No fluff, no
                            spam, no corporate filler. Just a friendly letter.
                            twice a month
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 md:flex-row justify-between pt-16'>
                    <div className='flex gap-10'>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>User terms</p>
                        <p>Customer terms</p>
                    </div>
                    <p>@2023 Soenemis, All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
