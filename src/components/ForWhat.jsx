import { BiListCheck, BiSolidEraser } from "react-icons/bi";
import { HiOutlineScissors } from "react-icons/hi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { AiOutlineControl } from "react-icons/ai";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { useState } from "react";
const ForWhat = () => {
    const data = [
        {
            icon: <HiOutlineLanguage />,
            title: "Translate",
            text: "Write in your preferred language",
        },
        {
            icon: <BiListCheck />,
            title: "Fix spelling & grammar",
            text: "Prioritize thoughts over perfection",
        },
        {
            icon: <HiOutlineScissors />,
            title: "Make shorter",
            text: "Get rid of the bits you don't need",
        },
        {
            icon: <AiOutlineControl />,
            title: "Change tone",
            text: "Cater to every audience",
        },
        {
            icon: <BiSolidEraser />,
            title: "Simplify language",
            text: "Make doc accessible to everyone",
        },
        {
            icon: <PiPencilSimpleLineBold />,
            title: "Summarize",
            text: "TL:DR for a doc of any length",
        },
    ];
    const [active, setActive] = useState("handbook");
    return (
        <section className='w-full py-5 md:py-16 bg-black text-white'>
            <div className='px-5 md:px-10 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-center gap-10'>
                <p className='flex mt-10 md:mt-0 text-[5vw] xl:text-[4.2vw] text-justify'>
                    Designed for all types of knowledge.
                </p>
                <p className='text-justify md:mb-10'>
                    From onboarding guide to all-hands notes. Site is flexible
                    to easily document all type of company knowledge together
                    with your teammates
                </p>
                <div className='grid md:grid-cols-2 gap-5 '>
                    <div className='flex flex-col justify-between gap-4 text-3xl'>
                        <button
                            className={`text-left w-[60%] ${
                                active === "handbook"
                                    ? "text-white border-b-2 border-[#FA000B] pb-5  duration-200 ease-in-out"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActive("handbook")}
                        >
                            Handbook
                        </button>
                        <button
                            className={`text-left w-[60%] ${
                                active === "company"
                                    ? "text-white border-b-2 border-[#FA000B] pb-5  duration-200 ease-in-out"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActive("company")}
                        >
                            Company wiki
                        </button>
                        <button
                            className={`text-left w-[60%] ${
                                active === "meeting"
                                    ? "text-white border-b-2 border-[#FA000B] pb-5  duration-200 ease-in-out"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActive("meeting")}
                        >
                            Meeting notes
                        </button>
                    </div>
                    <div className='flex max-h-[300px]'>
                        <img
                            src='https://source.unsplash.com/1700x1005?office'
                            alt=''
                            className='object-cover'
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-5 items-center'>
                    <p className='w-fit text-6xl font-bold'>Writing with AI.</p>
                    <p className='w-fit text-2xl'>
                        Improve your writing with AI
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-center'
                        >
                            <div className='pr-5 md:pr-7 text-3xl w-fit'>
                                {items.icon}
                            </div>
                            <div className='flex-1 flex flex-col gap-3'>
                                <p className='font-bold text-md'>
                                    {items.title}
                                </p>
                                <p className='font-semibold text-sm'>
                                    {items.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForWhat;
