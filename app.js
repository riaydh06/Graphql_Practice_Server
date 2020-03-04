const express = require('express');
const graphqlHTTP = require('express-graphql')
const app = express();
app.use('/graphql', graphqlHTTP({
    
}))
app.listen(4000,()=>{
    console.log('Now listening from 4000 post')
})