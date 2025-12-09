import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilites/AddToDB';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book =>book.bookId === bookId);
    const {bookName, image} = singleBook;

    const handleMarkAsRead = (id)=>{
        // store with id
        // where to store
        // array or collection
        // if book already exist the show a alert 
        // if book not exist then push in the collection or array
        addToStoreDB(id);

    }
    return (
        <div className='border-2 w-2/3 mx-auto'>
            <img className='w-[300px]' src={image} alt={bookName} />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent'>Mar as Read</button>
            <button className='btn btn-info ml-6'>Add to WishList</button>
        </div>
    );
};

export default BookDetails;