import { useState } from 'react';
import './App.css';
import Header from './Header.js'
import {useEffect} from 'react';
import Content from './Content.js';

function App() {
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);
  const [comments,setComments] = useState([]);

  const [userReq,setUserReq] = useState(true);
  const [postReq,setPostReq] = useState(false);
  const [commentReq,setCommentReq] = useState(false);


  const API_URL = 'https://jsonplaceholder.typicode.com';


  const handleReq = (req) =>{
      switch(req){
        case 'user':
          setUserReq(true);
          setPostReq(false);
          setCommentReq(false);
          break;
        case 'post':
          setUserReq(false);
          setPostReq(true);
          setCommentReq(false);
          break;
        case 'comments':
          setUserReq(false);
          setPostReq(false);
          setCommentReq(true);
          break;
        default:
          break;
      }
  }


  useEffect(()=>{


    const fetchUsers = async () =>{
      try{
        const response = await fetch(`${API_URL}/users`);
          if(!response.ok){
            throw Error("User data not received")
          }
          const userData = await response.json();
          console.log(userData);
          setUsers(userData);        
      }catch(err){
          alert(err.message);
      }
    }


    const fetchPosts = async () =>{ 
      try{
        const response = await fetch(`${API_URL}/posts`)
          if(!response.ok){
            throw Error("Post data not Received")
          }
          const posts = await response.json();
          setPosts(posts);
      }catch(err){
          alert(err.message)
      }

    }

    const fetchComments = async () =>{
      try{
        const response = await fetch(`${API_URL}/comments`);
        if(!response.ok){
          throw Error("Comments data not received");
        }

        const comments = await response.json();
        setComments(comments);
      }catch(err){
        alert(err.message)
      }
    }


    (async ()=> fetchUsers())();
    (async ()=> fetchPosts())();
    (async ()=> fetchComments())();

  },[])

  return (
    <main>
        <Header 
            handleReq = {handleReq}  
            userReq = {userReq}
            postReq ={postReq}
            commentReq = {commentReq}
        />

        <Content 
            users = {users}
            posts = {posts}
            comments = {comments}
            userReq = {userReq}
            postReq = {postReq}
        />

    </main>
  );
}

export default App;
