const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require('./viparking/src/schema');

const app = express();

app.use('/graphql', graphqlHttp({
  schema,
  graphql:true

})
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));




