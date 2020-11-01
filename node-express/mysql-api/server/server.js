const express = require('express');
const apiRouters=require('./routes');
const app = express();
const port = 3000;
app.use(express.json());


app.use('/',apiRouters);



app.listen(process.env.PORT || port, () => console.log(`Server is runnig on port : ${process.env.PORT || port}`));

