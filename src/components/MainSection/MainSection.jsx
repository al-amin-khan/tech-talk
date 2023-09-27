import React from 'react';
import Post from '../Post/Post';

const MainSection = ({post, handleBookmark, handleReadTime, notification}) => {

    return (
        <div className='container mx-auto px-4 py-3 flex justify-center'>
            <Post post={post} handleBookmark={handleBookmark} handleReadTime={handleReadTime} />
        </div>
    );
};

export default MainSection;