import './spinner-section.css'; 
import QuestionsArray from '../../files/question-data'

const Spinner = () => {
    return(
    <div className='spinner-section'>

        <div id ='main-box' className='main-box position: relative mb-6'>
            <div id ='box' className='box position: relative w-full h-full rounded-full border-4 shadow-2xl overflow-hidden'>
                <div className='box1'>
                    <span className='span1 bg-red-600'><b>1</b></span>
                    <span className='span2 rotate-90 bg-yellow-300'><b>2</b></span>
                    <span className='span3 rotate-180 bg-green-400' ><b>3</b></span>
                    <span className='span4 -rotate-90 bg-blue-700'><b>4</b></span>
                </div>
                <button className='spin position: absolute ring-4 ring-orange-500/80 bg-slate-200 shadow-inner rounded-full h-14 w-14 top-1/2 left-1/2' onClick={spinFunction} >Spin</button>
            </div>
        </div>

        <div>
            <h1>The winner is:</h1>
        </div>
    </div>
    );
}

const spinFunction = () => {

    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x-y)) + y

    document.getElementById('box').style.transform = "rotate("+deg+ "deg)";

}

export default Spinner