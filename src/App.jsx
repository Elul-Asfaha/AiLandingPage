import Features from "./components/Features";
import Footer from "./components/Footer";
import ForWhat from "./components/ForWhat";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SideNav from "./components/sideNav";
import useToggler from "./hooks/useToggler";

const App = () => {
    const [navToggled, handleNavToggle] = useToggler(false);
    return (
        <div className='flex flex-col items-center w-screen overflow-x-hidden overflow-y-hidden md:overflow-y-auto h-[100vh] relative'>
            <SideNav
                navToggler={() => handleNavToggle(navToggled)}
                navToggled={navToggled}
            />
            <div className='overflow-y-scroll scrollbar-hide z-20'>
                <Nav navToggler={() => handleNavToggle(navToggled)} />
                <Home />
                <ForWhat />
                <Features />
                <Footer />
            </div>
        </div>
    );
};

export default App;
