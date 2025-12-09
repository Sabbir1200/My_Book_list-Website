import React, { use } from 'react';
import { IoIosStarHalf } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    console.log(singleBook);

    const {bookName, author,image,bookId, rating, category,tags,yearOfPublishing,publisher } = singleBook;

    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 ">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto '>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center items-center gap-10'>
        {
        tags.map(tag=><button className='btn'>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by : {publisher}</p>
    <div className='border-t border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <IoIosStarHalf /></div>
    </div>
  </div>
</div>
        </div></Link>
    );
};

export default Book;