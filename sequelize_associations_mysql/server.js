const express = require('express');
const app = express();
const port = process.env.PROT || 3000;
const db=require('./models');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const studentRoute=require('./routes/student-route');
app.use('/api/student',studentRoute);


const userRoute=require('./routes/user-route');
app.use('/api/user',userRoute);

const orgRoute=require('./routes/organization-route');
app.use('/api/org',orgRoute);

const depRoute=require('./routes/department-route');
app.use('/api/dep',depRoute);

app.get('/', (req, res) => res.send('Hello World!'));

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`listening on port http://localhost:${port}!`)
    });
});
