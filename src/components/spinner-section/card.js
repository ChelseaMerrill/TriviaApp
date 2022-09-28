const Card = () => {
    return (
        <div className='max-w-sm w-3/6 lg:max-w-full lg:flex m-8 border border-gray-400'>
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

export default Card