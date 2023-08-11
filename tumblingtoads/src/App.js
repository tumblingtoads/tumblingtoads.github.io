import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState("");
  return (
    <div className="Page">
      <Sidebar 
        notifyParent={(post) => {
          console.log("clicked");
          setPost(post);
        }}
      />
      <Content 
        post={post}/>
    </div>  
  );
}

export default App;
