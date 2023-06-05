require('dotenv').config();
const express= require("express");
const app = express();

const eurekaHelper = require('./eureka');

const api=require("./routers/routes");

const port= process.env.PORT;

app.use(api);

eurekaHelper.registerWithEureka('user-service', port);

app.listen(5000,()=>{
   console.log(`server running at ${port}`);
});