import React from 'react';
import bookImg from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className='flex gap-30 flex-col lg:flex-row items-center my-10 bg-gray-200 p-10 rounded-sm'>
            <div className='lg:px-20'>
                <h1 className='font-bold text-6xl'>Books to freshen up   your <br />  bookshelf</h1> <br />
                <button className="btn mr-4 bg-green-400 text-white rounded-lg">View The List</button>
            </div>
            <div>
                <img src={bookImg} alt="" className='rounded-lg' />
            </div>
        </div>
    );
};

export default Banner;