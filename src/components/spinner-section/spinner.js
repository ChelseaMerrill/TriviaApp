import './spinner-section.css'; 

const Spinner = () => {

    return(
    <div className='spinner-section'>
        <h1 className="text-3xl font-bold underline">Spinner</h1>
        <div className='main-box position: relative'>
            <div className='box position: relative w-full h-full rounded-full border-4 shadow-2xl overflow-hidden'>
                <div className='box1'>
                    <span className='span1 bg-red-600'><b>1</b></span>
                    <span className='span2 rotate-90 bg-yellow-300'><b>2</b></span>
                    <span className='span3 rotate-180 bg-green-400' ><b>3</b></span>
                    <span className='span4 -rotate-90 bg-blue-700'><b>4</b></span>
                </div>
                <button className='spin position: absolute ring-4 ring-orange-500/80 bg-slate-200 shadow-inner rounded-full h-14 w-14 top-1/2 left-1/2'>Spin</button>
            </div>
        </div>
    </div>
    );
}

export default Spinner