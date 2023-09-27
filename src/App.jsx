import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [notification, setNotification] = useState(false);

  const notify = () =>  toast('Already bookmarked!!!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: 'bg-[#e74c3c]/70 text-inherit text-lg'
  });


  const handleBookmark = (title, id) => {
    const exist = bookmarks.find(bk => bk.id === id);
    if(exist){ 
      setNotification(true);
      notify();
    }
    else{
      const newBookmark = [...bookmarks, {id, title}];
      setBookmarks(newBookmark);
    }
  };


  const handleReadTime = (time) => {
    const totalReadTime = time + readTime;
    setReadTime(totalReadTime);
  }


  useEffect(() => {
    async function loadData() {
      const res = await fetch('/fakeData/blog.json')
      const data = await res.json();
      setPosts(data);
    }
    loadData();
  } , []);

  return (
    <>
    <div className="container mx-auto">
      <div className='sticky top-0 z-50'>
        <Header/>
        <hr/>
      </div>

      <div className="grid grid-cols-8 gap-1">
        <div className='col-span-6 z-0'>
          {
            posts.map( post => <MainSection post={post} key={post.id} handleBookmark={handleBookmark} handleReadTime={handleReadTime} notification={notification} />)
          }
          <ToastContainer />
        </div>
        <div className='col-span-2'>
          <div className='sticky top-20 z-0'>
            <Sidebar bookmarks={bookmarks} readTime={readTime} />
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default App

