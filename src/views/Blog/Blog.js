import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from './../../components/Card/Card';
import './Blog.css';
function Blog() {
    const [blog ,setBlog] = useState( [
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
        },
        {
            title: 'Evolution of Data Lifecycle Management at Uber',
            description :'In this blog, we will share the details of our journey on Data Lifecycle Management (DLM) at Uber. We’ll start with some of the initial work, our realization of the need for a unified system, the different aspects of such a system, and the architecture to realize it. Finally, we’ll wrap up with some forward-looking views for Uber’s DLM System.DLM is critical to any organization to meet the 3 key goals of Compliance, Cost Efficiency, and Data Reliability.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/08/Rectangle-1.png'
        },
        {
            title:'From Light to Dark: The Story Behind Dark Mode on the Android Uber App',
            description:'Dark mode was natively supported by the release of Android Q. It has started to become a popular feature since it reduces eye strain in low-light environments, it’s aesthetically pleasing, and battery-efficient in modern hardware. We wanted to bring these benefits to the Android Uber Rider app.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/10/Cover.png'
        },
        {
            title:'Attribute-Based Access Control at Uber',
            description:'Uber relies on microservices to support its operations. Microservices necessitate a flexible authorization policy model to satisfy their unique authorization requirements. Attribute-based access control (ABAC) offers a dynamic, context-aware, and risk-intelligent approach to access control. By leveraging ABAC, access control policies can be crafted based on specific attributes obtained from diverse information systems.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/07/My-project-4-copy.jpg'
        },
        {
            title:'Measuring Performance for iOS Apps at Uber Scale',
            description:'At Uber, we obsess over delivering highly performant and reliable experiences to our partners and customers. We treat degradations to app performance the same way as any other functional regressions.Before investing effort into improving performance and reliability, we need to understand how our app is performing in production. We use various tools to derive metrics that allow us to measure app performance and reliability.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/04/My-project-2-2.png'
        },
        {
            title:'Uber’s Sustainable Engineering Journey',
            description:'Uber has made a commitment to sustainability by setting several goals across various sectors. By 2030, Uber plans to become a zero-emission mobility platform in Canada, Europe, and the US – and by 2040, worldwide. Uber Green, which offers no- or low-emission rides, has become the most widely-available option of its kind globally. However, this commitment encompasses more than just rides, as it also includes Uber’s engineering infrastructure such as its data centers and hardware resources.',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=2048,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/03/My-project-1.png'
        },
        {
            title:'Making business travel seamless',
            description:'According to reports from the Global Business Travel Association (GBTA), “despite concerns about inflation and rising prices, only one in five travel managers says their companies have begun to limit business travel.” With demand still high, travel managers face an increasing challenge to balance cost savings without sacrificing the employee experience. Our goal is to meet our customers at the intersection of cost savings and raising standards',
            img:'https://blog.uber-cdn.com/cdn-cgi/image/width=1280,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/03/01_U4B_BusinessTravelAirport_1920x1080.jpg'
        }

            

    ]);
    return (
        <>
       <Navbar/>
       <div className='content'>
         {
            blog.map((blog,index)=>{
                const {title,description,img}=blog;
                
                return (<Card 
                        key={index} 
                        title={title} 
                         img={img} 
                          description={description} />)
                      })
         }
       </div>
     <Footer/>

        </>
    )
}

export default Blog;