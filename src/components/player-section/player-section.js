import './player-section.css'

const Section2 = () => {
    return(
    <div className='player-section'>
        <h1 className="text-3xl font-bold underline">Your Board</h1>
        <div className=' your-board position: relative h-96 w-96'>
            <div className='position: relative w-full h-full rounded-full border-4 shadow-2xl overflow-hidden'>
                <div className='box1'>
                    <span className='span1-1'></span>
                    <span className='span2-1 rotate-90'></span>
                    <span className='span3-1 rotate-180'></span>
                    <span className='span4-1 -rotate-90'></span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Section2