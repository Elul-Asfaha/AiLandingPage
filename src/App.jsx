import { useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ForWhat from "./components/ForWhat";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SideNav from "./components/sideNav";

const App = () => {
    const [navToggled, setNavToggled] = useState(false);
    const handleNavToggler = () => {
        setNavToggled(!navToggled);
        console.log(navToggled);
    };
    return (
        <div className='flex flex-col items-center overflow-y-hidden md:overflow-y-auto h-screen relative'>
            <SideNav navToggler={handleNavToggler} navToggled={navToggled} />
            <div className='overflow-y-scroll scrollbar-hide'>
                <Nav navToggler={handleNavToggler} />
                <Home />
                <ForWhat />
                <Features />
                <Footer />
            </div>
        </div>
    );
};

export default App;
