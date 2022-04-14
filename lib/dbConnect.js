import mongoose, { connection } from 'mongoose'


async function dbConnect(){
    if(connection.isConnected){
        return;
    }

  const db =   mongoose
    .connect(process.env.NEXT_PUBLIC_MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("server started");
    })
    .catch((err) => {
        console.log(err);
    });
}

export default dbConnect;
