import React from 'react'
import { MongoClient,ObjectId} from 'mongodb';
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail'
function DetailsPage(props) {

    // const router = useRouter();
    // console.log(router.query.meetupdetails);

   
    return (
        <MeetupDetail details={props.data}></MeetupDetail>
    )
}


export const getServerSideProps= async(context) =>{

    const id= context.query.meetupdetails;
    console.log(context.query.meetupdetails);
    const client =await MongoClient.connect('mongodb+srv://Abhishek:XyyGNcXoq2EaCvUi@cluster0.948su.mongodb.net/meetups?retryWrites=true&w=majority');
    const db =client.db();

    const meetupsCollection =db.collection('meetup');

    const result = await meetupsCollection.findOne({_id:ObjectId(id)});
    console.log(result);

    return{
        props:{
            data:{
                title:result.title,
                description:result.description,
                image:result.image,
                id: result._id.toString()
            }
        }
    }
};


export default DetailsPage
