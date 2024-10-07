const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const organRoutes = require('./routes/organRoutes'); 
//const errorHandler = require('./middleware/errorHandler');


dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/organs', organRoutes);

//app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
