import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const IndexPage =(props)=>{

    return (
        <MeetupList meetups={props.meetup}></MeetupList>
    )
}
export const getServerSideProps =async ()=>{

    const client =await MongoClient.connect('mongodb+srv://Abhishek:XyyGNcXoq2EaCvUi@cluster0.948su.mongodb.net/meetups?retryWrites=true&w=majority');
    const db =client.db();

    const meetupsCollection =db.collection('meetup');

   const data = await meetupsCollection.find().toArray();
    
   
    client.close();

    return{
        props:{
            meetup: data.map((meetup)=>{
                return {
                    title:meetup.title,
                    image:meetup.image,
                    address:meetup.address,
                    description:meetup.description,
                    id:meetup._id.toString()
                }

            })
        }

    }
    
    };
export default IndexPage;