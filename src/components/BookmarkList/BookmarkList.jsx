import React from 'react';

const BookmarkList = ({bookmark}) => {
    return (
        <div className='bg-white px-1 py-1 rounded-xl mb-1 rounded-lg border-2'>
            <p className='text-lg font-semibold p-1'>{bookmark.title} </p>
        </div>
    );
};

export default BookmarkList;