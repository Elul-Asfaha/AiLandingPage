const Nav = () => {
    return (
        <div className='max-w-[1400px] flex items-center justify-between font-semibold w-full px-10 py-5'>
            <div>logo</div>
            <div className='hidden w-full md:flex font-bold justify-evenly items-center gap-5'>
                <div>Product</div>
                <div>Solutions</div>
                <div>Pricing</div>
                <div>Resources</div>
                <div>Sign in</div>
            </div>
            <div className='hidden min-w-fit md:flex gap-3'>
                <p className='border border-black px-3 py-1'>Book a demo</p>
                <p className='bg-[#FA000B] text-white border border-[#FA000B]  px-3 py-1'>
                    Start for free
                </p>
            </div>
        </div>
    );
};

export default Nav;
