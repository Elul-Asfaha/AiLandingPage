import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className='flex flex-col items-center'>
            <Nav />
            <Home />
        </div>
    );
};

export default App;
