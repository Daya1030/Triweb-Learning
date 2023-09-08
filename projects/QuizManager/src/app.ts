import express from 'express';
import mongoose from 'mongoose';
import UserRoute from './routes/user';


const app = express();

const connectionString = "mongodb+srv://daya:1234567890@cluster0.zfa20tr.mongodb.net/workshopdb?retryWrites=true&w=majority";

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("i am don");
})

//Redirect /user to UserRoute
app.use('/user', UserRoute);

async function connectDb(){
    try{
        await mongoose.connect(connectionString);
        app.listen(3000,() => {
            console.log("server Connected");
        });
    } catch (error){
        console.log(error);
    }   

}

connectDb();



