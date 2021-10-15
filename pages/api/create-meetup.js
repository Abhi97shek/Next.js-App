import {MongoClient} from 'mongodb';

async function handler(req,res){
  
    if(req.method === "POST")
        {
            const data = req.body;
            const {title,image,address,description} = data;
            

           const client =await MongoClient.connect('mongodb+srv://Abhishek:XyyGNcXoq2EaCvUi@cluster0.948su.mongodb.net/meetups?retryWrites=true&w=majority');
            const db =client.db();

            const meetupsCollection =db.collection('meetup');

           const result = await meetupsCollection.insertOne({
                title,
                image,
                address,
                description
            });


        
           

            client.close();


            res.status(201).json({message:"Meetup inserted"});
        } 

};


export default handler;