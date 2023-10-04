import ForWhat from "./components/ForWhat";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className='flex flex-col items-center'>
            <Nav />
            <Home />
            <ForWhat />
        </div>
    );
};

export default App;
