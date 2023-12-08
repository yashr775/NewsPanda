import express from 'express';

const app =express();
var cors = require('cors');

const PORT = 5000;

app.use(cors());

app.use('/api/user',require('./routes/user'));

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
})

