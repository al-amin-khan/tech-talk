import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

const Post = ({post, handleBookmark, handleReadTime}) => {

    const {author, title, publishDate, readTime, authorProfileImage, image, hashTag, id } = post;

    const formatedDate = moment(publishDate).format('MMMM DD, YYYY');
    const daysOfPosting =  moment(publishDate).fromNow();


    return (
        <div className='mb-3'>
            <div className="max-w-3xl rounded overflow-hidden shadow-lg">
                <img className="w-full rounded-lg" src={image} alt="Sunset in the mountains" />
                <div className='my-2 py-2 w-full'>
                    <div className='grid grid-cols-2 gap-0'>
                        <div className='flex flex-row'>
                            <div>
                                <img className='w-11 rounded-full' src={authorProfileImage} alt={author} />
                            </div>
                            <div className='ml-3'>
                                <p className='font-bold text-xl'>{author}</p>
                                <p className='font-bold text-[#111111]/60'>{formatedDate}. ({daysOfPosting}) </p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-end'>
                            <div className="">
                                <div>
                                    <p className='font-bold text-[#111111]/60'>{readTime} min read</p>
                                </div>
                            </div>
                            <div className='px-4'>
                                <button className='text-[blue]/60' onClick={ () => {handleBookmark(title, id)}}  > <FontAwesomeIcon icon={faBookmark} /> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 py-1">
                    <div className="font-bold text-3xl mb-2"> {title} </div>
                </div>
                <div className="px-2 pt-0 pb-2">
                    {
                        hashTag?.map((ht, i) => {
                            return (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={i}> {ht} </span>
                            )
                        })
                    }

                </div>
                <div className='pl-2 mb-4'>
                    <button className='underline text-[#6047EC] font-bold' type="button" onClick={ () => {handleReadTime(readTime)}}>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Post;