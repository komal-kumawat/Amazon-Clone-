const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/UserRoutes');
const orderRoutes = require('./routes/OrderRoutes');


dotenv.config();
const app = express(1);
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongoDB successfully connected");
}).catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("running");
});
app.listen(PORT,()=>{
    console.log(`app istening to port ${PORT}`);
})
