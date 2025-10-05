import React, { Suspense } from 'react';
import BookCard from './BookCard';

const Books = ({data}) => {
    
    
    return (
        <div className='mb-10'>
            <h1 className='font-bold text-5xl text-center mb-10'>Books</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <Suspense>
            {
            data.map(el=><BookCard key={el.bookId} el={el}></BookCard>)
          }
          </Suspense>
        </div>   
        </div>
    );
};

export default Books;
