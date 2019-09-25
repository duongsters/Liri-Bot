//read and set any environment variables with the dotenv package
require("dotenv").config();

//import the keys.js file and stores it in 'keys' variable
var keys = require("./keys.js");
//access to my personal spotify api information
var spotify = require("node-spotify-api");
//access to my personal spotify api information
var spotify = new Spotify(keys.spotify);
//access to the filesystem
var fs = require("fs");

//include the axios npm package stored within 'axios' variable
var axios = require("axios");
//include the moment npm package stored within 'moment' variable
var moment = require("moment");


//grabs 'titleArtist' variable within the 3rd node of argument line
var titleArtist = process.argv[2];

