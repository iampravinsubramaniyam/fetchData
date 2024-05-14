import React from 'react';
import './style.css'
import Table from './Table.js'

const Content = ({users,posts,comments,userReq,postReq}) =>{
    return(
        <section className = 'Content'>
            {(userReq)?(
                <Table 
                    data = {users}
                />

            ):(postReq)?(
                <Table 
                    data = {posts}
                />

            ):(
                <Table
                    data = {comments}
                />
            )
            }
        </section>
    )
};

export default Content;