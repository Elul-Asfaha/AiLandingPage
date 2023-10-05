import Features from "./components/Features";
import ForWhat from "./components/ForWhat";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className='flex flex-col items-center'>
            <Nav />
            <Home />
            <ForWhat />
            <Features />
        </div>
    );
};

export default App;
