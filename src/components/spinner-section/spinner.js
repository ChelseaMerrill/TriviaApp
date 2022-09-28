import './spinner-section.css';
// import Card from './card';

const Spinner = () => {
    return (
        <div className='spinner-section'>
            <div id='main-box' className='main-box position: relative mb-6'>
                <div id='box' className='box position: relative w-full h-full rounded-full border-4 shadow-2xl overflow-hidden'>
                    <div className='box1'>
                        <span className='span1 bg-red-600'><b>1</b></span>
                        <span className='span2 rotate-90 bg-yellow-300'><b>2</b></span>
                        <span className='span3 rotate-180 bg-green-400' ><b>3</b></span>
                        <span className='span4 -rotate-90 bg-blue-700'><b>4</b></span>
                    </div>
                    <button className='spin position: absolute ring-4 ring-orange-500/80 bg-slate-200 shadow-inner rounded-full h-14 w-14 top-1/2 left-1/2' onClick={spinFunction}>Spin</button>
                </div>
            </div>
            <div>
                <h1>The winner is:</h1>
            </div>


            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Vertically centered modal
            </button>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-500" id="exampleModalScrollableLabel">Trivia Question</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body relative p-4">
                        <ul className="text-gray-500 text-base">
                                    <li>Option 1</li>
                                    <li>Option 2</li>
                                    <li>Option 3</li>
                                    <li>Option 4</li>
                                </ul>
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

const spinFunction = () => {
    var x = 1024;
    var y = 9999;

    var deg = Math.floor(Math.random() * (x - y)) + y

    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

}

const Card = () => {
    return (
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" className='max-w-sm w-3/6 lg:max-w-full lg:flex m-8 border border-gray-400'>
            <div className="bg-yellow-300 w-32"></div>
            <div className=" w-96 bg-white p-4 ">
                <div className="mb-8">
                    <div className="text-gray-600 font-bold text-xl mb-2">Trivia Question</div>
                    <ul className="text-gray-500 text-base">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Spinner