import React from "react";
import Header from "../components/Header";
import ForumsTile from "../components/notifications.jsx/NotificationsTile";

const Forum = ()=>{
    const content ={
        title: "Water shortage",
        name:"Joan Munde",
        topic: "shortage of water",
        description: "water has been an issue, we lack water it is has been one week now",


    }
    const content1 ={
      title: "Water",
      name:"Mollen Munde",
      topic: "shortage of kibandas",
      description: "water has been an issue, we lack water it is has been one week now",


    }
    const content2 ={
      title: "Water",
        name:"Angela Munde",
        topic: "shortage of electricity",
        description: "water has been an issue, we lack water it is has been one week now",
    }

    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Forums" category=""/>
            <ForumsTile content ={content}/>
            <ForumsTile content ={content1}/>
            <ForumsTile content ={content2}/>




            



        </div>
    )
}
export default Forum