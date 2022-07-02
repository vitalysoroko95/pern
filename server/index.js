const express = require('express');
const PORT = process.env.PORT || 8080;
const mainRouter = require('./routes/main.routes')
const cors = require('cors')

const app = express();

app.use(cors())
app.use('/api', mainRouter)

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })