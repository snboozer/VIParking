const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = require('graphql');

const LaunchType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        customer_id: { type: GraphQLInt },
        title: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        events:{
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                return axios.get ('https://api.spacexdata.com/v3/launches')
                .then(res => res.data)
            }

        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery
});


// const bodyParser = require("body-parser");

// //pull properties from object
// const { buildSchema } = require("graphql");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const Event = require("./models/event");
// const User = require("./models/user");



// app.use(bodyParser.json());

// app.use(
//     "/graphql",
//     graphqlHttp({
//         //queries
//         schema: buildSchema(`
//     type Event {
//       _id: ID!
//       title: String!
//       description: String!
//       price: Float!
//       date: String!
//     }

//     type User {
//       _id: ID!
//       email: String!
//       password: String
//     }

//     input EventInput {
//       title: String!
//       description: String!
//       price: Float!
//       date: String!
//     }
//     input UserInput {
//       email: String!
//       password: String!
//     }
//       type RootQuery {
//         events: [Event!]!
//       }

//       type RootMutation {
//           createEvent(eventInput: EventInput): Event
//           createUser(userInput: UserInput): User
//       }

//       schema {
//         query: RootQuery
//         mutation: RootMutation
//        } 
//       `),
//         //bundle of all resolvers; event keys need events resolver
//         rootValue: {
//             events: () => {
//                 return Event.find()
//                     .then(events => {
//                         return events.map(event => {
//                             return { ...event._doc, _id: event._doc._id.toString() };
//                         });
//                     })
//                     .catch(err => {
//                         throw err;
//                     });
//             },
//             createEvent: args => {
//                 const event = new Event({
//                     title: args.eventInput.title,
//                     description: args.eventInput.description,
//                     price: +args.eventInput.price,
//                     date: new Date(args.eventInput.date)
//                 });
//                 //saves data into the database
//                 return event
//                     .save()
//                     .then(result => {
//                         console.log(result);
//                         return { ...result._doc, _id: result._doc._id.toString() };
//                     })
//                     .catch(err => {
//                         console.log(err);
//                         throw err;
//                     });
//             },
//             createUser: args => {
//                 return User.findOne({ email: args.userInput.email })
//                     .then(user => {
//                         if (user) {
//                             throw new Error("User already exists.");
//                         }
//                         return bcrypt.hash(args.userInput.password, 12);
//                     })

//                     .then(hashedPassword => {
//                         const user = new User({
//                             email: args.userInput.email,
//                             password: hashedPassword
//                         });
//                         return user.save();
//                     })
//                     .then(result => {
//                         return { ...result._doc, password: null, _id: result.id };
//                     })
//                     .catch(err => {
//                         throw err;
//                     });
//             }
//         },

//         graphiql: true
//     })
// );
// var MONGODB_URI =
//     process.env.MONGODB_URI ||
//     `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ndqyw.mongodb.net/${process.env.MONGO_DB}`;
// mongoose.set("useUnifiedTopology", true);
// mongoose
//     .connect(MONGODB_URI, { useNewUrlParser: true })
//     .then(() => {
//         app.listen(3001);
//     })
//     .catch(err => {
//         console.log(err);


//         // export default Parking;
//     });
