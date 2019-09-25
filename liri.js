//read and set any environment variables with the dotenv package
require("dotenv").config();

//import the keys.js file and stores it in 'keys' variable
var keys = require("./keys.js");
//access to my personal spotify api information
var spotify = require("node-spotify-api");
//access to my personal spotify api information
var spotify = new Spotify(keys.spotify);