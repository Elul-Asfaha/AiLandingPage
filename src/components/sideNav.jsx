import { BsArrowRightShort } from "react-icons/bs";

const SideNav = ({ navToggled, navToggler }) => {
    return (
        <div
            className={`md:hidden overflow-scroll w-[100%] z-30 absolute top-0 h-full duration-500 ease-in-out ${
                !navToggled ? "right-0" : "right-[-100%]"
            }`}
        >
            <div
                className='absolute top-0 bottom-0 left-0 right-0 z-30'
                onClick={navToggler}
            ></div>
            <div className='w-[80%] text-white h-full absolute inset-y-0 right-0 p-5 bg-[#FC8E22] z-40 flex justify-between'>
                <button
                    onClick={navToggler}
                    className='px-4 h-fit w-fit text-3xl'
                >
                    <BsArrowRightShort />
                </button>
                <div className='w-full text-right flex flex-col font-bold gap-5'>
                    <div>Product</div>
                    <div>Solutions</div>
                    <div>Pricing</div>
                    <div>Resources</div>
                    <div>Sign in</div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
