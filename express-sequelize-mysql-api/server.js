const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
const db=require('./models');
const apiRoute=require('./routes/apiRoutes');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',apiRoute);


app.get('/', (req, res) => res.send('Hello World!'));

db.sequelize.sync().then(()=>{
    app.listen(port, () => console.log(`Listen on :- http://localhost:${port}`));
});

