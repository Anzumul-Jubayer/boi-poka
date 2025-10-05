import React from 'react';
import errorImg from '../../assets/error.png'
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;