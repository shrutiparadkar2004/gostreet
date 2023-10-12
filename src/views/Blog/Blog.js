import React from 'react';
import ReactDOM from 'react-dom/client';
import{useState} from 'react'
import Card from './../../Component/Card/Card'
import './Blog.css';
function Blog() {
    const [blog ,setBlog]=useState( [
        {
            title: 'CheckEnv: Fast Detection of RPC Calls Between Environments Powered by Graphs',
            description : 'Uber consists of a large number of loosely coupled microservices that interact with each other through remote procedure calls (RPCs). These RPC calls serve as the communication mechanism between services, allowing them to exchange data and invoke specific actions. The complex nature of the call chain, combined with the involvement of numerous services.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/09/Cover.jpg'
        }]);
    return (
        <>

       <div>
         <div className='content'>
         {
            blog.map((blog,index)=>{
                const {title,description,img}=blog;
                
                return (<Card 
                        key={index} 
                         img={img} 
                         title={title} 
                         description={description} />)
                      })
         }
       </div>
      </div>
            

        </>
    )
}

export default Blog