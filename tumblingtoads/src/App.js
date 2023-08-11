import logo from './logo.svg';
import './App.css';
import travel from './blog/travel.json';
import Topbar from './Topbar';
import Content from './Content';
import { useState, useEffect } from 'react';

function App() {
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <div className="Page">
      <Topbar 
        notifyParent={(post) => {
          setCurrentPost(post)
        }}
        posts={travel}
      />
      <Content 
        post={currentPost == null ? travel[0] : currentPost}/>
    </div>  
  );
}

export default App;
