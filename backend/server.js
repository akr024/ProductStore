import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send("server is ready!")
})

app.listen(3000, () => {
    console.log("Server started at port http://localhost:3000")
})

