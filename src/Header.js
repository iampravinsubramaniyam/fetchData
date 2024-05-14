import React from 'react';
import "./style.css";


const Header = ({handleReq,userReq,postReq,commentReq}) =>{
    return(
        
        <header className = "Header">
            <div
                className='btn'
                onClick={()=>handleReq('user')}
                style = {userReq?{backgroundColor:"white",color:'black'}:{}}
            >
                users
            </div>

            <div
                className='btn'
                onClick={()=>handleReq('post')}
                style = {postReq?{backgroundColor:"white",color:'black'}:{}}
            >
                post
            </div>

            <div
                className='btn'
                onClick={()=>handleReq('comments')}
                style = {commentReq?{backgroundColor:"white",color:'black'}:{}}
            >
                comments
            </div>

        </header>
    )
}



export default Header;