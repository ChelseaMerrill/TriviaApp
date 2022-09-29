import './spinner-section.css';
// import Card from './card';
import QuestionsArray from '../../files/question-data';

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
                    <button className='spin position: absolute ring-4 ring-orange-500/80 bg-slate-200 shadow-inner rounded-full h-14 w-14 top-1/2 left-1/2' data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={spinFunction}>Spin</button>
                </div>
            </div>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none ">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md bg-yellow-300">
                            <h5 className="text-xl font-medium leading-normal text-gray-500" id="exampleModalScrollableLabel">Trivia Question</h5>
                            <button type="button"className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">
                            <div className="flex justify-left">
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                        Option 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                                    Option 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                                    Option 3
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault2">
                                    Option 4
                                    </label>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                {Card()}
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
        <div className='card-group'>
            {QuestionsArray.map(key => {
                if (key.category === 'Geography'){
                    return (
                        <div className='max-w-sm w-3/6 lg:max-w-full lg:flex m-8 border border-gray-400' key={key.id}>
                        <div className="bg-yellow-300 w-32"></div>
                        <div className=" w-96 bg-white p-4 ">
                            <div className="mb-8">
                                <div className="text-gray-600 font-bold text-xl mb-2">{key.question}</div>
                                <ul className="text-gray-500 text-base">
                                    <li>{key.a1}</li>
                                    <li>{key.a2}</li>
                                    <li>{key.a3}</li>
                                    <li>{key.a4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }} 
            )}
        </div>   
    );
}

export default Spinner