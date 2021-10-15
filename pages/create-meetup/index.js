import React from 'react'
import {useRouter} from 'next/router';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';
function CreateMeetUpPage() {
    const router =useRouter();
    const AddMeetUpHandler = async (data)=>{


        const response = await fetch('/api/create-meetup',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });

        const result = await response.json();

        console.log(result);
        router.push('/');
      
       
    };
    
    return (
            <NewMeetUpForm onAddMeetup={AddMeetUpHandler}></NewMeetUpForm>
    )
}

export default CreateMeetUpPage;
