import React from 'react';
import BookmarkList from '../BookmarkList/BookmarkList';

const Sidebar = ({bookmarks, readTime}) => {
    return (
        <div>
            <div className='mt-3 rounded border-2 border-[#6047EC] bg-[#6047EC]/10'>
                <p className='text-xl font-black p-3'>Spent time on read: {readTime} mins </p>
            </div>

            <div className='bg-[#111111]/10 mt-3 px-2 py-3 rounded-lg'>
                <div className='pl-1'>
                    <p className='text-xl font-bold'>Bookmarked Blogs: {bookmarks.length} </p>
                </div>

                <div className='px-1 py-2 rounded-xl border-2 mb-1'>
                {
                    bookmarks?.map(bookmark => <BookmarkList key={bookmark.id} bookmark={bookmark} />)
                }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;