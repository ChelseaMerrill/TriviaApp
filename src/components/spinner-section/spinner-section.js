import Spinner from "./spinner";
import Timer from "./timer";
// import Card from "./card";

const Section1 = () => {
    return(
    <div className='spinner-section'>
        <h1 className="text-3xl font-bold underline">Spinner Section</h1>
        <Spinner/>
        {/* <Card/> */}
        <Timer/>
    </div>
    );
}

export default Section1