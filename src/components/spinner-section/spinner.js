import './spinner-section.css'; 

const Spinner = () => {
    let colors={

    }
    return(
    <div className='spinner-section'>
        <h1 className="text-3xl font-bold underline">Spinner</h1>
        <div className='main-box'>
            <div className='box'>
                <div className='box1'>
                    <span className='span1'></span>
                    <span className='span2 rotate-90'></span>
                    <span className='span3 rotate-180' ></span>
                    <span className='span4 -rotate-90'></span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Spinner