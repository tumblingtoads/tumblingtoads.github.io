import logo from './logo.svg';
import './App.css';
import travel from './blog/travel.json';
import Topbar from './Topbar';
import Content from './Content';
import { useState, useEffect } from 'react';
import Blogs from './Blogs';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [currentPost, setCurrentPost] = useState(null);

  let content = currentPost == null ? <Blogs notifyParent={(post) => {setCurrentPost(post)}} posts={travel}></Blogs> : <Content post={currentPost}/>;
  
  return(
    <div>
      <Topbar></Topbar>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Blogs notifyParent={(post) => {setCurrentPost(post)}} posts={travel}></Blogs>}/>
            <Route path="/blog" element={ <Content post={currentPost}/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
