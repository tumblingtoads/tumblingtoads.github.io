import logo from './logo.svg';
import './App.css';
import travel from './blog/travel.json';
import Topbar from './Topbar';
import Content from './Content';
import { useState, useEffect } from 'react';
import Blogs from './Blogs';

function App() {
  const [currentPost, setCurrentPost] = useState(null);

  let content = currentPost == null ? <Blogs notifyParent={(post) => {setCurrentPost(post)}} posts={travel}></Blogs> : <Content post={currentPost}/>;
  
  return (
    <div className="Page">
      <Topbar 
        notifyParent={(post) => {
          setCurrentPost(post)
        }}
        posts={travel}
      />
      {content}
    </div>  
  );
}

export default App;
