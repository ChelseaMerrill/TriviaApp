const Card = () => {
    return (
        <div className='max-w-sm w-5/6 lg:max-w-full lg:flex m-8'>
            <div className="bg-yellow-300 w-32"></div>
            <div className=" w-96 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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