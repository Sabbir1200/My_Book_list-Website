import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // },[])

    const bookPromise = fetch('/booksData.json').then(res => res.json());

    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-bold'>Books</h1>
           <Suspense
    fallback={
        <div className='text-center'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }
>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
    }
    </div>
</Suspense>

        </div>
    );
};

export default Books;