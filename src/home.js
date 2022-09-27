import Section1 from "./components/spinner-section/spinner-section";
import Section2 from "./components/player-section/player-section";
import Section3 from "./components/scores-section/scores-section";
import './App.css';

const Home = () => {
    return(
    <div className='grid grid-cols-2 gap-20 p-8 flex flex-wrap'>
        <div className=" test ">
            <Section1/>
        </div>
        <div className='test'>
            <div className=" test2 h-2/3">
                <Section2/>
            </div>
            <div className=" test2 h-1/3">
                <Section3/>
            </div>
        </div>
        
        
    </div>
    )
}

export default Home