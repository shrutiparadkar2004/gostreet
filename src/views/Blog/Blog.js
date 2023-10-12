import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from './../../components/Card/Card';
import './Blog.css';
function Blog() {
    const [blog ,setBlog]=useState( [
        {
            title: 'CheckEnv: Fast Detection of RPC Calls Between Environments Powered by Graphs',
            description : 'Uber consists of a large number of loosely coupled microservices that interact with each other through remote procedure calls (RPCs). These RPC calls serve as the communication mechanism between services, allowing them to exchange data and invoke specific actions. The complex nature of the call chain, combined with the involvement of numerous services.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/09/Cover.jpg'
        },
        {
            title: 'How Uber Optimized Cassandra Operations At Scale',
            description: 'Each day, the Uber app moves millions of people around the world and delivers tens of millions of food and grocery orders. Each trip or delivery order depends on multiple low-latency and highly reliable database interactions. Uber has been running an open-source Apache Cassandra® database as a service that powers a variety of mission-critical OLTP workloads for more than six years now at Uber scale, with millions of queries per second and petabytes of data.',
            img : 'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/07/My-project-4.jpg'
        },
        {
            title: 'Bypassing Large Diffs in SubmitQueue',
            description: 'Uber uses a system called SubmitQueue to verify all changes before landing them on the main branch. SubmitQueue solves the same problem as Github’s “merge queue” and GitLab’s “merge train” features, speculatively executing CI in parallel and ensuring our main branch stays green while landing thousands of commits per day. Some changes take a long time to build and test and thus block many other changes from landing during that time. ',
            img : 'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/08/cover-copy.jpg'
        }

    ]);
    return (
        <>
       <Navbar/>
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
     <Footer/>

        </>
    )
}

export default Blog