import { BiListCheck, BiSolidEraser } from "react-icons/bi";
import { HiOutlineScissors } from "react-icons/hi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { AiOutlineControl } from "react-icons/ai";
import { PiPencilSimpleLineBold } from "react-icons/pi";
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
    return (
        <section className='w-full bg-black text-white'>
            <div className='px-5 md:px-10 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-center gap-10'>
                <p className='flex text-xl sm:text-4xl pt-10 md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl justify-between'>
                    <span>Designed</span> <span>for</span> <span>all</span>
                    <span>types</span> <span>of</span> <span>knowledge.</span>
                </p>
                <p className='text-justify'>
                    From onboarding guide to all-hands notes. Site is flexible
                    to easily document all type of company knowledge together
                    with your teammates
                </p>
                <div className='grid grid-cols-2'>
                    <div></div>
                    <div></div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='w-fit text-5xl'>Writing with AI.</p>
                    <p className='w-fit text-xl'>
                        Improve your writing with AI
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-center'
                        >
                            <div className='px-7 md:px-0 md:pr-7 text-3xl w-fit'>
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
