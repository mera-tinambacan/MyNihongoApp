// ------ Setup Dependencies ------ //
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');


// ------ Require different routes ------ //
const lessonRoutes = require("./routes/lessonRoutes");
const noteRoutes = require("./routes/noteRoutes");

// ------ Create app using express() ------ //
const app = express();

// ------ Database Connection ------ //
mongoose.set({ strictQuery: false });
mongoose.connect("mongodb+srv://admin:admin@zuittbatch243.azu7fek.mongodb.net/Nihongo?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology:true
})

// ------ Handling of errors ------ //
mongoose.connection.on("error", console.error.bind(console, "connection error"));
mongoose.connection.once('open',() => console.log("Now connected to MongoDB Atlas"));

//------ Middlewares ------ //
app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//------ Allow access to different routes ------ //
app.use("/lessons", lessonRoutes);
app.use("/notes", noteRoutes);

//------ Allow requests from a specific origin
app.use(cors({
    origin: 'https://my-nihongo-app-client.vercel.app' // Replace with your frontend domain
}));

app.listen(process.env.PORT || 4000, () =>{
	console.log(`API is now online on port ${process.env.PORT||4000}`);
})