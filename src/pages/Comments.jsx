import React from "react";
import Header from "../components/Header";
import CommentsTile from "../components/notifications.jsx/NotificationsTile";

const Comments = ()=>{
    const content ={
        body: "Seaboard, in concert with the Philip Ndegwa family which holds a 50.93 per cent stake in Unga,",
        created:"01/3/2023",
        post: "1",
        author: "Rehema Nanda",


    }
    const content1 ={
      body: "clean energy measures that Congress approved in Democrats' Inflation Reduction Act.",
      created:"21/3/2023",
      post: "5",
      author: "Amekwi Lucy",


    }
    const content2 ={
      body: " Climate change is here. Beyond doing everything we can to cut emissions and slow the pace of global warming",
      created:"21/3/2023",
      post: "6",
      author: "Amekwi Lucy",
    }

    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Comments" category=""/>
            <CommentsTile content ={content}/>
            <CommentsTile content ={content1}/>
            <CommentsTile content ={content2}/>




            



        </div>
    )
}
export default Comments